import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword, } from "../app/users/authSlice";

const Forgot = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");

  const { loading, error, success, message } = useSelector(
    (state) => state.auth
  );

  const handleSendOtp = (e) => {
    e.preventDefault();
    dispatch(resetPassword({ email })).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        setOtpSent(true);
        
      }
    });
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    // dispatch(verifyOtpAndResetPassword({ email, otp, password }));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
          Forgot Password
        </h2>

        <form onSubmit={otpSent ? handleResetPassword : handleSendOtp} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={otpSent}
            />
          </div>

          {otpSent && (
            <>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">
                  OTP
                </label>
                <input
                  type="text"
                  className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">
                  New Password
                </label>
                <input
                  type="password"
                  className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter new password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold transition"
          >
            {loading
              ? otpSent
                ? "Resetting..."
                : "Sending OTP..."
              : otpSent
              ? "Reset Password"
              : "Send OTP"}
          </button>
        </form>

        {error && (
          <p className="mt-4 text-center text-red-500 font-medium">{error}</p>
        )}
        {success && (
          <p className="mt-4 text-center text-green-600 font-medium">
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default Forgot;
