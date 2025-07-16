// const express = require('express');
// const router = express.Router();
// const jobController = require('../../Controller/JobController/JobController');

// // Create a new job
// router.post('/jobs', jobController.createJob);

// // Get all jobs
// router.get('/jobs', jobController.getAllJobs);

// // Get a specific job by ID
// router.get('/jobs/:id', jobController.getJobById);

// // Update a job by ID
// router.put('/jobs/:id', jobController.updateJob);

// // Delete a job by ID
// router.delete('/jobs/:id', jobController.deleteJob);

// // Get jobs by category
// router.get('/jobs/category/:categoryId', jobController.getJobsByCategory);

// // Get jobs by subcategory
// router.get('/jobs/subcategory/:subcategoryId', jobController.getJobsBySubcategory);

// module.exports = router;


const express = require("express");
const router = express.Router();
const jobController = require("../../Controller/JobController/JobController");
const { authenticate, authorizeAdmin } = require("../../Controller/Middleware/authMiddleware");

// Public routes
router.get("/", jobController.getAllJobs);
router.get("/:id", jobController.getJobById);
router.get("/category/:categoryId", jobController.getJobsByCategory);
router.get("/subcategory/:subcategoryId", jobController.getJobsBySubcategory);

// Protected routes (require authentication)
router.post("/", jobController.createJob);
router.put("/:id", authenticate, jobController.updateJob);
router.delete("/:id", authenticate, jobController.deleteJob);

// Payment verification
router.post("/verify-payment", authenticate, jobController.verifyPayment);

// Admin routes
router.get("/admin/pending", authenticate,  jobController.getPendingJobs);


router.get("/getjob",authenticate, jobController.getAllJobsbyEmployee)



// POST apply to job full deatils jobs
router.get('/:id', jobController.getJobByIds);

router.post('/:id/apply',authenticate, jobController.applyToJob);

router.get("/myjobs/applications",authenticate,jobController.getPostedJobsWithApplicants);


module.exports = router;