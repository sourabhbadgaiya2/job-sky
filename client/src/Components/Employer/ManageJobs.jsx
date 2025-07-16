  // import React from "react";

  // const jobData = [
  //   {
  //     title: "Security Guard",
  //     company: "SecureCorp Pvt Ltd",
  //     location: "Delhi, India",
  //     type: "Full-Time",
  //     status: "Open",
  //   },
  //   {
  //     title: "Kitchen Master",
  //     company: "Tasty Bites",
  //     location: "Mumbai, India",
  //     type: "Full-Time",
  //     status: "Closed",
  //   },
  //   {
  //     title: "Sweeper",
  //     company: "CleanCity Services",
  //     location: "Pune, India",
  //     type: "Part-Time",
  //     status: "Open",
  //   },
  //   {
  //     title: "Construction Labour",
  //     company: "BuildTech Infra",
  //     location: "Hyderabad, India",
  //     type: "Contract",
  //     status: "Closed",
  //   },
  //   {
  //     title: "Painter",
  //     company: "ColorNest",
  //     location: "Chennai, India",
  //     type: "Project Based",
  //     status: "Open",
  //   },
  //   {
  //     title: "Cook",
  //     company: "Foodies Express",
  //     location: "Jaipur, India",
  //     type: "Full-Time",
  //     status: "Closed",
  //   },


  // ];

  // const ManageJobs = () => {
  //   return (
  //     <div className="p-6 bg-gray-100 min-h-screen">
  //       <h1 className="text-3xl font-bold mb-6 text-gray-800">Manage Jobs</h1>

  //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  //         {jobData.map((job, index) => (
  //           <div
  //             key={index}
  //             className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
  //           >
  //             <div className="flex justify-between items-center mb-2">
  //               <h2 className="text-xl font-semibold text-gray-800">
  //                 {job.title}
  //               </h2>
  //               <span
  //                 className={`text-sm px-2 py-1 rounded-full ${
  //                   job.status === "Open"
  //                     ? "bg-green-100 text-green-700"
  //                     : "bg-red-100 text-red-700"
  //                 }`}
  //               >
  //                 {job.status}
  //               </span>
  //             </div>

  //             <p className="text-sm text-gray-600 mb-1">
  //               <span className="font-medium">Company:</span> {job.company}
  //             </p>
  //             <p className="text-sm text-gray-600 mb-1">
  //               <span className="font-medium">Location:</span> {job.location}
  //             </p>
  //             <p className="text-sm text-gray-600 mb-1">
  //               <span className="font-medium">Job Type:</span> {job.type}
  //             </p>
  //             <p className="text-sm text-gray-600 mb-3">
  //               <span className="font-medium">Posted:</span>{" "}
  //               {new Date().toDateString()}
  //             </p>

  //             <div className="flex gap-3 mt-4">
  //               <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
  //                 View
  //               </button>
  //               <button className="px-4 py-2 text-sm bg-yellow-500 text-white rounded hover:bg-yellow-600">
  //                 Edit
  //               </button>
  //               <button className="px-4 py-2 text-sm bg-red-600 text-white rounded hover:bg-red-700">
  //                 Delete
  //               </button>
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   );
  // };

  // export default ManageJobs;



//   import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchApplications , fetchAllJobs, deleteJob} from "../../app/job/thunak";

// const ManageJobs = () => {
//   const dispatch = useDispatch();
//   // const { application , AllJobs,  loading } = useSelector((state) => state.job);
//    const { jobs, loading } = useSelector((state) => state.job);

// // console.log("Redux state:", state);
  

//   useEffect(() => {
//     // dispatch(fetchApplications());
//     dispatch(fetchAllJobs());
//   }, [dispatch]);


//   const handelDelete = (id) => {
//     if(window.confirm("are your sure want to delete this job"));
//     dispatch(deleteJob(id));

//   }
  


//   return (
//     <div className="p-6 mv bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold mb-6 text-gray-800">Manage Jobs</h1>

//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {jobs?.map((job, index) => (
//             // console.log("jobData",job),
            
            
//             <div
//               key={index}
//               className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
//             >
//               <div className="flex justify-between items-center mb-2">
//                 <h2 className="text-xl font-semibold text-gray-800">
//                   {job.title}
//                 </h2>
//                 <span
//                   className={`text-sm px-2 py-1 rounded-full ${
//                     job.status === "Open"
//                       ? "bg-green-100 text-green-700"
//                       : "bg-red-100 text-red-700"
//                   }`}
//                 >
//                   {job.status}
//                 </span>
//               </div>

