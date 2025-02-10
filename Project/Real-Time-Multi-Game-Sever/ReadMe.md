# Real-Time Multiplayer Game Server

This project is a real-time multiplayer game server that uses Redis for:

- **Real-Time Messaging:** Publishing and subscribing to game updates via Redis Pub/Sub.
- **Leaderboard Management:** Tracking player scores using Redis Sorted Sets.
- **Rate Limiting:** Preventing excessive player actions with Redis atomic operations.
- **Distributed Locking:** Ensuring critical game state updates occur safely.

## Project Structure

