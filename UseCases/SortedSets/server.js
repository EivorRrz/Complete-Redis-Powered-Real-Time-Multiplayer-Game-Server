const redis = require("redis");
const client = redis.createClient();

client.connect();

const leaderboardKey = "game:leaderboard";

// Add scores
async function addScore(player, score) {
    await client.zAdd(leaderboardKey, [{ score, value: player }]);
    console.log(`${player} added with score ${score}`);
}

// Get top players
async function getTopPlayers(n) {
    const players = await client.zRange(leaderboardKey, 0, n - 1, { REV: true });
    console.log("Top Players:", players);
}

// Example usage
(async () => {
    await addScore("Amit", 500);
    await addScore("John", 700);
    await addScore("Alice", 600);

    await getTopPlayers(3); // Get top 3 players

    await client.disconnect();
})();

//so here its like not only records the players scores but also sorts them so you can instanly  see  who is winning!!!