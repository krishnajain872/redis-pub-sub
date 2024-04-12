require("dotenv").config();
const Redis = require("ioredis");

const { REDIS_PORT: port, REDIS_HOST: host } = process.env;

const redisClient = new Redis({
  host,
  port,
});

redisClient.on("connect", () => {
  console.log("redis connection established");
});

module.exports = redisClient;
