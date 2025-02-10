//Rate Limit where it can hit a limited hit request over the window!
const client = require('../config/redisClient');

async function isActionAllowed(playerId, action, maxActions = 20, windowSeconds = 60) {
    const key = `rate:${playerId}:${action}`;
    const count = await client.incr(key);

    if (count === 1) {
        await client.expire(key, windowSeconds);
    }

    if (count > maxActions) {
        console.log(`Rate limit exceeded for ${playerId} on action ${action}`);
        return false;
    }

    console.log(`Action allowed for ${playerId}. Count: ${count}`);
    return true;
}

module.exports = { isActionAllowed };
