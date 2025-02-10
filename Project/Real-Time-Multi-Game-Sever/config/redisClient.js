// src/config/redisClient.js
const redis = require('redis');

const client = redis.createClient({
  url: process.env.REDIS_URL || 'redis://localhost:6379'
});

client.on('error', (err) => console.error('Redis error:', err));

(async () => {
  await client.connect();
  console.log('Connected to Redis');
})();

module.exports = client;
