const express = require("express");
const session = require("express-session");
const RedisStore = require("connect-redis").default;
const redis = require("redis");

const app = express();
const redisClient = redis.createClient();

redisClient.on("error", (err) => {
    console.error("Error Connecting", err);
});

// Connect to Redis
redisClient.connect(); // Ensure Redis is installed and running

// Configure session
app.use(
    session({
        store: new RedisStore({ client: redisClient }), // Configure Redis store
        secret: process.env.SEC_KEY || "default_secret",
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 60000, // 1 min expiry
        },
    })
);

// Login Route
app.post("/login", (req, res) => {
    req.session.user = { id: 1, name: "Amit" }; // Store user session
    res.send("User Logged In!");
});

// Check session(Protectd Route!)
app.get("/profile", (req, res) => {
    if (req.session.user) {
        res.send(`Welcome ${req.session.user.name}`);
    } else {
        res.send("Please Log In");
    }
});

// Logout Route
app.post("/logout", (req, res) => {
    req.session.destroy(() => {
        res.json({ message: "User Logged Out!" });
    });
});

// Define PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
