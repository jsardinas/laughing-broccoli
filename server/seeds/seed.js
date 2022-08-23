const db = require("../config/connection");
const { User, Ad } = require("../models");

const { userData, adsData } = require("./data.json");
console.log('adsData:', adsData);

db.once("open", async () => {
  await User.deleteMany({});

  const users = await User.insertMany(userData);
  const ads = await Ad.insertMany(adsData);

  console.log("Data seeded!");
  process.exit(0);
});