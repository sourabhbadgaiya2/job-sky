import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaClock,
  FaBriefcase,
  FaStar,
  FaFire,
} from "react-icons/fa";
import { fetchJobsByCategory, applyToJob } from "../../app/job/thunak";
import axios from "../../config/axios";

const CategoryJobsPage = () => {
  const { categoryId } = useParams();
  const location = useLocation();
  const categoryName = location.state?.categoryName || "Jobs";

  const dispatch = useDispatch();
  const { jobs, loading, error } = useSelector((state) => state.job);

  const [isOpen, setIsOpen] = useState(false);
  const [sid, setSid] = useState(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    dispatch(fetchJobsByCategory(categoryId));
  }, [dispatch, categoryId]);

  const handleCallNow = (id) => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(applyToJob(id))
        .unwrap()
        .then(() => {
          alert("✅ Applied Successfully");
          setAppliedJobs((prev) => [...prev, id]);
          dispatch(fetchJobsByCategory(categoryId));
          fetchJobsByCategory();
        })
        .catch((err) => console.log("❌ Apply Failed: " + err.message));
    } else {
      setSid(id);
      setIsOpen(true);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/user/loginOrRegister", { name, phone });
      const { token, user } = res.data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      setIsOpen(false);
      setName("");
      setPhone("");

      if (sid) {
        handleCallNow(sid);
      }
    } catch (err) {
      console.log("❌ Login Failed");
      console.log(err);
    }
  };

  const handleClose = () => setIsOpen(false);

  if (loading)
    return <p className='text-center'>Loading jobs for {categoryName}...</p>;
  if (error) return <p className='text-center text-red-500'>Error: {error}</p>;
  if (!jobs || jobs.length === 0)
    return <p className='text-center'>No jobs found in {categoryName}.</p>;

  return (
    <div className='mx-auto px-5 sm:px-6 lg:px-8 py-10'>
      <div className='text-center mb-10'>
        <h2 className='text-2xl font-extrabold text-[#1F2937] mb-2 drop-shadow-md'>
          Jobs in <span className='text-[#0077B6]'>{categoryName}</span>
        </h2>
        <p className='text-gray-600 text-sm'>
          Explore jobs matching your category
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {jobs.map((job) => (
          <div
            key={job._id}
            className='border-l-4 border-[#0077B6] bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all'
          >
            <div className='flex justify-between items-start mb-2'>
              <div>
                <h3 className='text-lg font-semibold text-[#1F2937] hover:underline'>
                  {job?.title}
                </h3>
                <p className='text-sm text-gray-500'>Company: {job.company}</p>
              </div>
              {job.featured && (
                <span className='flex items-center bg-[#FFF4D9] text-[#B68900] text-xs font-medium px-2 py-0.5 rounded-full'>
                  <FaStar className='mr-1' /> Featured
                </span>
              )}
            </div>

            <div className='space-y-1 text-sm text-gray-600 mb-3'>
              <p className='flex items-center'>
                <FaMapMarkerAlt className='mr-2 text-[#0077B6]' /> Location:{" "}
                {job.location}
              </p>
              <p className='flex items-center'>
                <FaClock className='mr-2 text-[#0077B6]' /> Exp:{" "}
                {job.experience || "Fresher"}
              </p>
              <p className='flex items-center'>
                <FaBriefcase className='mr-2 text-[#0077B6]' /> Salary: ₹
                {job.salaryMin} {job.salaryMax}/rs
              </p>
              <p className='flex items-center'>
                <FaBriefcase className='mr-2 text-[#0077B6]' /> Post:{" "}
                {job.jobpost}
              </p>
            </div>

            {appliedJobs.includes(job._id) ? (
              <div className='text-green-700 font-semibold text-center py-2 border-2 border-green-600 rounded-lg'>
                📞 {job?.phone || "No Number"}
              </div>
            ) : (
              <button
                onClick={() => handleCallNow(job._id)}
                className='w-full border-2 border-[#0077B6] text-[#0077B6] hover:bg-[#0077B6] hover:text-white text-sm py-2 rounded-lg transition duration-200'
              >
                Call Now
              </button>
            )}
          </div>
        ))}
      </div>

      {/* ✅ Popup Modal */}
      {isOpen && (
        <div className='fixed inset-0 bg-black/30 flex items-center justify-center z-50'>
          <div className='bg-white p-6 rounded-lg w-80 relative'>
            <button
              onClick={handleClose}
              className='absolute top-2 right-2 text-gray-600 hover:text-red-500'
            >
              ✕
            </button>
            <h2 className='text-xl font-bold mb-4 text-center'>
              Login to Continue
            </h2>
            <form onSubmit={handleLogin} className='space-y-4'>
              <div>
                <label className='block mb-1 text-sm'>Name</label>
                <input
                  type='text'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder='Enter your name'
                  className='w-full border px-3 py-2 rounded-md'
                />
              </div>
              <div>
                <label className='block mb-1 text-sm'>Mobile Number</label>
                <input
                  type='text'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  placeholder='Enter mobile number'
                  className='w-full border px-3 py-2 rounded-md'
                />
              </div>
              <button
                type='submit'
                className='w-full bg-[#0077B6] text-white py-2 rounded-md hover:bg-blue-700'
              >
                Login
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryJobsPage;
