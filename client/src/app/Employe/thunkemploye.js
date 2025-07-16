import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../config/axios";

const API_URL = '/employee';

// ✅ Login
export const employeLogin = createAsyncThunk(
  'employe/login',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(`${API_URL}/login`, data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

// ✅ Register
export const employeRegister = createAsyncThunk(
  'employe/register',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(`${API_URL}/register`, data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

// ✅ Send OTP
export const employeSendOtp = createAsyncThunk(
  'employe/sendOtp',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(`${API_URL}/send-otp`, data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

// ✅ Reset Password using OTP
export const employeResetPassword = createAsyncThunk(
  'employe/resetPassword',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(`${API_URL}/reset-password`, data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);





