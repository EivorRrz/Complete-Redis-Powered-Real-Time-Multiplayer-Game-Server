//Use Cases!
//Building Chat Apps ,Live Notifications ,Event BroadCasting!
//as its  for real time updates!
//scale across multiple services!


//Code!
//Publisher (Send Messages)
const redis = require("redis");
const publisher = redis.createClient();

publisher.connect();

async function sendMessage(channel, message) {
    await publisher.publish(channel, message);
    console.log(`Published: ${message}`);
}

sendMessage("chatRoom", "Hello everyone!");


// Subscriber (Receive Messages)
const redisSubscriber = require("redis");
const Subscriber = redisSubscriber.createClient();

Subscriber.connect();

async function listenMessage(channel) {
    await Subscriber.subscribe(channel, (message) => {
        // Acknowledge that we want to send through the process!
        console.log(`Received: ${message}`);
    });
}

listenMessage("chatRoom");