const mongoose = require("mongoose");

const RegisterUser = new mongoose.Schema({
  name: { type: String },

  email: { type: String },

  phone: { type: String },

  DOB: { type: String },

  City: { type: String },

  Qualification: { type: String },

  Skill: { type: String },
  password: { type: String },
});
module.exports = mongoose.model("User", RegisterUser);
