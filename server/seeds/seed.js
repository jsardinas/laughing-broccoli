const db = require("../config/connection");
const { User } = require("../models");

const { userData, adsData } = require("./data.json");

db.once("open", async () => {
  await User.deleteMany({});

  const users = await User.insertMany(userData);
  const ads = await User.insertMany(adsData);

  console.log("Data seeded!");
  process.exit(0);
});
