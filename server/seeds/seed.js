const db = require("../config/connection");
const { User, Ad } = require("../models");

const { userData, adsData } = require("./data.json");
console.log('adsData:', adsData);

db.once("open", async () => {
  await User.deleteMany({});

  const users = await User.insertMany(userData);
  const ads = await Ad.insertMany(adsData);

  for (newAd of ads) {
    // randomly add each Advertisement to a user
    const tempUser = users[Math.floor(Math.random() * users.length)];
    tempUser.ads_id.push(newAd._id);
    await tempUser.save();
  }

  console.log("Data seeded!");
  process.exit(0);
});