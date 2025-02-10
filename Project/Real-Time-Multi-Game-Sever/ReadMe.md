# 🎮 Real-Time Multiplayer Game Backend with Redis

🚀 A high-performance multiplayer game backend using Redis for real-time state management, matchmaking, leaderboards, and session storage.

## 📌 Features
- ✅ Real-time Game State Synchronization using Redis Pub/Sub
- ✅ Matchmaking System with Redis Sorted Sets
- ✅ Leaderboard Management with Redis Sorted Sets
- ✅ Rate Limiting for API requests
- ✅ Distributed Locking for preventing multiple updates on the same resource

## 📂 Project Structure
```bash
/game-backend
│── /src
│   ├── /config          # Configuration files (Redis, Express, etc.)
│   ├── /controllers     # Game logic and business rules
│   ├── /services        # Redis interactions (Pub/Sub, Sorted Sets, etc.)
│   ├── /routes          # API routes
│   ├── /utils           # Helper functions
│   ├── server.js        # Main entry point
│── /tests               # Unit & integration tests
│── package.json         # Dependencies
│── README.md            # Project documentation

