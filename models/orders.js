const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  mainCourse: {type: String, required: true},
  chickenFlavor: {type: String, required: false},
  smallSide: {type: String, required: false},
  largeSide: {type: String, required: false},
  twoLargeSides: {type: Array, required: false},
  threeLargeSides: {type: Array, required: false},
  beverage: {type: String, required: false},
  gallon: {type: Array, required: false},
  dessert: {type: Array, required: false},
  condiment: {type: Array, required: false},
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;