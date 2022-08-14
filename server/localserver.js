console.log("Local Server running");
//--------------------------------------------------------------------------------------------------------------
//require("dotenv").config({path: __dirname + "/.env"});

const { app, router } = require("./app.js");
app.use(router);
const server = require("http").createServer(app);
// if (process.env.AZURE_IOT_HUB_EVENT_HUB_CONNECTION_STRING) {
//   require("./RealTimeApi.js").createSocketIOServer(server);
// }

const PORT = process.env.PORT || 9000;

async function start() {
    try {
        server.listen(PORT, () => {
            console.log(`http://localhost:${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
}


//--------------------------------------------------------------------------------------------------------------

// const express = require('express');
// const http = require('http');
// const WebSocket = require('ws');
// const path = require('path');
// const EventHubReader = require('./event-hub-reader.js');

// console.log(`Using IoT Hub connection string [${iotHubConnectionString}]`);

// // const eventHubConsumerGroup = process.env.EventHubConsumerGroup;
// const eventHubConsumerGroup = "forgewebendpoint";

// console.log(`Using event hub consumer group [${eventHubConsumerGroup}]`);

// // Redirect requests to the public subdirectory to the root

// // const server = http.createServer(app);
// const wss = new WebSocket.Server({ server });

// wss.broadcast = (data) => {
//   wss.clients.forEach((client) => {
//     if (client.readyState === WebSocket.OPEN) {
//       try {
//         console.log(`Broadcasting data ${data}`);
//         client.send(data);
//       } catch (e) {
//         console.error(e);
//       }
//     }
//   });
// };


// const eventHubReader = new EventHubReader(iotHubConnectionString, eventHubConsumerGroup);

// (async () => {
//   await eventHubReader.startReadMessage((message, date, deviceId) => {
//     try {
//       const payload = {
//         IotData: message,
//         MessageDate: date || Date.now().toISOString(),
//         DeviceId: deviceId,
//       };

//       wss.broadcast(JSON.stringify(payload));
//     } catch (err) {
//       console.error('Error broadcasting: [%s] from [%s].', err, message);
//     }
//   });
// })().catch();

 start();