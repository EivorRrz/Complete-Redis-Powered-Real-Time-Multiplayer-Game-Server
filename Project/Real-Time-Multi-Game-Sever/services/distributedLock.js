//Lock System at the time one can have the key to the particular!
const client = require('../config/redisClient');

async function acquireLock(lockKey, lockTimeout = 5000) {
    const result = await client.set(lockKey, 'locked', { NX: true, PX: lockTimeout });
    if (result) {
        console.log(`Lock acquired for ${lockKey}`);
        return true;
    }
    console.log(`Failed to acquire lock for ${lockKey}`);
    return false;
}

async function releaseLock(lockKey) {
    await client.del(lockKey);
    console.log(`Lock released for ${lockKey}`);
}

module.exports = { acquireLock, releaseLock };