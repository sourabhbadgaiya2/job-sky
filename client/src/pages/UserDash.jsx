import React from "react";
import { Routes, Route } from "react-router-dom";

import DashboardHome from "../Components/User/DashboardHome";
import Profile from "../Components/User/Profile";
import ApplyJob from "../Components/User/ApplyJob";
import AppliedJobs from "../Components/User/AppliedJobs";
import Notifications from "../Components/User/Notifications";
import Settings from "../Components/User/Settings";
import Resume from "../Components/User/Resume";
import ChangePassword from "../Components/User/ChangePassword";
import SavedJobs from "../Components/User/SavedJobs";
import Sidebar from "../Components/User/Sidebar";
import Logout from "../Components/User/Logout";

const UserDash = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {/* Fixed Sidebar */}
      <Sidebar />

      {/* Scrollable Main Content Area */}
      <div className="flex-1 overflow-y-auto md:ml-64 p-4 mt-14 md:mt-0 h-full">
        <Routes>
          <Route path="/*" element={<DashboardHome />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/apply-job" element={<ApplyJob />} />
          <Route path="/applied-jobs" element={<AppliedJobs />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/saved-jobs" element={<SavedJobs />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </div>
  );
};

export default UserDash ;
