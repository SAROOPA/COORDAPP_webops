const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String },
  number: { type: String, required: true },
  state: { type: String, required: true },
});

module.exports = mongoose.model("User", userSchema);
