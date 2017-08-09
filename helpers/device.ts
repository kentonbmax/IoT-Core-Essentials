const CONFIG = require('../config.json')

import * as requestWrapper from './requestWrapper'
import {IFileAppender} from './fileAppender'
import {Message} from 'azure-iot-device'
var clientFromConnectionString = require('azure-iot-device-mqtt').clientFromConnectionString

var client = clientFromConnectionString(CONFIG.connection.azure)

export class Device {
    readonly endpoint: any
    readonly fileAppender: IFileAppender
    readonly geoInfo: any

    constructor(endpoint: any, geoInfoObj: any, fileAppender?: IFileAppender) {
        this.fileAppender = fileAppender
        this.endpoint = endpoint
        this.geoInfo = geoInfoObj
    }

    private printResultFor(op:any) {
        return function printResult(err:any, res:any) {
            if (err) console.log(op + ' error: ' + err.toString())
            if (res) console.log(op + ' status: ' + res.constructor.name)
        }
    }

    private connect(): Promise<any> {
        return new Promise(function(resolve, reject) {
            client.open(function(err:string){
                if (err) {
                    console.log('Could not connect: ' + err)
                    reject(err)
                } else {
                    console.log('Client connected')
                    resolve(true)
                }
            })
            
        })
    }
 
    private sendMessage(ptr) {
        // Create a message and send it to the IoT Hub every second
        setInterval(function() {
            getMessage(ptr.endpoint, ptr.geoInfo, ptr.fileAppender, ptr.printResultFor)
        }, CONFIG.interval)
    }

    async start() {
        await this.connect()
        this.sendMessage(this)
    }
}

var getMessage = async function(endpoint, geoInfo, fileAppender, errorHandler) {
    try {
        let result = await requestWrapper.makeRequest(endpoint.options)
        var msgData = JSON.stringify({ deviceId: endpoint.id, location: geoInfo, data: result })
        var message = new Message(msgData)
        
        if(fileAppender) {
            fileAppender.writeLine(msgData)
        }

        client.sendEvent(message, errorHandler('send'))
    } catch(err) {
        console.log(err)
    }
}