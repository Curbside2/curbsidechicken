const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/orderList",
  {
    // useMongoClient: true
  }
);

const orderSeed = [
  {
    mainCourse: "20 PC Bucket",
    sides: "Mac and Cheese, Mashed Potatoes",
    drinks: 'Fountain Drink, Bottled Water'
  }
];

db.Order
  .remove({})
  .then(() => db.Order.collection.insertMany(orderSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });