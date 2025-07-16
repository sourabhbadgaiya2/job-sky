import React from "react";
import {
  FaMapMarkerAlt,
  FaClock,
  FaBriefcase,
  FaBuilding,
  FaListAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const relatedJobs = [
  {
    title: "Cook for Family",
    company: "Home Services",
    location: "Delhi",
    salary: "₹15,000/month",
  },
  {
    title: "House Cleaner",
    company: "Urban Maid Pvt Ltd",
    location: "Bangalore",
    salary: "₹12,500/month",
  },
  {
    title: "Delivery Helper",
    company: "SpeedEx Logistics",
    location: "Mumbai",
    salary: "₹14,000/month",
  },
];

const JobDetail = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col lg:flex-row gap-6">
      {/* LEFT: Job Description */}
      <div className="flex-1 bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Security Guard Needed Urgently
        </h2>
        <p className="text-gray-600 flex items-center mb-1">
          <FaBuilding className="mr-2 text-blue-600" /> HouseHelp Pvt Ltd
        </p>
        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-2">
          <p className="flex items-center">
            <FaMapMarkerAlt className="mr-2 text-blue-600" />
            Delhi, India
          </p>
          <p className="flex items-center">
            <FaClock className="mr-2 text-blue-600" />
            Posted 3 hours ago
          </p>
          <p className="flex items-center">
            <FaBriefcase className="mr-2 text-blue-600" />
            ₹20,725/month
          </p>
          <p className="flex items-center">
            <FaListAlt className="mr-2 text-blue-600" />
            Temporary · Labour Services
          </p>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Job Description
          </h3>
          <p className="text-gray-700 leading-relaxed">
            We are urgently looking for a dedicated and responsible Security
            Guard to ensure the safety and security of our premises and staff.
            The ideal candidate should be physically fit, alert, and able to
            work flexible hours.
          </p>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Responsibilities
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Monitor premises and ensure safety</li>
            <li>Respond to emergencies or incidents</li>
            <li>Check and allow authorized entry</li>
            <li>Maintain security logs</li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Requirements
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Minimum 1 year of relevant experience</li>
            <li>Good communication and alertness</li>
            <li>Flexible with night/day shifts</li>
            <li>Must have valid ID proof</li>
          </ul>
        </div>

        <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition duration-200">
          Apply Now
        </button>
      </div>

      {/* RIGHT: Related Jobs */}
      <div className="w-full lg:w-1/3">
        <div className="bg-white p-5 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Related Jobs
          </h3>

          {relatedJobs.map((job, index) => (
            <div
              key={index}
              className="mb-4 p-3 rounded-md border border-gray-200 hover:shadow transition"
            >
              <h4 className="text-md font-semibold text-gray-700">
                {job.title}
              </h4>
              <p className="text-sm text-gray-500">{job.company}</p>
              <div className="text-sm text-gray-600 flex items-center mt-1">
                <FaMapMarkerAlt className="mr-1 text-blue-500" />
                {job.location}
              </div>
              <p className="text-sm text-gray-700 mt-1">{job.salary}</p>
              <Link to="/job-detail">
                <button className="mt-2 w-full text-sm text-blue-600 border border-blue-600 rounded-md py-1 hover:bg-blue-50">
                  View
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
