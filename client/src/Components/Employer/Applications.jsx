// import { useEffect, useState } from "react";
// import axiosInstance from "../../config/axios";

// const Applications = () => {
//   const [applicants, setapplicants] = useState([]);
//   const [showPopup, setShowPopup] = useState(false);
//   const [selectedUserId, setSelectedUserId] = useState(null);

//   useEffect(() => {
//     const init = async () => {
//       try {
//         const res = await axiosInstance.get("/user/all");
//         setapplicants(res.data.users);
//         console.log(res);
//       } catch (error) {}
//     };

//     init();
//   }, []);

//   const viewHandler = async (userId) => {
//     try {
//       if (!userId) {
//         throw new Error("No user ID provided");
//       }

//       const userString = localStorage.getItem("user");
//       if (!userString) {
//         throw new Error("User not found in localStorage");
//       }

//       const user = JSON.parse(userString);
//       const employerId = user?.id;

//       if (!employerId) {
//         throw new Error("Employer ID not found");
//       }

//       const res = await axiosInstance.post("/employee/view-user-profile", {
//         employerId,
//         userId,
//       });
//       console.log(res, "KKKK");
//       if (res.data.success) {
//         return res.data.user; // Return the user data
//       } else {
//         throw new Error(res.data.message || "Failed to fetch user");
//       }
//     } catch (error) {
//       console.error("Error in viewHandler:", error);
//       throw error; // Re-throw to handle in the calling function
//     }
//   };

//   return (
//     <div className='p-6 bg-gray-100 min-h-screen'>
//       <h1 className='text-3xl font-bold mb-6 text-gray-800'>
//         Job Applications
//       </h1>

//       <div className='overflow-x-auto bg-white shadow rounded-lg'>
//         <table className='min-w-full divide-y divide-gray-200'>
//           <thead className='bg-blue-50'>
//             <tr>
//               <th className='px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider'>
//                 Applicant Name
//               </th>
//               {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
//                 Email
//               </th> */}
//               <th className='px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider'>
//                 Skill
//               </th>
//               {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
//                 Resume
//               </th> */}
//               <th className='px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider'>
//                 Status
//               </th>
//               <th className='px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider'>
//                 Actions
//               </th>
//             </tr>
//           </thead>
//           <tbody className='divide-y divide-gray-200 text-sm'>
//             {applicants.map((applicant) => (
//               <tr key={applicant.id} className='hover:bg-gray-50'>
//                 <td className='px-6 py-4 font-medium text-gray-900'>
//                   {applicant.name}
//                 </td>
//                 {/* <td className="px-6 py-4 text-gray-700">{applicant.phone}</td> */}
//                 <td className='px-6 py-4 text-gray-700'>
//                   {applicant.Skill || "Worker"}
//                 </td>
//                 {/* <td className="px-6 py-4">
//                   <a
//                     href={applicant.resume}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-600 hover:underline"
//                   >
//                     View Resume
//                   </a>
//                 </td> */}
//                 <td className='px-6 py-4'>
//                   {/* <span
//                     className={`px-3 py-1 rounded-full text-xs font-semibold ${
//                       applicant.status === "Approved"
//                         ? "bg-green-100 text-green-700"
//                         : applicant.status === "Rejected"
//                         ? "bg-red-100 text-red-700"
//                         : "bg-yellow-100 text-yellow-800"
//                     }`}
//                   >
//                     {applicant.status}
//                   </span> */}
//                 </td>
//                 <button
//                   onClick={async () => {
//                     try {
//                       // Get user ID with fallbacks
//                       const userId =
//                         applicant._id || applicant.user?._id || applicant.id;

//                       if (!userId) {
//                         throw new Error(
//                           "Could not find user ID in applicant data"
//                         );
//                       }

//                       // Call API first
//                       const userData = await viewHandler(userId);

//                       // Update state and show popup only if API call succeeds
//                       setSelectedUserId(userId);
//                       // setUserDetails(userData); // If you're using this
//                       setShowPopup(true);
//                     } catch (error) {
//                       console.error("Error viewing user details:", error);
//                       alert(error.message || "Failed to load user details");
//                     }
//                   }}
//                   className='px-3 py-1 mt-2 bg-green-500 text-white text-xs rounded hover:bg-green-600'
//                 >
//                   View Detail
//                 </button>
//               </tr>
//             ))}
//             {showPopup && (
//               <div className='fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-opacity-50 z-50'>
//                 <div className='bg-white rounded-lg shadow-lg p-6 w-96'>
//                   <h2 className='text-lg font-semibold mb-4'>User Details</h2>
//                   <p>User ID: {selectedUserId}</p>

