import React from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaDownload, FaEye } from "react-icons/fa";

const appliedJobs = [
  {
    id: 1,
    title: "Security Guard",
    company: "SecureCorp Pvt. Ltd.",
    location: "Mumbai",
    status: "Pending",
    appliedDate: "2025-06-15",
    resume: "/resumes/security_guard_resume.pdf",
  },
  {
    id: 2,
    title: "Kitchen Master",
    company: "Hotel Swad",
    location: "Delhi",
    status: "Interview Scheduled",
    appliedDate: "2025-06-10",
    resume: "/resumes/kitchen_master_resume.pdf",
  },
  {
    id: 3,
    title: "Driver",
    company: "SafeDrive Services",
    location: "Kolkata",
    status: "Selected",
    appliedDate: "2025-06-01",
    resume: "/resumes/driver_resume.pdf",
  },
];

const statusColors = {
  Pending: "bg-yellow-100 text-yellow-800",
  "Interview Scheduled": "bg-blue-100 text-blue-800",
  Selected: "bg-green-100 text-green-800",
  Rejected: "bg-red-100 text-red-800",
};

const AppliedJobs = () => {
  return (
    <div className="bg-white p-6 rounded-md shadow max-w-7xl mx-auto mt-4 mb-10">
      <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
        My Applied Jobs
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-600">
              <th className="p-3">Job Title</th>
              <th className="p-3">Company</th>
              <th className="p-3">Location</th>
              <th className="p-3">Status</th>
              <th className="p-3">Applied Date</th>
              <th className="p-3">Resume</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {appliedJobs.map((job) => (
              <tr key={job.id} className="border-b hover:bg-gray-50 text-sm">
                <td className="p-3 font-medium text-gray-900">{job.title}</td>
                <td className="p-3">{job.company}</td>
                <td className="p-3 flex items-center gap-1">
                  <FaMapMarkerAlt className="text-blue-500" /> {job.location}
                </td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[job.status] || "bg-gray-100 text-gray-800"}`}
                  >
                    {job.status}
                  </span>
                </td>
                <td className="p-3 flex items-center gap-1">
                  <FaCalendarAlt className="text-gray-500" />
                  {job.appliedDate}
                </td>
                <td className="p-3">
                  <a
                    href={job.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline flex items-center gap-1"
                  >
                    <FaDownload /> Download
                  </a>
                </td>
                <td className="p-3">
                  <button className="text-sm px-4 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded shadow flex items-center gap-1">
                    <FaEye /> View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppliedJobs;
