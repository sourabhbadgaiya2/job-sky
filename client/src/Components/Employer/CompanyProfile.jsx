import React, { useState } from "react";

const CompanyProfile = () => {

  const [formData, setFormData] = useState({
    companyName: "",
    industry: "",
    website: "",
    location: "",
    contactEmail: "",
    about: "",
    logo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "logo") {
      setFormData({ ...formData, logo: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Company Profile Submitted:", formData);
    alert("Company Profile Updated!");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Company Profile</h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Logo Upload */}
          <div className="md:col-span-2 flex flex-col items-center">
            {formData.logo ? (
              <img
                src={URL.createObjectURL(formData.logo)}
                alt="Company Logo"
                className="w-24 h-24 object-cover rounded-full mb-2 border"
              />
            ) : (
              <div className="w-24 h-24 bg-gray-200 rounded-full mb-2 flex items-center justify-center text-gray-400">
                No Logo
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              name="logo"
              onChange={handleChange}
              className="text-sm"
            />
          </div>

          {/* Input Fields */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              placeholder="e.g., Skill Sikhar Pvt. Ltd"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Industry</label>
            <input
              type="text"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              placeholder="e.g., Job Consultancy"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              placeholder="https://example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              placeholder="City, State"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Contact Email</label>
            <input
              type="email"
              name="contactEmail"
              value={formData.contactEmail}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              placeholder="contact@company.com"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">About Company</label>
            <textarea
              name="about"
              rows="4"
              value={formData.about}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              placeholder="Write a brief about your company..."
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompanyProfile;
