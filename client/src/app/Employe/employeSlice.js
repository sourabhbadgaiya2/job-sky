import { createSlice } from "@reduxjs/toolkit";   
import { employeLogin, employeRegister, employeSendOtp, employeResetPassword} from "./thunkemploye";
const employeeSlice = createSlice({
  name: 'employee',
  initialState: {
    user: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(employeLogin.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(employeLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(employeLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
       builder
      .addCase(employeRegister.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(employeRegister.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(employeRegister.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
        builder
      .addCase(employeSendOtp.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(employeSendOtp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(employeSendOtp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
      builder
      .addCase(employeResetPassword.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(employeResetPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(employeResetPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
      
      

    // Same pattern for Register, Send OTP, Reset Password
  },
});


export const { logout } = employeeSlice.actions;
export default employeeSlice.reducer;