import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../config/axios';  // Your axios instance

const API_URL = '/api';

// ✅ Get all jobs
export const fetchAllJobs = createAsyncThunk(
  'jobs/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${API_URL}`);
    //   console.log(response , "thunk");
      
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// ✅ Get job by ID
export const fetchJobById = createAsyncThunk(
  'jobs/fetchById',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// ✅ Get jobs by category
export const fetchJobsByCategory = createAsyncThunk(
  'jobs/fetchByCategory',
  async (categoryId, thunkAPI) => {
    try {
      const response = await axios.get(`${API_URL}/category/${categoryId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// ✅ Get jobs by subcategory
export const fetchJobsBySubcategory = createAsyncThunk(
  'jobs/fetchBySubcategory',
  async (subcategoryId, thunkAPI) => {
    try {
      const response = await axios.get(`${API_URL}/subcategory/${subcategoryId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// ✅ Create new job
export const createJob = createAsyncThunk(
  'jobs/create',
  async (jobData, thunkAPI) => {
    try {
      const response = await axios.post(`${API_URL}`, jobData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// ✅ Update job
export const updateJob = createAsyncThunk(
  'jobs/update',
  async ({ id, jobData }, thunkAPI) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, jobData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// ✅ Delete job
export const deleteJob = createAsyncThunk(
  'jobs/delete',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const applyToJob = createAsyncThunk(
  'jobs/applyToJob',
  async (jobId, thunkAPI) => {
    try {
      const response = await axios.post(`/api/${jobId}/apply`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);


export const fetchApplications = createAsyncThunk(
  "applications/fetchAll",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/api/myjobs/applications"); // 👈 api prefix
      return res.data.data;
      console.log(res.data ,"applictions");
      
       // backend success:true,data:{} format है
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data?.message || "Something went wrong");
    }
  }
);


