'use strict'

var request = require('request-promise')
import * as _ from 'lodash'

export function makeRequest(options:any, sortBy?:string) {
    return request(options).then(function(data:any){
        return sortBy? _.sortBy(data, sortBy) : data
    }).error(function(err:any){
        console.log(err)
    })
}