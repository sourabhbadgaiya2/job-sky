const mongoose = require("mongoose");

const RegisterEmployee = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  companyName: { type: String, required: true },
  companySize: { type: Number, required: true },

  businessType: { type: String, required: true },
  industry: { type: String, required: true },
  website: { type: String },
  location: { type: String, required: true },
  contactPerson: { type: String },
  contactEmail: { type: String },
  contactPhone: { type: Number, required: true },
  password: { type: String, required: true },
  confirmPassword: { type: String, required: true },
  hiringNeeds: { type: Number },
  ProfilePhoto: { type: String },
  Coverphoto: { type: String },
  resetPasswordOTP: { type: String },
  resetPasswordOTPExpires: { type: Date },

  unlockedUsers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],

  walletBalance: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Employee", RegisterEmployee);
