//Connecting the Redis!
const redis = require("redis");
const client = redis.createClient();

client.on("error", err => console.error("Redis Client error", err));

//if no error Occurs! we can just connect 
(async () => {
    await client.connect()

    //set and get a key! (Redis Always in Key-value pair!)
    await client.set("greeting", "Hello Redis!!");
    const greeting = await client.get("greeting")
    console.log(greeting);//Output will be Hello Redis!

    //Disconnect Client()
    await client.disconnect();

})


//Rate Limiting Example in Node.js using Redis!
const redis = require("redis");
const client1 = redis.createClient();

client1.on("error", err(
    console.log("Redis Connection Error ", err)
))
    (async () => {
        await client1.connect();

        const userKey = 'user:1000:requests'
        const maxRequest = 100;

        //increment the request count!
        const requestCount = await client.incr(userKey)

        //if this is the  first request we can set the expiry!
        if (requestCount === 1) {
            await client1.expire(userKey, 60);//after 60 secs it will expires!
        }
        //if the requestCount === 102 then Rate limit exceeded!
        if (requestCount > maxRequest) {
            console.log("Rate Limit exceeded!")
        } else {
            console.log(`Request ${requestCount} allowed!`)
        }

        client1.disconnect()

    })


//Caching API Calls
const redis = require("redis");
const client2 = redis.createClient();

//add the event On!
client2.on("error", err(
    console.log("Redis Connection Error", err)
))

const getCachedData = async (key, fetchFunction) => {
    let data = await client2.get(key);
    if (data) {
        console.log('Cache Hit!')
        return JSON.parse(data);//convert it to the Object!
    }
    console.log("Cache Miss!")
    //then we can call fetchfun to fetch and next time we use get() we will get key for the expiration time!(ex-60)

    data = await fetchFunction();
    //fetch and store the object data into string where we can get the key!
    // Cache the result for 60 seconds
    await client.setEx(key, 60, JSON.stringify(data));
    return data;
}

const fetchData = async () => {
    return { message: "Fresh data from api!" }
}
(async () => {
    await client2.connect()
    const data = await getCachedData("api:data", fetchData);
    console.log(data);
    await client2.disconnect();
})