//In this case we are using the sorted Method of zIncr and zAdd!
const client = require('../config/redisClient');

const LEADERBOARD_KEY = 'game:leaderboard';

async function updatePlayerScore(playerId, scoreDelta) {
  await client.zIncrBy(LEADERBOARD_KEY, scoreDelta, playerId);
  console.log(`Updated score for ${playerId} by ${scoreDelta}`);
}

async function getTopPlayers(limit = 10) {
  const topPlayers = await client.zRange(LEADERBOARD_KEY, 0, limit - 1, {
    REV: true,
    WITHSCORES: true,
  });
  console.log('Top Players:', topPlayers);
  return topPlayers;
}

module.exports = { updatePlayerScore, getTopPlayers };
