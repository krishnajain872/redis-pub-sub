const redis = require("./db");
const { faker } = require("@faker-js/faker");
setInterval(() => {
  const message = {
    userId: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };

  const channel = `my-channel-${1 + Math.round(Math.random())}`;

  redis.publish(channel, JSON.stringify(message));
  console.log("Published %s to %s", message, channel);
}, 1000);
