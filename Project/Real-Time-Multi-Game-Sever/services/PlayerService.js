//So here the SUB concepts is used here!
const redis = require('redis');
const subscriber = redis.createClient({
    url: process.env.REDIS_URL || 'redis://localhost:6379'
});

subscriber.on('error', (err) => console.error('Redis Subscriber Error:', err));

(async () => {
    await subscriber.connect();
    console.log('Game Subscriber connected to Redis');
})();

async function subscribeToGameChannel(channel, callback) {
    await subscriber.subscribe(channel, (message) => {
        const update = JSON.parse(message);
        callback(update);
    });
}

module.exports = { subscribeToGameChannel };
