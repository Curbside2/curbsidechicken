const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  mainCourse: {type: String, required: true},
  sides: {type: String, required: true},
  drinks: {type: String, required: true}
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;