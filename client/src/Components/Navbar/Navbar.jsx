// // import { useState, useRef, useEffect } from 'react';
// // import {
// //   FaHome,
// //   FaSearch,
// //   FaBuilding,
// //   FaUserTie,
// //   FaGraduationCap,
// //   FaBook,
// //   FaInfoCircle,
// //   FaUpload,
// //   FaUser,
// //   FaChevronDown,
// //   FaChevronUp,
// //   FaTimes,
// //   FaBars
// // } from 'react-icons/fa';
// // import { useSelector } from 'react-redux';
// // import { Link } from 'react-router-dom';

// // const Navbar = () => {
// //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
// //   const [openDropdown, setOpenDropdown] = useState(null);
// //   const dropdownRefs = useRef({});
// //   const token = localStorage.getItem("token"); // ya sessionStorage
// // const user = token ? JSON.parse(atob(token.split('.')[1])) : null;

// //   // const  user = useSelector((state)=> state.auth)
// //   // console.log(""us er);

// //   // Close dropdown when clicking outside
// //   useEffect(() => {
// //     const handleClickOutside = (event) => {
// //       const isOutside = Object.values(dropdownRefs.current).every(
// //         (ref) => ref && !ref.contains(event.target)
// //       );
// //       if (isOutside) {
// //         setOpenDropdown(null);
// //       }
// //     };
// //     const handleLogout = () => {
// //   localStorage.removeItem("token"); // token delete
// //   window.location.reload();         // page reload for update
// // };

// //     document.addEventListener('mousedown', handleClickOutside);
// //     return () => document.removeEventListener('mousedown', handleClickOutside);
// //   }, []);

// //   const toggleDropdown = (dropdownName) => {
// //     setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
// //   };

// //   const navItems = [
// //     {
// //       name: 'Home',
// //       icon: <FaHome className="mr-2" />,
// //       href: '/'
// //     },
// //     {
// //       name: 'Find Jobs',
// //       icon: <FaSearch className="mr-2" />,
// //       href: '#',
// //       dropdown: [
// //         { name: 'All Jobs', href: '/all-job' },
// //         { name: 'Remote Jobs', href: '#' },
// //         { name: 'Government Jobs', href: '#' },
// //         { name: 'IT Jobs', href: '#' }
// //       ]
// //     },
// //     {
// //       name: 'Employers',
// //       icon: <FaBuilding className="mr-2" />,
// //       href: '#',
// //       dropdown: [
// //         { name: 'Post a Job', href: '/post-job' },
// //         { name: 'Browse Candidates', href: '#' },
// //         { name: 'Employer Dashboard', href: '/employer-dash/*' },
// //         {name: "Employee Register" , href: "/employerRegister"}
// //       ]
// //     },
// //     {
// //       name: 'Candidates',
// //       icon: <FaUserTie className="mr-2" />,
// //       href: '#',
// //       dropdown: [
// //         { name: 'User Dashboard', href: '/user-dash/*' },
// //         { name: 'Resume Builder', href: '#' },
// //         { name: 'Career Advice', href: '#' }
// //       ]
// //     },
// //     {
// //       name: 'Education',
// //       icon: <FaGraduationCap className="mr-2" />,
// //       href: '#',
// //       dropdown: [
// //         { name: 'Online Courses', href: '#' },
// //         { name: 'Certifications', href: '#' },
// //         { name: 'Universities', href: '#' }
// //       ]
// //     },
// //     {
// //       name: 'Contact',
// //       icon: <FaGraduationCap className="mr-2" />,
// //       href: '/contact'
// //     }
// //   ];

// //   return (
// //     <nav className="bg-white shadow-lg py-3 sticky top-0 z-50">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="flex justify-between md:h-14 h-10">
// //           {/* Logo and desktop nav */}
// //           <div className="flex items-center">
// //             <div className="flex-shrink-0 flex items-center">
// //               <span className="text-xl font-bold text-[#009688]">SuperSite</span>
// //             </div>

