# Windows 10 IoT Core Essentials
> Runs on device or as monitoring server.
* File Appender
* Requests (used to get hardware data from Pi)
* IP to Geo functionality (best with device)
* Azure Device integration for streaming analytics

## Out of the Box
1. Grabs geoip json from external ip address
1. Using IoT resourcemanager api:
  1. Creates message for Azure Device Hub
  1. Logs message to flat file
  1. Sends message to your Device Hub connection per the connection string and interval in config.json

## Service Setup
1. Clone this repo locally
1. Run: `npm install`
1. Run: `npm run build` to build js from typescript
1. Run: `npm start` to run service. 

## IoT Core Device Setup
> 1. Requires understanding of ftp to IoT device [FTP](https://developer.microsoft.com/en-us/windows/iot/docs/ftp)
> 1. Requires understanding of Windows 10 IoT Core Dashboard.
> 1. Requires completion of Service Setup

1. Install nodejs (Chakra) on Windows 10 IoT [Installing Node Js](https://audministrator.wordpress.com/2018/01/15/windows-core-iot-nodejs-on-a-raspberry-pi3/)
1. Grab your IoT device connection string
1. Grab your device ip address from 
1. Request IoT systemperf, make the performance request using your device Ip address in chrome and note the basic auth token or setup ssh to your device.
1. Update your config.json with this info
1. Copy working directory contents to c:\IoT\ESS
1. Device Powershell: `cd c:\node` then `./node.exe cli.js install c:\IoT\ESS`
1. Powershell: `cd c:\IoT\ESS` then `c:\node\node.exe c:\node\cli.js start`
