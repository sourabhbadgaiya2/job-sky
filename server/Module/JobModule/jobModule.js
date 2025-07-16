// const mongoose = require("mongoose");

// const RegisterEmployee = new mongoose.Schema({
  
//    jobTitle:   { type: String, required: true },
//     jobType:   { type: String, required: true },
   
//     company: { type: String, required: true },
    
//     location:{ type: String, required: true },
//     salaryMin: { type: Number, required: true },
//     salaryMax: { type: Number, required: true },
//     experience: { type: Number, required: true },
//     deadline: { type: Number, required: true },
//     description: { type: String, required: true },
//     jobpost: { type: String, required: true },
//     status: {type:String, enum:["pending","live"], default:"pending"},

//     responsibilities: { type: String, required: true },
//     requirements: { type: String, required: true },
//       category: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Category"
//   },
//     subCategory: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Subcategory"
//   },
// });

// module.exports = mongoose.model("job", RegisterEmployee);


const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
 tittle:{
  type: String,
 },
  company: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  
  phone:{
    type:Number,
    required:true
  },
  salaryMin: {
    type: Number,
    required: true,
  },
  salaryMax: {
    type: Number,
    required: true,
  },
  experience: {
    type: String,
    // required: true,
  },
  deadline: {
    type: String,
    // required: true,
  },
  description: {
    type: String,
    required: true,
  },
  responsibilities: {
    type: [String],
    default: [],
  },
  requirements: {
    type: [String],
    default: [],
  },
  jobpost: {
    type: Number,
    // required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  subCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SubCategory",
  },
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  pdfUrl: {
    type: String,
  },
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

jobSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("Job", jobSchema);