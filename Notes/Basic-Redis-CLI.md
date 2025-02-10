# Start Redis server (if not already running)
redis-server


# Connect to Redis instance
redis-cli

# Basic commands:
redis always store  in key and value pair,So:
SET mykey "Hello Redis!"
DEL mykey
GET mykey


# Working with lists:
LPUSH mylist "first element"
RPUSH mylist "last element"
LRANGE mylist 0 -1


# Using TTL:(Time-To-Live)
SETEX mykey 60 {"This will expire in 60 seconds"}
TTL mykey