import React from 'react';
import {
  FaHome, FaSearch, FaHeart, FaUser,
  FaFacebook, FaTwitter, FaInstagram, FaLinkedin,
  FaEnvelope, FaPhoneAlt, FaMapMarkerAlt
} from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      {/* Desktop Footer */}
      <footer className=" md:block  right-0 z-10 bg-gray-900 text-white pt-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-gray-700">
            {/* Company Info */}
            <div className='' >
              <div className="mb-4">
                <img src="/logo.png" alt="Logo" className="h-10" />
              </div>
              <p className="text-sm text-gray-400 mb-3">
                Connecting Talent with Opportunity – Your trusted job portal for skilled and unskilled workers across India.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <FaMapMarkerAlt /> 123 Hiring St, Job City, India
                </li>
                <li className="flex items-center gap-2">
                  <FaEnvelope /> support@yourjobsite.com
                </li>
                <li className="flex items-center gap-2">
                  <FaPhoneAlt /> +91 9876543210
                </li>
              </ul>
            </div>

            {/* For Candidates */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">For Candidates</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white">Browse Jobs</a></li>
                <li><a href="#" className="hover:text-white">Categories</a></li>
                <li><a href="#" className="hover:text-white">Dashboard</a></li>
                <li><a href="#" className="hover:text-white">Job Alerts</a></li>
                <li><a href="#" className="hover:text-white">Bookmarks</a></li>
              </ul>
            </div>

            {/* For Employers */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">For Employers</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white">Browse Candidates</a></li>
                <li><a href="#" className="hover:text-white">Dashboard</a></li>
                <li><a href="#" className="hover:text-white">Post Job</a></li>
                <li><a href="#" className="hover:text-white">Packages</a></li>
              </ul>
            </div>

            {/* Helpful Resources */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Helpful Resources</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white">Site Map</a></li>
                <li><a href="#" className="hover:text-white">Terms of Use</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Security Center</a></li>
                <li><a href="#" className="hover:text-white">Accessibility</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center py-6 text-sm text-gray-400">
            <p>© 2025 YourJobSite — Made with Skyinfo Group.</p>
            <div className="flex gap-4 mt-4 md:mt-0 text-xl">
              <a href="#" title="Facebook" className="hover:scale-110 transition-transform" style={{ color: '#1877F2' }}>
                <FaFacebook />
              </a>
              <a href="#" title="Twitter" className="hover:scale-110 transition-transform" style={{ color: '#1DA1F2' }}>
                <FaTwitter />
              </a>
              <a href="#" title="Instagram" className="hover:scale-110 transition-transform" style={{ color: '#E4405F' }}>
                <FaInstagram />
              </a>
              <a href="#" title="LinkedIn" className="hover:scale-110 transition-transform" style={{ color: '#0077B5' }}>
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-md py-2 px-6 flex justify-around items-center border-t border-gray-300 z-50">
        <a href="#" className="flex flex-col items-center text-blue-600">
          <FaHome className="text-xl" />
          <span className="text-xs">Home</span>
        </a>
        <a href="#" className="flex flex-col items-center text-gray-500 hover:text-blue-600">
          <FaSearch className="text-xl" />
          <span className="text-xs">Search</span>
        </a>
        <a href="#" className="flex flex-col items-center text-gray-500 hover:text-blue-600">
          <FaHeart className="text-xl" />
          <span className="text-xs">Saved</span>
        </a>
        <a href="#" className="flex flex-col items-center text-gray-500 hover:text-blue-600">
          <FaUser className="text-xl" />
          <span className="text-xs">Profile</span>
        </a>
      </div>
    </>
  );
};

export default Footer;
