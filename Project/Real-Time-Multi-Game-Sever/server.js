const express = require('express');
const dotenv = require("dotenv")
const app = express();
const PORT = process.env.PORT || 4000;
const gameRoutes = require('./routes/gameRoutes.js')
const leaderboardRoutes = require("./routes/leaderboardRoutes.js")
dotenv.config();

//middlewares
app.use(express.json())


//apiRoutes
app.use('/game', gameRoutes);
app.use('/leaderboard', leaderboardRoutes);


//listen to the server!
app.listen(PORT, () => {
    console.log(`Server is listening on the Port ${PORT}`)
})