//                   <div className='flex justify-end mt-4'>
//                     <button
//                       onClick={() => setShowPopup(false)}
//                       className='px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600'
//                     >
//                       Close
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Applications;

import { useEffect, useState } from "react";
import axiosInstance from "../../config/axios";

const Applications = () => {
  const [applicants, setApplicants] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [showTopup, setShowTopup] = useState(false);
  const [topupAmount, setTopupAmount] = useState("");
  const [employerId, setEmployerId] = useState(null);

  useEffect(() => {
    const init = async () => {
      try {
        const res = await axiosInstance.get("/user/all");
        setApplicants(res.data.users);

        // Get employerId from localStorage
        const userString = localStorage.getItem("user");
        const user = JSON.parse(userString);
        setEmployerId(user?.id);
      } catch (error) {
        console.error(error);
      }
    };
    init();
  }, []);

  const handleViewUser = async (userId) => {
    try {
      const res = await axiosInstance.post("/employee/view-user-profile", {
        employerId,
        userId,
      });

      if (res.data.success) {
        setUserDetails(res.data.user);
        setShowPopup(true);
        setShowTopup(false);
      }
    } catch (error) {
      if (error.response && error.response.status === 402) {
        alert(
          `Insufficient Balance. Please top up at least Rs. ${error.response.data.requiredAmount}`
        );
        setShowTopup(true);
        setSelectedUserId(userId);
      } else {
        console.error(error);
        alert("Error fetching user profile");
      }
    }
  };

  const handleTopup = async () => {
    try {
      if (!topupAmount || Number(topupAmount) <= 0) {
        alert("Please enter a valid amount");
        return;
      }

      const res = await axiosInstance.post("/employee/topup-wallet", {
        employerId,
        amount: Number(topupAmount),
      });

      alert(`Wallet topped up by Rs. ${topupAmount}`);
      setTopupAmount("");
      setShowTopup(false);

      // Retry view after topup
      handleViewUser(selectedUserId);
    } catch (error) {
      console.error(error);
      alert("Top up failed");
    }
  };

  return (
    <div className='p-6 bg-gray-100 min-h-screen'>
      <h1 className='text-3xl font-bold mb-6 text-gray-800'>
        Job Applications
      </h1>

      <div className='overflow-x-auto bg-white shadow rounded-lg'>
        <table className='min-w-full divide-y divide-gray-200'>
          <thead className='bg-blue-50'>
            <tr>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider'>
                Applicant Name
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider'>
                Skill
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider'>
                Actions
              </th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200 text-sm'>
            {applicants.map((applicant) => (
              <tr key={applicant.id} className='hover:bg-gray-50'>
                <td className='px-6 py-4 font-medium text-gray-900'>
                  {applicant.name}
                </td>
                <td className='px-6 py-4 text-gray-700'>
                  {applicant.Skill || "Worker"}
                </td>
                <td className='px-6 py-4'>
                  <button
                    onClick={() =>
                      handleViewUser(applicant._id || applicant.id)
                    }
                    className='px-3 py-1 bg-green-500 text-white text-xs rounded hover:bg-green-600'
                  >
                    View Detail
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showPopup && userDetails && (
        <div className='fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black bg-opacity-50 z-50'>
          <div className='bg-white rounded-lg shadow-lg p-6 w-96'>
            <h2 className='text-lg font-semibold mb-4'>User Details</h2>
            <p>
              <strong>Name:</strong> {userDetails.name}
            </p>
            <p>
              <strong>Email:</strong> {userDetails.email}
            </p>
            <p>
              <strong>Phone:</strong> {userDetails.phone}
            </p>
            {/* Add more details here */}

            <div className='flex justify-end mt-4'>
              <button
                onClick={() => setShowPopup(false)}
                className='px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600'
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {showTopup && (
        <div className='fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black bg-opacity-50 z-50'>
          <div className='bg-white rounded-lg shadow-lg p-6 w-96'>
            <h2 className='text-lg font-semibold mb-4'>Top Up Wallet</h2>
            <label className='block mb-2 text-sm font-medium'>Amount:</label>
            <input
              type='number'
              value={topupAmount}
              onChange={(e) => setTopupAmount(e.target.value)}
              className='w-full border border-gray-300 rounded px-3 py-2 mb-4'
            />
            <button
              onClick={handleTopup}
              className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'
            >
              Top Up & Retry
            </button>

            <div className='flex justify-end mt-4'>
              <button
                onClick={() => setShowTopup(false)}
                className='px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600'
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Applications;
