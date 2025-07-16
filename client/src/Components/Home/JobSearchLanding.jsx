import React, { useEffect } from 'react';
import CountUp from 'react-countup';
import AOS from 'aos';
import 'aos/dist/aos.css';

const JobSearchLanding = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-br ">

        <div className="text-center mb-10">
        <h2 className="text-2xl font-extrabold text-[#1F2937] mb-2 drop-shadow-md">
          <span className="text-[#0077B6]">  Connecting Talent</span>  with Opportunity ?
        </h2>
        <p className="text-gray-600 text-sm">
          Trusted by millions of job seekers and top employers globally.
        </p>
      </div>

      <div
        className="bg-white shadow-2xl rounded-2xl p-10 grid grid-cols-1 md:grid-cols-3 gap-10  mx-auto"
        data-aos="zoom-in"
      >
        {/* Employers */}
        <div className="flex flex-col items-center">
          <div className="text-6xl font-bold text-[#0077B6] mb-2">
            <CountUp end={300} suffix="M+" duration={3} />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-1">Employers</h3>
          <p className="text-gray-600 text-center max-w-xs">Companies around the world trust us to find top talent.</p>
        </div>

        {/* Active Users */}
        <div className="flex flex-col items-center">
          <div className="text-6xl font-bold text-pink-600 mb-2">
            <CountUp end={4} suffix="M" duration={3} />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-1">Daily Active Users</h3>
          <p className="text-gray-600 text-center max-w-xs">Millions search and apply for jobs on our platform daily.</p>
        </div>

        {/* Stories Shared */}
        <div className="flex flex-col items-center">
          <div className="text-6xl font-bold text-green-600 mb-2">
            <CountUp end={20} suffix="M" duration={3} />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-1">Stories Shared</h3>
          <p className="text-gray-600 text-center max-w-xs">Success stories from candidates who found their dream jobs.</p>
        </div>
      </div>
    </div>
  );
};

export default JobSearchLanding;
