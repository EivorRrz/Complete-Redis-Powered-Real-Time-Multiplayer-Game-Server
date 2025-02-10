const redis = require("redis");
const client = redis.createClient();

client.connect();

async function acquireLock(resource, timeout) {
    const lock = await client.set(resource, "locked", { NX: true, PX: timeout });
    if (lock) {
        console.log(`Lock acquired on ${resource}`);
    } else {
        console.log(`Lock failed: ${resource} is in use`);
    }
}

acquireLock("file1", 5000); // Lock expires in 5s
