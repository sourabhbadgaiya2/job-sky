import React, { useEffect } from 'react';
import { FaBriefcase, FaUserTie, FaBullhorn } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const RecruitingBanner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div style={{ backgroundColor:"#F5F5F5" }} className="py-10 px-6 bg-gradient-to-br ">
      <div
        className="mx-auto shadow-xl bg-white rounded-2xl p-10 text-center"
        data-aos="zoom-in"
      >

          <div className="text-center mb-10">
        <h2 className="text-2xl font-extrabold text-[#1F2937] mb-2 drop-shadow-md">
          <span className="text-[#0077B6]"> 🚀 Ready to</span> Hire Top Talent?
        </h2>
        <p className="text-gray-600 text-sm">
           Post your jobs to reach millions of active candidates and access over 15.8 million resumes across all sectors.
        </p>
      </div>

        {/* Icon Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="flex flex-col items-center" data-aos="fade-up">
            <FaBullhorn className="text-4xl text-[#0077B6] mb-3" />
            <h3 className="text-lg font-semibold text-gray-800">Widest Job Reach</h3>
            <p className="text-gray-600 text-sm text-center mt-1">
              Promote openings on web, mobile, and social platforms.
            </p>
          </div>

          <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="100">
            <FaBriefcase className="text-4xl text-[#0077B6] mb-3" />
            <h3 className="text-lg font-semibold text-gray-800">Qualified Applications</h3>
            <p className="text-gray-600 text-sm text-center mt-1">
              Connect with only the most relevant and filtered applicants.
            </p>
          </div>

          <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="200">
            <FaUserTie className="text-4xl text-[#0077B6] mb-3" />
            <h3 className="text-lg font-semibold text-gray-800">Recruiter Dashboard</h3>
            <p className="text-gray-600 text-sm text-center mt-1">
              Powerful tools to track applicants and schedule interviews.
            </p>
          </div>
        </div>

  <div className="text-center mt-10">
        <button className="bg-[#0077B6] text-white px-6 py-2 rounded-lg hover:bg-[#005f8a] transition">
          Start Recruiting Now
        </button>
      </div>

        <p className="text-sm text-gray-500 mt-4">
          Get started for free — no credit card required!
        </p>
      </div>
    </div>
  );
};

export default RecruitingBanner;
