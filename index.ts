import * as requestWrapper from './helpers/requestWrapper'
import {FileAppender} from './helpers/fileAppender'
import * as ipToGeo from './helpers/ipToGeo'
import {Device} from './helpers/device'
import * as _ from 'lodash'

const CONFIG = require('./config.json')
let fileAppender = new FileAppender("./log.txt")

const start = async function() {
    let geoIpInfo:any = await ipToGeo.getIpGeoInfo()

    _.each(CONFIG.endpoints, function(endpoint){
        var device = new Device(endpoint, geoIpInfo.ll, fileAppender) 

        device.start()
    })
}

start()