import React from "react";
import { Routes, Route } from "react-router-dom";

import Sidebar from "../Components/Employer/Sidebar";
import PostJobPage from "./PostJobPage";
import ManageJobs from "../Components/Employer/ManageJobs";
import Applications from "../Components/Employer/Applications";
import CompanyProfile from "../Components/Employer/CompanyProfile";
import Settings from "../Components/Employer/Settings";
import DashboardHome from "../Components/Employer/DashboardHome";

const EmployerDash = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar (Fixed Width) */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 md:ml-64 p-4 mt-10 overflow-y-auto h-full bg-gray-100">
        <Routes>
          <Route path="/*" element={<DashboardHome />} />
          <Route path="/post-job" element={<PostJobPage />} />
          <Route path="/manage-jobs" element={<ManageJobs />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/company-profile" element={<CompanyProfile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default EmployerDash;
