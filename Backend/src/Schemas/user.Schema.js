const mongoose = require("mongoose");

//  ------------------------(user Model) ---------------------------

const userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model("user", userSchema);
module.exports = User;