// //             {/* Desktop Navigation */}
// //             <div className="hidden md:ml-8 mt-2 md:flex md:space-x-4">
// //               {navItems.map((item) => (
// //                 <div
// //                   key={item.name}
// //                   className="relative"
// //                   ref={(el) => {
// //                     if (el) dropdownRefs.current[item.name] = el;
// //                   }}
// //                 >
// //                   {item.dropdown ? (
// //                     <>
// //                       <button
// //                         onClick={() => toggleDropdown(item.name)}
// //                         className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
// //                           openDropdown === item.name
// //                             ? 'text-[#009688] bg-blue-50'
// //                             : 'text-gray-700 hover:text-[#009688] hover:bg-blue-50'
// //                         }`}
// //                       >
// //                         {item.icon}
// //                         {item.name}
// //                         {openDropdown === item.name ? (
// //                           <FaChevronUp className="ml-1" size={12} />
// //                         ) : (
// //                           <FaChevronDown className="ml-1" size={12} />
// //                         )}
// //                       </button>

// //                       {openDropdown === item.name && (
// //                         <div className="absolute z-10 mt-1 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
// //                           <div className="py-1">
// //                             {item.dropdown.map((subItem) => (
// //                               <a
// //                                 key={subItem.name}
// //                                 href={subItem.href}
// //                                 onClick={() => setOpenDropdown(null)}
// //                                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#009688]"
// //                               >
// //                                 {subItem.name}
// //                               </a>
// //                             ))}
// //                           </div>
// //                         </div>
// //                       )}
// //                     </>
// //                   ) : (
// //                     <a
// //                       href={item.href}
// //                       className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-[#009688] hover:bg-blue-50"
// //                     >
// //                       {item.icon}
// //                       {item.name}
// //                     </a>
// //                   )}
// //                 </div>
// //               ))}
// //             </div>
// //           </div>

// //           {/* Right side buttons */}
// //           <div className="hidden md:flex items-center space-x-2">
// //             <button className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#009688] hover:bg-blue-50 rounded-md">
// //               <FaUpload className="mr-2" />
// //               Upload CV
// //             </button>
// //             <Link to="/login">
// //              <button className="flex items-center px-3 py-2 text-sm font-medium text-white bg-[#009688] hover:bg-[#60a7a0] rounded-md">
// //               <FaUser className="mr-2" />
// //               Login
// //             </button>
// //             </Link>

// //           </div>

// //           {/* Mobile menu button */}
// //           <div className="md:hidden flex items-center">
// //             <button
// //               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
// //               className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
// //             >
// //               {mobileMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Mobile menu */}
// //       {mobileMenuOpen && (
// //         <div className="md:hidden bg-white border-t">
// //           <div className="px-2 pt-2 pb-3 space-y-1">
// //             {navItems.map((item) => (
// //               <div key={item.name}>
// //                 {item.dropdown ? (
// //                   <>
// //                     <button
// //                       onClick={() => toggleDropdown(item.name)}
// //                       className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium ${
// //                         openDropdown === item.name
// //                           ? 'text-[#009688] bg-blue-50'
// //                           : 'text-gray-700 hover:text-[#009688] hover:bg-blue-50'
// //                       }`}
// //                     >
// //                       <span className="flex items-center">
// //                         {item.icon}
// //                         {item.name}
// //                       </span>
// //                       {openDropdown === item.name ? (
// //                         <FaChevronUp size={12} />
// //                       ) : (
// //                         <FaChevronDown size={12} />
// //                       )}
// //                     </button>

