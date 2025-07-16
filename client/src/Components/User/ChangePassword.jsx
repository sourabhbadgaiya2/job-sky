import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaLock } from "react-icons/fa";

const ChangePassword = () => {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="max-w-xl mx-auto bg-white shadow-lg p-8 rounded-md mt-6">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
        Change Password
      </h2>

      <form className="space-y-6">
        {/* Current Password */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Current Password
          </label>
          <div className="relative">
            <input
              type={showCurrent ? "text" : "password"}
              placeholder="Enter your current password"
              className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <span
              className="absolute top-3.5 right-4 cursor-pointer text-gray-500"
              onClick={() => setShowCurrent(!showCurrent)}
            >
              {showCurrent ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>

        {/* New Password */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            New Password
          </label>
          <div className="relative">
            <input
              type={showNew ? "text" : "password"}
              placeholder="Enter a new password"
              className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <span
              className="absolute top-3.5 right-4 cursor-pointer text-gray-500"
              onClick={() => setShowNew(!showNew)}
            >
              {showNew ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>

        {/* Confirm New Password */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Confirm New Password
          </label>
          <div className="relative">
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm your new password"
              className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <span
              className="absolute top-3.5 right-4 cursor-pointer text-gray-500"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded shadow-md transition duration-300"
          >
            Update Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
