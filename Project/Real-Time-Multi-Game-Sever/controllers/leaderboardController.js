
const { getTopPlayers } = require('../services/leaderboard');

async function getLeaderboard(req, res) {
  try {
    const topPlayers = await getTopPlayers(10);
    res.json({ success: true, topPlayers });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Error retrieving leaderboard', error: err.message });
  }
}

module.exports = { getLeaderboard };
