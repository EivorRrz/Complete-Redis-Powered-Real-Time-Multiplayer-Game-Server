// src/controllers/gameController.js
const { isActionAllowed } = require('../services/rateLimiter');
const { acquireLock, releaseLock } = require('../services/distributedLock');
const { publishGameUpdate } = require('../services/gamePublisher');
const { updatePlayerScore } = require('../services/leaderboard');

async function processPlayerAction(playerId, actionData) {

    const allowed = await isActionAllowed(playerId, actionData.type, 10, 5);
    if (!allowed) {
        return { success: false, message: 'Rate limit exceeded' };
    }

    const lockKey = `lock:action:${actionData.target}`;
    const lockAcquired = await acquireLock(lockKey, 3000);
    if (!lockAcquired) {
        return { success: false, message: 'Resource busy, try later' };
    }

    try {

        if (actionData.type === 'score') {
            await updatePlayerScore(playerId, actionData.value);
        }


        await publishGameUpdate('gameRoom:123', { playerId, action: actionData });
    } finally {
        await releaseLock(lockKey);
    }

    return { success: true, message: 'Action processed successfully' };
}

module.exports = { processPlayerAction };
