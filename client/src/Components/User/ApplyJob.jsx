import React, { useState } from "react";
import { FaMapMarkerAlt, FaRupeeSign, FaBriefcase } from "react-icons/fa";

// Job Categories
const jobList = [
  { id: 1, title: "Security Guard", company: "SecureCorp Pvt. Ltd.", location: "Mumbai", salary: "15,000 - 18,000", skills: ["Night Duty", "Vigilance"] },
  { id: 2, title: "Kitchen Master", company: "Hotel Swad", location: "Delhi", salary: "18,000 - 25,000", skills: ["Cooking", "Team Management"] },
  { id: 3, title: "Sweeper", company: "Clean India Org", location: "Lucknow", salary: "10,000 - 12,000", skills: ["Cleaning", "Sanitation"] },
  { id: 4, title: "Construction Labour", company: "BuildWell Infra", location: "Noida", salary: "13,000 - 16,000", skills: ["Lifting", "Site Work"] },
  { id: 5, title: "Painter", company: "ColorCoat Ltd.", location: "Pune", salary: "15,000 - 20,000", skills: ["Wall Painting", "Finishing"] },
  { id: 6, title: "Cook", company: "Food Delight", location: "Bhopal", salary: "14,000 - 18,000", skills: ["Veg/Non-Veg", "Indian Cuisine"] },
  { id: 7, title: "Chef", company: "Royal Kitchen", location: "Jaipur", salary: "25,000 - 35,000", skills: ["Continental", "Presentation"] },
  { id: 8, title: "Plumber", company: "FixIt Solutions", location: "Indore", salary: "12,000 - 18,000", skills: ["Leak Repair", "Installations"] },
  { id: 9, title: "Electrician", company: "WattUp Electricals", location: "Chennai", salary: "15,000 - 22,000", skills: ["Wiring", "Troubleshooting"] },
  { id: 10, title: "Driver", company: "SafeDrive Services", location: "Kolkata", salary: "16,000 - 20,000", skills: ["Commercial License", "Navigation"] },
  { id: 11, title: "Tailor", company: "Perfect Stitch", location: "Surat", salary: "12,000 - 15,000", skills: ["Sewing", "Pattern Cutting"] },
  { id: 12, title: "Office Boy", company: "AdminPro", location: "Nagpur", salary: "9,000 - 11,000", skills: ["Documents", "Cleaning"] },
];

const ApplyJob = () => {
  const [search, setSearch] = useState("");

  const filteredJobs = jobList.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-6xl mx-auto mt-6 mb-10">
      <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
        Available Job Categories
      </h2>

      {/* Search Field */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search job category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-2/3 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-400"
        />
      </div>

      {/* Job Cards */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div
              key={job.id}
              className="p-5 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                {job.title}
              </h3>
              <p className="text-sm text-gray-600">{job.company}</p>

              <div className="mt-2 flex flex-col gap-1 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <FaMapMarkerAlt className="text-blue-500" /> {job.location}
                </span>
                <span className="flex items-center gap-1">
                  <FaRupeeSign className="text-green-500" /> {job.salary}
                </span>
                <span className="flex items-center gap-1">
                  <FaBriefcase className="text-purple-500" />{" "}
                  {job.skills.join(", ")}
                </span>
              </div>

              <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition">
                Apply Now
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No jobs found.
          </p>
        )}
      </div>
    </div>
  );
};

export default ApplyJob;