// //                     {openDropdown === item.name && (
// //                       <div className="pl-8 py-1 space-y-1">
// //                         {item.dropdown.map((subItem) => (
// //                           <a
// //                             key={subItem.name}
// //                             href={subItem.href}
// //                             onClick={() => setMobileMenuOpen(false)}
// //                             className="block px-3 py-2 rounded-md text-base font-medium text-[#009688] hover:text-[#009688] hover:bg-blue-50"
// //                           >
// //                             {subItem.name}
// //                           </a>
// //                         ))}
// //                       </div>
// //                     )}
// //                   </>
// //                 ) : (
// //                   <a
// //                     href={item.href}
// //                     onClick={() => setMobileMenuOpen(false)}
// //                     className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#009688] hover:bg-blue-50"
// //                   >
// //                     {item.icon}
// //                     {item.name}
// //                   </a>
// //                 )}
// //               </div>
// //             ))}

// //             <div className="pt-2 border-t">
// //               <button className="w-full flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#009688] hover:bg-blue-50">
// //                 <FaUpload className="mr-2" />
// //                 Upload CV
// //               </button>
// //              {user ? (
// //   <button
// //     onClick={handleLogout}
// //     className="w-full flex items-center px-3 py-2 rounded-md text-base font-medium text-white bg-red-600 hover:bg-red-700 mt-1"
// //   >
// //     <FaSignOutAlt className="mr-2" />
// //     Logout
// //   </button>
// // ) : (
// //   <button
// //     onClick={handleLogin}
// //     className="w-full flex items-center px-3 py-2 rounded-md text-base font-medium text-white bg-[#009688] hover:bg-blue-700 mt-1"
// //   >
// //     <FaUser className="mr-2" />
// //     Login
// //   </button>
// // )}

// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </nav>
// //   );
// // };

// // export default Navbar;

// import { useState, useRef, useEffect } from 'react';
// import {
//   FaHome,
//   FaSearch,
//   FaBuilding,
//   FaUserTie,
//   FaGraduationCap,
//   FaUpload,
//   FaUser,
//   FaChevronDown,
//   FaChevronUp,
//   FaTimes,
//   FaBars,
//   FaSignOutAlt
// } from 'react-icons/fa';
// import { Link, useNavigate } from 'react-router-dom';

// const Navbar = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const dropdownRefs = useRef({});

//   const navigate = useNavigate();
//   // Check if any user is logged in
//   const tokenEmployer = localStorage.getItem("tokenEmployer");
//   const tokenUser = localStorage.getItem("tokenUser");
//   const tokenAdmin = localStorage.getItem("tokenAdmin");
// //
//   const isLoggedIn = tokenEmployer || tokenUser || tokenAdmin;

