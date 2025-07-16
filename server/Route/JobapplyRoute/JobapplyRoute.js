const express = require("express");
const router = express.Router();
const fileUpload = require("express-fileupload"); // make sure this is added in app.js as middleware

const {
  createJobApplication,
  getAllJobApplications,
  getJobApplicationById,
  updateJobApplication,
  deleteJobApplication
} = require("../../Controller/Jobapply/JobapplyController"); // adjust path if needed

// Middleware to handle file uploads
router.use(fileUpload());

// Routes
router.post("/", createJobApplication); // Create job application
router.get("/", getAllJobApplications); // Get all applications
router.get("/:id", getJobApplicationById); // Get one application
router.put("/:id", updateJobApplication); // Update application
router.delete("/:id", deleteJobApplication); // Delete application

module.exports = router;
