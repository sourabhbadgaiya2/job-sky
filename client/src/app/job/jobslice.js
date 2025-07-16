import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllJobs,
  fetchJobById,
  fetchJobsByCategory,
  fetchJobsBySubcategory,
  createJob,
  updateJob,
  deleteJob,
  applyToJob,
  fetchApplications,
} from './thunak';

const jobSlice = createSlice({
  name: 'jobs',
  initialState: {
    jobs: [],
    job: null,
    applications: [], // 👈 New state to store applications
    loading: false,
    error: null,
    successMessage: null,
  },
  reducers: {
    // 👇 Approve/Reject reducers (frontend only)
    approveApplication(state, action) {
      const app = state.applications.find((a) => a._id === action.payload);
      if (app) app.status = "Approved";
    },
    rejectApplication(state, action) {
      const app = state.applications.find((a) => a._id === action.payload);
      if (app) app.status = "Rejected";
    },
  },
  extraReducers: (builder) => {
    builder
      // ✅ Fetch all jobs
      .addCase(fetchAllJobs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = action.payload;
      })
      .addCase(fetchAllJobs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ✅ Fetch job by ID
      .addCase(fetchJobById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchJobById.fulfilled, (state, action) => {
        state.loading = false;
        state.job = action.payload;
      })
      .addCase(fetchJobById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ✅ Fetch jobs by category
      .addCase(fetchJobsByCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchJobsByCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = action.payload;
      })
      .addCase(fetchJobsByCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ✅ Fetch jobs by subcategory
      .addCase(fetchJobsBySubcategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchJobsBySubcategory.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = action.payload;
      })
      .addCase(fetchJobsBySubcategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ✅ Create job
      .addCase(createJob.pending, (state) => {
        state.loading = true;
      })
      .addCase(createJob.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs.push(action.payload);
      })
      .addCase(createJob.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ✅ Update job
      .addCase(updateJob.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateJob.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = state.jobs.map((job) =>
          job._id === action.payload._id ? action.payload : job
        );
      })
      .addCase(updateJob.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ✅ Delete job
      .addCase(deleteJob.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteJob.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = state.jobs.filter((job) => job._id !== action.payload);
      })
      .addCase(deleteJob.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ✅ Apply to job
      .addCase(applyToJob.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(applyToJob.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = action.payload.message || "Applied Successfully";
      })
      .addCase(applyToJob.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message || "Failed to apply";
      })

      // ✅ Fetch Applications
      .addCase(fetchApplications.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchApplications.fulfilled, (state, action) => {
        state.loading = false;
        state.applications = action.payload;
      })
      .addCase(fetchApplications.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { approveApplication, rejectApplication } = jobSlice.actions;

export default jobSlice.reducer;
