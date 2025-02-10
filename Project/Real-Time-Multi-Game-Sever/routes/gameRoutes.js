
const express = require('express');
const { processPlayerAction } = require('../controllers/gameController');

const router = express.Router();

router.post('/action', async (req, res) => {
  const { playerId, actionData } = req.body;
  const result = await processPlayerAction(playerId, actionData);
  res.json(result);
});

module.exports = router;
