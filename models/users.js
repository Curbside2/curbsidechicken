const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: { type: String, required: true },
  firstName: { type: String, required: true },
  middleName: { type: String, required: false},
  lastName: { type: String, required: true },
  password: {type: String, required: true}
});

const User = mongoose.model("User", userSchema);

module.exports = User;