import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../config/axios';

const API_URL = "/subcategory";

// 🔄 Fetch All Subcategories
export const fetchSubcategories = createAsyncThunk(
  'subcategories/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  }
);

// 🔄 Fetch Subcategory by ID
export const fetchSubcategoryById = createAsyncThunk(
  'subcategories/fetchById',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  }
);

// ✨ Create Subcategory
export const createSubCategory = createAsyncThunk(
  'subcategories/create',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(API_URL, data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  }
);

// 🔄 Update Subcategory
export const updateSubCategory = createAsyncThunk(
  'subcategories/update',
  async ({ id, data }, thunkAPI) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  }
);

// ❌ Delete Subcategory
export const deleteSubCategory = createAsyncThunk(
  'subcategories/delete',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      return id; // Return deleted ID
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Something went wrong');
    }
  }
);
