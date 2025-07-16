import React, { useState } from "react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { employeLogin } from "../app/Employe/thunkemploye";

const RegisterLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading } = useSelector((state) => state.employe); // ✅ make sure this matches your slice name

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const loginSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await dispatch(employeLogin(formData)).unwrap();

      console.log(res.data);
      
      
      // ✅ unwrap result directly

      // ✅ Token save
      localStorage.setItem("tokenEmployer", res.token);
      localStorage.setItem("user", JSON.stringify(res.employee));
      console.log();
      

      toast.success("Login Successful 🎉");
      navigate("/employer-dash");
    } catch (error) {
      toast.error(error || "Login Failed ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 px-4">
      <div className="max-w-4xl w-full grid md:grid-cols-2 bg-white shadow-lg rounded-xl overflow-hidden">
        <div className="hidden md:flex items-center justify-center">
          <img src="/images/job/4957136.jpg" alt="Login" className="w-80 h-auto" />
        </div>

        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome Back! </h2>
          <p className="text-gray-600 mb-6 text-sm">
            <span>Employe</span> Login to your account to find or post jobs effortlessly.
          </p>

          <form onSubmit={loginSubmit} className="space-y-4">
            <div className="relative">
              <FaUserAlt className="absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div className="relative">
              <FaLock className="absolute left-3 top-3 text-gray-400" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-200"
            >
              {loading ? "Logging in..." : "Login"}
            </button>

            <div className="flex justify-between text-sm text-gray-500 mt-2">
              <Link to="/forgot-password" className="hover:underline">
                Forgot Password?
              </Link>
              <Link to="/register" className="hover:underline">
                Create an Account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterLogin;
