import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import axiosInstance from "../../config/axios";

const PostJob = () => {
  const API_URL = "/api"; // Update with your actual API endpoint
  const CATEGORY_API = "/category";
  const SUBCATEGORY_API = "/subcategory";

  const [formData, setFormData] = useState({
    jobTitle: "",
    jobpost: "",
    category: "",
    subcategory: "",
    company: "",
    website: "",
    location: "",
    salaryMin: "",
    salaryMax: "",
    experience: "",
    deadline: "",
    description: "",
    responsibilities: "",
    requirements: "",
    phone: "",
  });

  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Get token from localStorage
  const token = localStorage.getItem("token");

  // Fetch categories on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setIsLoading(true);
        const response = await axiosInstance.get(CATEGORY_API, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
        toast.error("Failed to load categories");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, [token]);

  // Fetch subcategories when category changes
  useEffect(() => {
    const fetchSubcategories = async () => {
      if (formData.category) {
        try {
          setIsLoading(true);
          const response = await axiosInstance.get(
            `${SUBCATEGORY_API}?category=${formData.category._id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setSubcategories(response.data);
        } catch (error) {
          console.error("Error fetching subcategories:", error);
          toast.error("Failed to load subcategories");
        } finally {
          setIsLoading(false);
        }
      } else {
        setSubcategories([]);
      }
    };

    fetchSubcategories();
  }, [formData.category, token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axiosInstance.post(API_URL, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Job created successfully!");
      console.log("Job created:", response.data);

      // Reset form after successful submission
      setFormData({
        Title: "",
        // jobType: '',
        jobpost: "",
        category: "",
        subcategory: "",
        company: "",
        website: "",
        location: "",
        salaryMin: "",
        salaryMax: "",
        experience: "",
        deadline: "",
        description: "",
        responsibilities: "",
        requirements: "",
        phone: "",
      });
    } catch (error) {
      console.error("Error creating job:", error);
      toast.error(error.response?.data?.message || "Failed to create job");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='max-w-4xl mx-auto px-4 py-12 bg-white shadow-xl rounded-xl mt-10 mb-10'>
      <h2 className='text-3xl font-bold text-center text-[#0077B6] mb-8'>
        Post a New Job
      </h2>
      <form onSubmit={handleSubmit} className='space-y-6'>
        {/* Job Title & Type */}
        <div className='grid md:grid-cols-2 gap-6'>
          <div>
            <label className='block text-sm font-semibold text-gray-700'>
              Job Title
            </label>
            <input
              name='jobTitle'
              value={formData.jobTitle}
              onChange={handleChange}
              required
              className='mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0077B6]'
              placeholder='e.g., Frontend Developer'
            />
          </div>
          <div>
            <label className='block text-sm font-semibold text-gray-700'>
              No. of Job Post
            </label>
            <input
              type='number'
              name='jobpost'
              value={formData.jobpost}
              onChange={handleChange}
              required
              className='mt-1 w-full border border-gray-300 rounded-md px-4 py-2'
              placeholder='e.g., 101'
            />
          </div>
          {/* <div>
            <label className="block text-sm font-semibold text-gray-700">Job Type</label>
            <select
              name="jobType"
              value={formData.jobType}
              onChange={handleChange}
              required
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#0077B6]"
            >
            
              <option value="">Select Type</option>
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Internship">Internship</option>
              <option value="Contract">Contract</option>
            </select>
          </div> */}
        </div>

        {/* Category & Subcategory */}
        <div className='grid md:grid-cols-2 gap-6'>
          <div>
            <label className='block text-sm font-semibold text-gray-700'>
              Category
            </label>
            <select
              name='category'
              value={formData.category}
              onChange={handleChange}
              required
              className='mt-1 w-full border border-gray-300 rounded-md px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#0077B6]'
              disabled={isLoading}
            >
              <option value=''>Select Category</option>
              {categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className='block text-sm font-semibold text-gray-700'>
              Subcategory
            </label>
            <select
              name='subcategory'
              value={formData.subcategory}
              onChange={handleChange}
              className='mt-1 w-full border border-gray-300 rounded-md px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#0077B6]'
              disabled={!formData.category || isLoading}
            >
              <option value=''>Select Subcategory</option>
              {subcategories.map((subcategory) => (
                <option key={subcategory._id} value={subcategory._id}>
                  {subcategory.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Experience & Company */}
        <div className='grid md:grid-cols-2 gap-6'>
          <div>
            <label className='block text-sm font-semibold text-gray-700'>
              Experience (Years)
            </label>
            <input
              type='number'
              name='experience'
              value={formData.experience}
              onChange={handleChange}
              className='mt-1 w-full border border-gray-300 rounded-md px-4 py-2'
              placeholder='e.g., 2'
            />
          </div>
          <div>
            <label className='block text-sm font-semibold text-gray-700'>
              Company Name
            </label>
            <input
              name='company'
              value={formData.company}
              onChange={handleChange}
              required
              className='mt-1 w-full border border-gray-300 rounded-md px-4 py-2'
              placeholder='Company Inc.'
            />
          </div>
        </div>

        {/* Website & Location */}
        <div className='grid md:grid-cols-2 gap-6'>
          <div>
            <label className='block text-sm font-semibold text-gray-700'>
              Website
            </label>
            <input
              type='url'
              name='website'
              value={formData.website}
              onChange={handleChange}
              className='mt-1 w-full border border-gray-300 rounded-md px-4 py-2'
              placeholder='https://company.com'
            />
          </div>
          <div>
            <label className='block text-sm font-semibold text-gray-700'>
              Location
            </label>
            <input
              name='location'
              value={formData.location}
              onChange={handleChange}
              required
              className='mt-1 w-full border border-gray-300 rounded-md px-4 py-2'
              placeholder='e.g., Delhi, India'
            />
          </div>
        </div>

        {/* Deadline & Phone */}
        <div className='grid md:grid-cols-2 gap-6'>
          <div>
            <label className='block text-sm font-semibold text-gray-700'>
              Deadline
            </label>
            <input
              type='date'
              name='deadline'
              value={formData.deadline}
              onChange={handleChange}
              required
              className='mt-1 w-full border border-gray-300 rounded-md px-4 py-2'
            />
          </div>
          <div>
            <label className='block text-sm font-semibold text-gray-700'>
              Contact Phone
            </label>
            <input
              type='tel'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
              className='mt-1 w-full border border-gray-300 rounded-md px-4 py-2'
              placeholder='e.g., +1234567890'
            />
          </div>
        </div>

        {/* Salary Range */}
        <div className='grid md:grid-cols-2 gap-6'>
          <div>
            <label className='block text-sm font-semibold text-gray-700'>
              Minimum Salary
            </label>
            <input
              type='number'
              name='salaryMin'
              value={formData.salaryMin}
              onChange={handleChange}
              className='mt-1 w-full border border-gray-300 rounded-md px-4 py-2'
              placeholder='e.g., 30000'
            />
          </div>
          <div>
            <label className='block text-sm font-semibold text-gray-700'>
              Maximum Salary
            </label>
            <input
              type='number'
              name='salaryMax'
              value={formData.salaryMax}
              onChange={handleChange}
              className='mt-1 w-full border border-gray-300 rounded-md px-4 py-2'
              placeholder='e.g., 60000'
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className='block text-sm font-semibold text-gray-700'>
            Job Description
          </label>
          <textarea
            name='description'
            value={formData.description}
            onChange={handleChange}
            rows='4'
            required
            className='mt-1 w-full border border-gray-300 rounded-md px-4 py-2'
            placeholder='Provide a detailed description of the job role...'
          ></textarea>
        </div>

        {/* Responsibilities */}
        <div>
          <label className='block text-sm font-semibold text-gray-700'>
            Responsibilities
          </label>
          <textarea
            name='responsibilities'
            value={formData.responsibilities}
            onChange={handleChange}
            rows='4'
            className='mt-1 w-full border border-gray-300 rounded-md px-4 py-2'
            placeholder='List the responsibilities expected from the candidate...'
          ></textarea>
        </div>

        {/* Requirements */}
        <div>
          <label className='block text-sm font-semibold text-gray-700'>
            Requirements
          </label>
          <textarea
            name='requirements'
            value={formData.requirements}
            onChange={handleChange}
            rows='4'
            className='mt-1 w-full border border-gray-300 rounded-md px-4 py-2'
            placeholder='List qualifications, skills, and experience needed...'
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className='text-center'>
          <button
            type='submit'
            disabled={isSubmitting || isLoading}
            className={`bg-[#0077B6] text-white font-medium py-3 px-6 rounded-md hover:bg-[#023E8A] transition duration-300 ${
              isSubmitting || isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Posting..." : "Post Job"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostJob;
