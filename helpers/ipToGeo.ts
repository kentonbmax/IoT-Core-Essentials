var geoip = require('geoip-lite')

// external ip requires promisify
require('util.promisify/shim')();

const util = require('util');
const getIP = util.promisify(require('external-ip')());

export async function getIpGeoInfo(ip?:string) {
    let ipAddr = await getIP()
    var geo = geoip.lookup(ipAddr)
    return geo
}