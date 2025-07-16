import { toast } from 'react-toastify';
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from '../app/users/authSlice';
import { Link, useNavigate } from "react-router-dom";

import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaPhoneAlt,
  FaCalendarAlt,
  FaBriefcase,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Register = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    Dob: "",
    city: "",
    qualification: "",
    skills: "",
    pdfBrochure: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  if (formData.password !== formData.confirmPassword) {
    toast.error("Passwords do not match!");
    return;
  }

  const data = new FormData();
  Object.entries(formData).forEach(([key, value]) => {
    data.append(key, value);
  });

  dispatch(registerUser(data))
    .then(() => {
      toast.success("User Registered Successfully!");
      Navigate("/login")
    })
    .catch((err) => {
      toast.error("Registration Failed!");
    });

  // console.log("User register success", data);
};


  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-100 to-blue-50 flex items-center justify-center px-4 py-8">
      <div className="bg-white shadow-2xl rounded-lg w-full max-w-6xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        <div className=" text-black p-8 hidden md:flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Job Portal</h2>
          <p className="text-lg">Find your dream job or hire top talent now!</p>
          <img
            src="/images/job/4957136.jpg"
            alt="Register Illustration"
            className="mt-6 rounded-lg"
          />
        </div>

        <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-6">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">Create Your Account</h2>

          {/* Form Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField icon={<FaUser />} name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" />
            <InputField icon={<FaEnvelope />} type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" />
            <InputField icon={<FaPhoneAlt />} type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" />
            <InputField icon={<FaCalendarAlt />} type="date" name="Dob" value={formData.Dob} onChange={handleChange} />
            <InputField icon={<FaMapMarkerAlt />} name="city" value={formData.city} onChange={handleChange} placeholder="city / Location" />

            <div className="relative">
              <FaBriefcase className="absolute left-3 top-3 text-gray-400" />
              <select
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="">Highest qualification</option>
                <option value="10th">10th</option>
                <option value="12th">12th</option>
                <option value="Diploma">Diploma</option>
                <option value="Graduate">Graduate</option>
                <option value="Post Graduate">Post Graduate</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <textarea
            name="skills"
            rows="2"
            placeholder="Enter your skills (e.g., electrician, tailoring)"
            value={formData.skills}
            onChange={handleChange}
            required
            className="w-full pl-4 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <label className="text-sm text-gray-600">Upload Resume:</label>
            <input
              type="file"
              name="pdfBrochure"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              required
              className="text-sm text-gray-700"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField icon={<FaLock />} type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
            <InputField icon={<FaLock />} type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm Password" />
          </div>

          {error && <p className="text-sm text-red-600 text-center">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            {loading ? "Registering..." : "Register"}
          </button>

          <p className="text-sm text-center text-gray-500 mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

const InputField = ({ icon, type = "text", name, value, onChange, placeholder = "" }) => (
  <div className="relative">
    <span className="absolute left-3 top-3 text-gray-400">{icon}</span>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
      className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  </div>
);

export default Register;