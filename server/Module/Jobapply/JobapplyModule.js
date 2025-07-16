
const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
 
    Name: {
    type: String,
    required: true,
  },
Email: {
    type: String,
    required: true,
  },
Phone: {
    type: String,
    required: true,
  },
Experience: {
    type: String,
    required: true,
  },
  Skills :[
    {
        type:String,
        required:true
    }
  ],

  Portfolio:{
    type:String
  },

  Resume: {
    type: String,
  },
  Cover:{
    type:String
  },

  
  
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});


module.exports = mongoose.model("Jobapply", jobSchema);