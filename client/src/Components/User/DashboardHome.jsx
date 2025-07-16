import React from "react";
import {
  FaBriefcase,
  FaHeart,
  FaBell,
  FaUserCircle,
} from "react-icons/fa";

const DashboardHome = () => {
  return (
    <div className="p-4 md:p-6 bg-gray-100 min-h-screen">
      {/* Welcome Section */}
      <div className="bg-white p-6 rounded shadow mb-6">
        <h1 className="text-3xl font-bold text-blue-700">
          Welcome Back, User!
        </h1>
        <p className="mt-2 text-gray-600">
          Here is a quick overview of your account.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-2">
        {/* Applied Jobs */}
        <div className="bg-white rounded-lg shadow p-5 flex items-center gap-4 hover:shadow-lg transition">
          <FaBriefcase className="text-blue-600 text-3xl" />
          <div>
            <p className="text-gray-600">Applied Jobs</p>
            <h3 className="text-xl font-bold text-gray-800">8</h3>
          </div>
        </div>

        {/* Saved Jobs */}
        <div className="bg-white rounded-lg shadow p-5 flex items-center gap-4 hover:shadow-lg transition">
          <FaHeart className="text-red-500 text-3xl" />
          <div>
            <p className="text-gray-600">Saved Jobs</p>
            <h3 className="text-xl font-bold text-gray-800">3</h3>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-lg shadow p-5 flex items-center gap-4 hover:shadow-lg transition">
          <FaBell className="text-yellow-500 text-3xl" />
          <div>
            <p className="text-gray-600">Notifications</p>
            <h3 className="text-xl font-bold text-gray-800">5</h3>
          </div>
        </div>
      </div>

      {/* Profile Overview */}
      <div className="mt-8 bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Profile Overview
        </h2>
        <div className="flex items-center gap-4">
          <FaUserCircle className="text-5xl text-gray-500" />
          <div>
            <p className="text-lg font-medium text-gray-800">John Doe</p>
            <p className="text-gray-600">john@example.com</p>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-8 bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Recent Activity
        </h2>
        <ul className="text-gray-600 space-y-2 list-disc list-inside">
          <li>Applied for Security Guard – 2 days ago</li>
          <li>Saved Driver Job – 4 days ago</li>
          <li>Updated resume – 6 days ago</li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardHome;