//   const handleLogout = () => {
//     localStorage.removeItem("tokenEmployer");
//     localStorage.removeItem("tokenUser");
//     localStorage.removeItem("tokenAdmin");
//     localStorage.removeItem("user");
//     navigate("/employeLogin")
//     window.location.reload();
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       const isOutside = Object.values(dropdownRefs.current).every(
//         (ref) => ref && !ref.contains(event.target)
//       );
//       if (isOutside) setOpenDropdown(null);
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   const toggleDropdown = (dropdownName) => {
//     setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
//   };

//   const navItems = [
//     { name: 'Home', icon: <FaHome className="mr-2" />, href: '/' },
//     {
//       name: 'Find Jobs',
//       icon: <FaSearch className="mr-2" />,
//       href: '#',
//       dropdown: [
//         { name: 'All Jobs', href: '/all-job' },
//         { name: 'Remote Jobs', href: '#' },
//         { name: 'Government Jobs', href: '#' },
//         { name: 'IT Jobs', href: '#' }
//       ]
//     },
//     {
//       name: 'Employers',
//       icon: <FaBuilding className="mr-2" />,
//       href: '#',
//       dropdown: [
//         { name: 'Post a Job', href: '/post-job' },
//         { name: 'Browse Candidates', href: '#' },
//         { name: 'Employer Dashboard', href: '/employer-dash/*' },
//         { name: 'Employer Register', href: '/employerRegister' }
//       ]
//     },
//     {
//       name: 'Candidates',
//       icon: <FaUserTie className="mr-2" />,
//       href: '#',
//       dropdown: [
//         { name: 'User Dashboard', href: '/user-dash/*' },
//         { name: 'Resume Builder', href: '#' },
//         { name: 'Career Advice', href: '#' }
//       ]
//     },
//     {
//       name: 'Education',
//       icon: <FaGraduationCap className="mr-2" />,
//       href: '#',
//       dropdown: [
//         { name: 'Online Courses', href: '#' },
//         { name: 'Certifications', href: '#' },
//         { name: 'Universities', href: '#' }
//       ]
//     },
//     {
//       name: 'Contact',
//       icon: <FaGraduationCap className="mr-2" />,
//       href: '/contact'
//     }
//   ];

//   return (
//     <nav className="bg-white shadow-lg py-3 sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between md:h-14 h-10">
//           {/* Logo and desktop nav */}
//           <div className="flex items-center">
//             <div className="flex-shrink-0 flex items-center">
//               <span className="text-xl font-bold text-[#009688]">SuperSite</span>
//             </div>

//             {/* Desktop Navigation */}
//             <div className="hidden md:ml-8 mt-2 md:flex md:space-x-4">
//               {navItems.map((item) => (
//                 <div
//                   key={item.name}
//                   className="relative"
//                   ref={(el) => {
//                     if (el) dropdownRefs.current[item.name] = el;
//                   }}
//                 >
//                   {item.dropdown ? (
//                     <>
//                       <button
//                         onClick={() => toggleDropdown(item.name)}
//                         className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
//                           openDropdown === item.name
//                             ? 'text-[#009688] bg-blue-50'
//                             : 'text-gray-700 hover:text-[#009688] hover:bg-blue-50'
//                         }`}
//                       >
//                         {item.icon}
//                         {item.name}
//                         {openDropdown === item.name ? (
//                           <FaChevronUp className="ml-1" size={12} />
//                         ) : (
//                           <FaChevronDown className="ml-1" size={12} />
//                         )}
//                       </button>

//                       {openDropdown === item.name && (
//                         <div className="absolute z-10 mt-1 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
//                           <div className="py-1">
//                             {item.dropdown.map((subItem) => (
//                               <a
//                                 key={subItem.name}
//                                 href={subItem.href}
//                                 onClick={() => setOpenDropdown(null)}
//                                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#009688]"
//                               >
//                                 {subItem.name}
//                               </a>
//                             ))}
//                           </div>
//                         </div>
//                       )}
//                     </>
//                   ) : (
//                     <a
//                       href={item.href}
//                       className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-[#009688] hover:bg-blue-50"
//                     >
//                       {item.icon}
//                       {item.name}
//                     </a>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right side buttons */}
//           <div className="hidden md:flex items-center space-x-2">
//             <button className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#009688] hover:bg-blue-50 rounded-md">
//               <FaUpload className="mr-2" />
//               Upload CV
//             </button>

//             {isLoggedIn ? (
//               <button
//                 onClick={handleLogout}
//                 className="flex items-center px-3 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md"
//               >
//                 <FaSignOutAlt className="mr-2" />
//                 Logout
//               </button>
//             ) : (
//               <Link to="/login">
//                 <button className="flex items-center px-3 py-2 text-sm font-medium text-white bg-[#009688] hover:bg-[#60a7a0] rounded-md">
//                   <FaUser className="mr-2" />
//                   Login
//                 </button>
//               </Link>
//             )}
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
//             >
//               {mobileMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       {mobileMenuOpen && (
//         <div className="md:hidden bg-white border-t">
//           <div className="px-2 pt-2 pb-3 space-y-1">
//             {navItems.map((item) => (
//               <div key={item.name}>
//                 {item.dropdown ? (
//                   <>
//                     <button
//                       onClick={() => toggleDropdown(item.name)}
//                       className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium ${
//                         openDropdown === item.name
//                           ? 'text-[#009688] bg-blue-50'
//                           : 'text-gray-700 hover:text-[#009688] hover:bg-blue-50'
//                       }`}
//                     >
//                       <span className="flex items-center">
//                         {item.icon}
//                         {item.name}
//                       </span>
//                       {openDropdown === item.name ? (
//                         <FaChevronUp size={12} />
//                       ) : (
//                         <FaChevronDown size={12} />
//                       )}
//                     </button>

//                     {openDropdown === item.name && (
//                       <div className="pl-8 py-1 space-y-1">
//                         {item.dropdown.map((subItem) => (
//                           <a
//                             key={subItem.name}
//                             href={subItem.href}
//                             onClick={() => setMobileMenuOpen(false)}
//                             className="block px-3 py-2 rounded-md text-base font-medium text-[#009688] hover:bg-blue-50"
//                           >
//                             {subItem.name}
//                           </a>
//                         ))}
//                       </div>
//                     )}
//                   </>
//                 ) : (
//                   <a
//                     href={item.href}
//                     onClick={() => setMobileMenuOpen(false)}
//                     className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#009688] hover:bg-blue-50"
//                   >
//                     {item.icon}
//                     {item.name}
//                   </a>
//                 )}
//               </div>
//             ))}

//             <div className="pt-2 border-t">
//               <button className="w-full flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#009688] hover:bg-blue-50">
//                 <FaUpload className="mr-2" />
//                 Upload CV
//               </button>

//               {isLoggedIn ? (
//                 <button
//                   onClick={() => {
//                     handleLogout();
//                     setMobileMenuOpen(false);
//                   }}
//                   className="w-full flex items-center px-3 py-2 rounded-md text-base font-medium text-white bg-red-600 hover:bg-red-700 mt-1"
//                 >
//                   <FaSignOutAlt className="mr-2" />
//                   Logout
//                 </button>
//               ) : (
//                 <Link to="/login">
//                   <button
//                     onClick={() => setMobileMenuOpen(false)}
//                     className="w-full flex items-center px-3 py-2 rounded-md text-base font-medium text-white bg-[#009688] hover:bg-blue-700 mt-1"
//                   >
//                     <FaUser className="mr-2" />
//                     Login
//                   </button>
//                 </Link>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import { useState } from "react";
import {
  FaHome,
  FaSearch,
  FaBuilding,
  FaUserTie,
  FaGraduationCap,
  FaUpload,
  FaUser,
  FaChevronDown,
  FaChevronUp,
  FaTimes,
  FaBars,
  FaSignOutAlt,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();

  const tokenEmployer = localStorage.getItem("tokenEmployer");
  const tokenUser = localStorage.getItem("tokenUser");
  const tokenAdmin = localStorage.getItem("tokenAdmin");
  const token = localStorage.getItem("token");
  const isLoggedIn = tokenEmployer || tokenUser || tokenAdmin || token;

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };

  const navItems = [
    { name: "Home", icon: <FaHome className='mr-2' />, href: "/" },
    {
      name: "Find Jobs",
      icon: <FaSearch className='mr-2' />,
      dropdown: [
        { name: "All Jobs", href: "/all-job" },
        { name: "Remote Jobs", href: "/remote-jobs" },
        { name: "Government Jobs", href: "/government-jobs" },
        { name: "IT Jobs", href: "/it-jobs" },
      ],
    },
    {
      name: "Employers",
      icon: <FaBuilding className='mr-2' />,
      dropdown: [
        { name: "Post a Job", href: "/post-job" },
        { name: "Browse Candidates", href: "/candidates" },
        { name: "Employer Dashboard", href: "/employer-dash" },
        { name: "Login-Register", href: "/employerRegister" },
        // { name: 'Employer Dashboard', href: '' },
      ],
    },
    {
      name: "Candidates",
      icon: <FaUserTie className='mr-2' />,
      dropdown: [
        { name: "User Dashboard", href: "/user-dash" },
        { name: "Resume Builder", href: "/resume-builder" },
      ],
    },
    {
      name: "Education",
      icon: <FaGraduationCap className='mr-2' />,
      dropdown: [
        { name: "Online Courses", href: "/courses" },
        { name: "Certifications", href: "/certifications" },
      ],
    },
    {
      name: "Contact",
      icon: <FaGraduationCap className='mr-2' />,
      href: "/contact",
    },
  ];

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const closeMenus = () => {
    setOpenDropdown(null);
    setMobileMenuOpen(false);
  };

  return (
    <nav className='bg-white shadow-lg py-3 sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between md:h-14 h-10'>
          {/* Logo */}
          <Link
            to='/'
            className='text-xl font-bold text-[#009688] flex items-center'
          >
            SuperSite
          </Link>

          {/* Desktop Menu */}
          <div className='hidden md:flex md:items-center md:space-x-4'>
            {navItems.map((item) => (
              <div key={item.name} className='relative'>
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                        openDropdown === item.name
                          ? "text-[#009688] bg-blue-50"
                          : "text-gray-700 hover:text-[#009688] hover:bg-blue-50"
                      }`}
                    >
                      {item.icon}
                      {item.name}
                      {openDropdown === item.name ? (
                        <FaChevronUp className='ml-1' size={12} />
                      ) : (
                        <FaChevronDown className='ml-1' size={12} />
                      )}
                    </button>

                    {openDropdown === item.name && (
                      <div className='absolute left-0 mt-1 w-56 rounded-md bg-white shadow-lg z-10'>
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            onClick={closeMenus}
                            className='block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#009688]'
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className='flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-[#009688] hover:bg-blue-50'
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Upload CV */}
            <button className='flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#009688] hover:bg-blue-50 rounded-md'>
              <FaUpload className='mr-2' /> Upload CV
            </button>

            {/* Login / Logout */}
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className='flex items-center px-3 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md'
              >
                <FaSignOutAlt className='mr-2' /> Logout
              </button>
            ) : (
              <Link
                to='/login'
                className='flex items-center px-3 py-2 text-sm font-medium text-white bg-[#009688] hover:bg-[#00796b] rounded-md'
              >
                <FaUser className='mr-2' /> Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden flex items-center'>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className='p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100'
            >
              {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className='md:hidden bg-white border-t px-4 py-2 space-y-2'>
          {navItems.map((item) => (
            <div key={item.name}>
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className='w-full flex justify-between px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#009688] hover:bg-blue-50'
                  >
                    <span className='flex items-center'>
                      {item.icon}
                      {item.name}
                    </span>
                    <FaChevronDown size={12} />
                  </button>

                  {openDropdown === item.name && (
                    <div className='pl-4'>
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          onClick={closeMenus}
                          className='block px-3 py-2 rounded-md text-base text-[#009688] hover:bg-blue-50'
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={item.href}
                  onClick={closeMenus}
                  className='flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#009688] hover:bg-blue-50'
                >
                  {item.icon}
                  {item.name}
                </Link>
              )}
            </div>
          ))}

          {/* Upload CV */}
          <button className='w-full flex items-center px-3 py-2 rounded-md text-base text-gray-700 hover:text-[#009688] hover:bg-blue-50'>
            <FaUpload className='mr-2' /> Upload CV
          </button>

          {/* Login / Logout */}
          {isLoggedIn ? (
            <button
              onClick={() => {
                handleLogout();
                closeMenus();
              }}
              className='w-full flex items-center px-3 py-2 rounded-md text-base font-medium text-white bg-red-600 hover:bg-red-700'
            >
              <FaSignOutAlt className='mr-2' /> Logout
            </button>
          ) : (
            <Link
              to='/login'
              onClick={closeMenus}
              className='w-full flex items-center px-3 py-2 rounded-md text-base font-medium text-white bg-[#009688] hover:bg-[#00796b]'
            >
              <FaUser className='mr-2' /> Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
