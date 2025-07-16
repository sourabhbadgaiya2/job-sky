import React from "react";
import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaRupeeSign,
  FaCalendarAlt,
  FaPaperPlane,
  FaTrash,
} from "react-icons/fa";

const savedJobs = [
  {
    id: 1,
    title: "Electrician",
    company: "Power House Pvt. Ltd.",
    location: "Mumbai",
    type: "Full Time",
    salary: "15,000 - 18,000",
    savedDate: "2025-06-17",
  },
  {
    id: 2,
    title: "Tailor",
    company: "Fashion Fitters",
    location: "Delhi",
    type: "Part Time",
    salary: "12,000 - 14,000",
    savedDate: "2025-06-16",
  },
  {
    id: 3,
    title: "Office Boy",
    company: "Swift Services",
    location: "Bangalore",
    type: "Full Time",
    salary: "10,000 - 11,000",
    savedDate: "2025-06-14",
  },
   {
    id: 2,
    title: "Tailor",
    company: "Fashion Fitters",
    location: "Delhi",
    type: "Part Time",
    salary: "12,000 - 14,000",
    savedDate: "2025-06-16",
  },
];

const SavedJobs = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6 bg-white shadow-md rounded-lg mt-4 mb-8">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
        Saved Jobs
      </h2>

      {savedJobs.length === 0 ? (
        <p className="text-center text-gray-600">You haven't saved any jobs yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {savedJobs.map((job) => (
            <div
              key={job.id}
              className="border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-lg transition duration-300"
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
                <p className="text-gray-600">{job.company}</p>

                <div className="flex flex-wrap gap-3 mt-2 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <FaMapMarkerAlt className="text-blue-500" /> {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaBriefcase className="text-green-500" /> {job.type}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaRupeeSign className="text-yellow-500" /> {job.salary}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt className="text-gray-400" /> Saved on {job.savedDate}
                  </span>
                </div>

                <div className="flex justify-between items-center mt-5">
                  <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded shadow-sm text-sm">
                    <FaPaperPlane /> Apply Now
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded shadow-sm text-sm">
                    <FaTrash /> Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedJobs;
