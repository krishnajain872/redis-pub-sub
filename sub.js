const redis = require("./db");

redis.subscribe("my-channel-1", "my-channel-2", (err, count) => {
  if (err) {
    console.error("Failed to subscribe: %s", err.message);
  } else {
    console.log(
      `Subscribed successfully! This client is currently subscribed to ${count} channels.`
    );
  }
});

redis.on("message", (channel, message) => {
  console.log(`Received ${message} from ${channel}\n\n`);
});
console.log("\n\n");
redis.on("messageBuffer", (channel, message) => {
  console.log(`Received buffer message \n ${message} from ${channel}\n\n`);
  console.log("\n\n");
});
