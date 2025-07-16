// // const mongoose = require("mongoose");

// // const userSchema = new  mongoose.Schema({
// //     name : String,
  
// //     email: {
// //         type: String,
// //         required: true,  // Corrected from 'require' to 'required'
// //         unique: true
// //     },
// //     password:String
// // })

// // module.exports = mongoose.model("user",userSchema)

// const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");

// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   password: {
//     type: String,
//     required: true
//   },
//   otp: {
//     type: String,
//     default: null
//   },
//   otpExpiry: {
//     type: Date,
//     default: null
//   },
//   otpAttempts: {
//     type: Number,
//     default: 0
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now
//   }
// });

// // Hash password before saving
// userSchema.pre("save", async function(next) {
//   if (!this.isModified("password")) return next();
//   this.password = await bcrypt.hash(this.password, 12);
//   next();
// });

// module.exports = mongoose.model("user", userSchema);







const mongoose=require("mongoose")
const costumerSchema=new mongoose.Schema({
    name:{type:String,required:true},
   
  
    email:{type:String,required:true,unique:true},
    
    
   
    password:{type:String},
    
})
module.exports=mongoose.model("user",costumerSchema)