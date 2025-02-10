const redis = require('redis');

const client = redis.createClient();

client.on("error", (err) => { 
    console.error("Redis Connection Error", err);
});

(async () => {
    await client.connect();

    // Basic Key-Value Operations
    await client.set('myKey', "Hello Key!");
    console.log('Set:', await client.get("myKey")); 

    await client.del("myKey");
    console.log("Deleted Key:", await client.get("myKey")); 

    // Working with Lists
    await client.lPush("myList", "First Element");
    await client.rPush("myList", "Last Element"); 

    const listItems = await client.lRange("myList", 0, -1);
    console.log("List contents:", listItems);

    // Cleanup
    await client.del("myList"); 
    console.log('List Deleted:', await client.lRange('myList', 0, -1));

    // Disconnect
    await client.disconnect();
})();