//               <p className="text-sm text-gray-600 mb-1">
//                 <span className="font-medium">Company:</span> {job.company}
//               </p>
//               <p className="text-sm text-gray-600 mb-1">
//                 <span className="font-medium">Location:</span> {job.location}
//               </p>
//               <p className="text-sm text-gray-600 mb-1">
//                 <span className="font-medium">Job Type:</span> {job.type}
//               </p>
//               <p className="text-sm text-gray-600 mb-3">
//                 <span className="font-medium">Posted:</span>{" "}
//                 {new Date().toDateString()}
//               </p>

//               <div className="flex gap-3 mt-4">
//                 <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
//                   View
//                 </button>
//                 <button className="px-4 py-2 text-sm bg-yellow-500 text-white rounded hover:bg-yellow-600">
//                   Edit
//                 </button>
//                 <button onClick={()=> handelDelete(job._id) } className="px-4 py-2 text-sm bg-red-600 text-white rounded hover:bg-red-700">
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ManageJobs;


import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllJobs, deleteJob, updateJob } from "../../app/job/thunak";

const ManageJobs = () => {
  const dispatch = useDispatch();
  const { jobs, loading } = useSelector((state) => state.job);

  const [showModal, setShowModal] = useState(false);
  const [editingJob, setEditingJob] = useState(null);

  useEffect(() => {
    dispatch(fetchAllJobs());
  }, [dispatch]);

  const handelDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this job?")) {
      dispatch(deleteJob(id)).then(() => {
        dispatch(fetchAllJobs()); // Refresh list after delete
      });
    }
  };

  const handleEditClick = (job) => {
    setEditingJob(job);
    setShowModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditingJob({ ...editingJob, [name]: value });
  };

  const handleUpdateJob = () => {
    dispatch(updateJob({ id: editingJob._id, jobData: editingJob })).then(() => {
      setShowModal(false);
      dispatch(fetchAllJobs());
    });
  };

  return (
    <div className="p-6 mb-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Manage Jobs</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs?.map((job, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
            >
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>
                <span
                  className={`text-sm px-2 py-1 rounded-full ${
                    job.status === "Open"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {job.status}
                </span>
              </div>

              <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium">Company:</span> {job.company}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium">Location:</span> {job.location}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium">Job Type:</span> {job.type}
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <span className="font-medium">Posted:</span>{" "}
                {new Date().toDateString()}
              </p>

              <div className="flex gap-3 mt-4">
                {/* <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
                  View
                </button> */}
                <button
                  onClick={() => handleEditClick(job)}
                  className="px-4 py-2 text-sm bg-yellow-500 text-white rounded hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handelDelete(job._id)}
                  className="px-4 py-2 text-sm bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 📝 Edit Modal */}
      {showModal && editingJob && (
        <div className="fixed inset-0 backdrop-blur shadow-2xl   bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Edit Job</h2>

            <label className="block mb-2 text-sm font-medium">Title</label>
            <input
              type="text"
              name="title"
              value={editingJob.title}
              onChange={handleInputChange}
              className="w-full p-2 mb-4 border rounded"
            />

            <label className="block mb-2 text-sm font-medium">Company</label>
            <input
              type="text"
              name="company"
              value={editingJob.company}
              onChange={handleInputChange}
              className="w-full p-2 mb-4 border rounded"
            />

            <label className="block mb-2 text-sm font-medium">Location</label>
            <input
              type="text"
              name="location"
              value={editingJob.location}
              onChange={handleInputChange}
              className="w-full p-2 mb-4 border rounded"
            />

            <label className="block mb-2 text-sm font-medium">Job Type</label>
            <input
              type="text"
              name="type"
              value={editingJob.type}
              onChange={handleInputChange}
              className="w-full p-2 mb-4 border rounded"
            />

            <label className="block mb-2 text-sm font-medium">Status</label>
            <select
              name="status"
              value={editingJob.status}
              onChange={handleInputChange}
              className="w-full p-2 mb-4 border rounded"
            >
              <option value="Open">Open</option>
              <option value="Closed">Closed</option>
            </select>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdateJob}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageJobs;
