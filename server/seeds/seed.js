const db = require("../config/connection");
const { User, Ad } = require("../models");

const { userData, adsData } = require("./data.json");
console.log('adsData:', adsData);

db.once("open", async () => {
  await User.deleteMany({});

  const users = await User.insertMany(userData);
  const ads = await Ad.insertMany(adsData);

  for (let i = 0; i < users.length; i++) {
    for (let j = 0; j < ads.length; j++){
      if(users[i].username === ads[j].username){
        const tempUser = users[i];
        tempUser.ads_id.push(ads[j]._id);
        await tempUser.save();
      }
    }
  }

  console.log("Data seeded!");
  process.exit(0);
});