const Job = require("../../Module/Jobapply/JobapplyModule");
const imagekit = require("../../Utils/imageKit");

// Common file upload function
const fileUpload = async (file) => {
  const buffer = file.data;
  if (!buffer || !file.name) {
    throw new Error("Invalid file data");
  }

  const uploadResponse = await imagekit.upload({
    file: buffer,
    fileName: file.name,
  });
  return uploadResponse.url;
};

// Create a new job application
const createJobApplication = async (req, res) => {
  try {
    const { Name, Email, Phone, Experience, Skills, Portfolio, Cover } = req.body;

    let resumeUrl = '';
    if (req.files && req.files.Resume) {
      resumeUrl = await fileUpload(req.files.Resume);
    }

    const newJobApplication = new Job({
      Name,
      Email,
      Phone,
      Experience,
      Skills: Array.isArray(Skills) ? Skills : Skills.split(',').map(skill => skill.trim()),
      Portfolio,
      Resume: resumeUrl,
      Cover
    });

    const savedApplication = await newJobApplication.save();
    res.status(201).json({
      success: true,
      message: "Job application submitted successfully",
      data: savedApplication
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to submit job application",
      error: error.message
    });
  }
};

// Get all job applications
const getAllJobApplications = async (req, res) => {
  try {
    const applications = await Job.find().sort({ updatedAt: -1 });
    res.status(200).json({
      success: true,
      message: "Job applications retrieved successfully",
      data: applications
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve job applications",
      error: error.message
    });
  }
};

// Get a single job application by ID
const getJobApplicationById = async (req, res) => {
  try {
    const application = await Job.findById(req.params.id);
    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Job application not found"
      });
    }
    res.status(200).json({
      success: true,
      message: "Job application retrieved successfully",
      data: application
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve job application",
      error: error.message
    });
  }
};

// Update a job application
const updateJobApplication = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    if (req.files && req.files.Resume) {
      updateData.Resume = await fileUpload(req.files.Resume);
    }

    if (updateData.Skills && typeof updateData.Skills === 'string') {
      updateData.Skills = updateData.Skills.split(',').map(skill => skill.trim());
    }

    const updatedApplication = await Job.findByIdAndUpdate(
      id,
      { ...updateData, updatedAt: Date.now() },
      { new: true, runValidators: true }
    );

    if (!updatedApplication) {
      return res.status(404).json({
        success: false,
        message: "Job application not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Job application updated successfully",
      data: updatedApplication
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update job application",
      error: error.message
    });
  }
};

// Delete a job application
const deleteJobApplication = async (req, res) => {
  try {
    const deletedApplication = await Job.findByIdAndDelete(req.params.id);
    if (!deletedApplication) {
      return res.status(404).json({
        success: false,
        message: "Job application not found"
      });
    }
    res.status(200).json({
      success: true,
      message: "Job application deleted successfully",
      data: deletedApplication
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete job application",
      error: error.message
    });
  }
};

module.exports = {
  createJobApplication,
  getAllJobApplications,
  getJobApplicationById,
  updateJobApplication,
  deleteJobApplication
};
