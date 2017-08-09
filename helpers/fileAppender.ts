var fs = require('fs');
const NEW_LINE = '\r\n'

export interface IFileAppender {
    writeLine(text:string)
}

export class FileAppender implements IFileAppender {
    fileName:string
    constructor(fileName:string){
        this.fileName = fileName
    }

    writeLine(text:string) {
        var lineToWrite = text
        fs.appendFile(this.fileName, lineToWrite + NEW_LINE, function(err:any) {
            if(err) {
                console.log(err)
            }
        })
    }   
}