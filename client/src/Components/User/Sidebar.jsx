import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaBars, FaTimes, FaUser, FaBriefcase, FaBell,
  FaClipboardList, FaCog, FaFileAlt, FaKey, FaHeart, FaSignOutAlt
} from 'react-icons/fa';

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Dashboard', path: '/user-dash/*', icon: <FaClipboardList /> },
    { name: 'Profile', path: '/user-dash/profile', icon: <FaUser /> },
    { name: 'Apply Job', path: '/user-dash/apply-job', icon: <FaBriefcase /> },
    { name: 'Applied Jobs', path: '/user-dash/applied-jobs', icon: <FaClipboardList /> },
    { name: 'Saved Jobs', path: '/user-dash/saved-jobs', icon: <FaHeart /> },
    { name: 'Resume', path: '/user-dash/resume', icon: <FaFileAlt /> },
    { name: 'Change Password', path: '/user-dash/change-password', icon: <FaKey /> },
    // { name: 'Notifications', path: '/user-dash/notifications', icon: <FaBell /> },
    // { name: 'Settings', path: '/user-dash/settings', icon: <FaCog /> },
    { name: 'Logout', path: '/user-dash/logout', icon: <FaSignOutAlt /> },
  ];

  return (
    <>
      <div className="md:hidden fixed top-4 mt-14 left-4 ">
        <button onClick={() => setOpen(!open)} className="text-gray-800">
          {open ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      <div className={`fixed top-0 left-0 z-40 w-64 h-screen bg-white shadow-md transform duration-300 md:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-5 text-xl font-bold text-blue-600 border-b">User Dashboard</div>
        <nav className="flex flex-col p-4 space-y-3">
          {links.map(link => (
            <Link
              key={link.name}
              to={link.path}
              className={`flex items-center gap-3 px-4 py-2 rounded-md hover:bg-blue-100 ${
                location.pathname === link.path ? 'bg-blue-200 text-blue-700 font-semibold' : 'text-gray-700'
              }`}
              onClick={() => setOpen(false)}
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
