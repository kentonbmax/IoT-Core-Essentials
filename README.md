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

## Setup
1. Install nodejs (Chakra) on Windows 10, follow steps 3 and 4 [Installing Node Js](https://developer.ibm.com/recipes/tutorials/connecting-raspberry-pi-with-windows-iot-core-as-a-device-to-watson-iot-using-node-red/)
1. Grab your IoT device connection string
1. Grab your device ip address from 
1. Request IoT systemperf, make the performance request using your device Ip address in chrome and note the basic auth token or setup ssh to your device.
1. Update your config.json with this info
1. run: `npm install`
1. run: `npm run watch` or `build` to compile
