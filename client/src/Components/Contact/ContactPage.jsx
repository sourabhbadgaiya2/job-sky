// import React from "react";
// import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";z

// const ContactPage = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-12 px-4 md:px-16">
//       <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
//         <div className="grid grid-cols-1 md:grid-cols-2">
//           {/* Left Side - Contact Info */}
//           <div className="bg-gray-100 p-8 md:p-12">
//             <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
//             <p className="text-gray-600 mb-6">
//               We'd love to hear from you. Please reach out using the details below or send us a message.
//             </p>

//             <div className="space-y-6">
//               <div className="flex items-start space-x-4">
//                 <FaMapMarkerAlt className="text-purple-600 text-xl mt-1" />
//                 <div>
//                   <h4 className="text-lg font-semibold text-gray-800">Address</h4>
//                   <p className="text-gray-600">
//                     123, Swift Tower, Block C, Tech City, Mumbai, India
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-4">
//                 <FaPhoneAlt className="text-purple-600 text-xl mt-1" />
//                 <div>
//                   <h4 className="text-lg font-semibold text-gray-800">Phone</h4>
//                   <p className="text-gray-600">+91 9876543210</p>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-4">
//                 <FaEnvelope className="text-purple-600 text-xl mt-1" />
//                 <div>
//                   <h4 className="text-lg font-semibold text-gray-800">Email</h4>
//                   <p className="text-gray-600">contact@swiftindustries.in</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Side - Contact Form */}
//           <div className="p-8 md:p-12">
//             <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
//             <form className="space-y-5">
//               <div>
//                 <label className="block text-gray-700">Full Name</label>
//                 <input
//                   type="text"
//                   placeholder="Your Name"
//                   required
//                   className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700">Email Address</label>
//                 <input
//                   type="email"
//                   placeholder="you@example.com"
//                   required
//                   className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700">Subject</label>
//                 <input
//                   type="text"
//                   placeholder="Subject of your message"
//                   required
//                   className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700">Message</label>
//                 <textarea
//                   rows="5"
//                   placeholder="Type your message here..."
//                   required
//                   className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-pink-500 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-xl transition transform hover:scale-105 shadow-lg"
//               >
//                 Submit Message
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* Google Map Section */}
//         <div className="mt-8">
//           <iframe
//             title="Google Map"
//             className="w-full h-[350px] rounded-b-3xl"
//             frameBorder="0"
//             style={{ border: 0 }}
//             loading="lazy"
//             allowFullScreen
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609848798!2d72.74110175969065!3d19.08252231720171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63e3f7a0a09%3A0x7cd773d6024a73a3!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1629899995667!5m2!1sen!2sin"
//           ></iframe>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactPage;




import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import axios from "../../config/axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/contacts", formData);
      toast.success("Message sent successfully!", {
        position: "top-right",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message!", {
        position: "top-right",
      });
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-12 px-4 md:px-16">
      <ToastContainer />
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Side - Contact Info */}
          <div className="bg-gray-100 p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-6">
              We'd love to hear from you. Please reach out using the details below or send us a message.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <FaMapMarkerAlt className="text-purple-600 text-xl mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Address</h4>
                  <p className="text-gray-600">
                    123, Swift Tower, Block C, Tech City, Mumbai, India
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FaPhoneAlt className="text-purple-600 text-xl mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Phone</h4>
                  <p className="text-gray-600">+91 9876543210</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FaEnvelope className="text-purple-600 text-xl mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Email</h4>
                  <p className="text-gray-600">contact@swiftindustries.in</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <label className="block text-gray-700">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject of your message"
                  required
                  className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <label className="block text-gray-700">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message here..."
                  required
                  className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-pink-500 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-xl transition transform hover:scale-105 shadow-lg"
              >
                Submit Message
              </button>
            </form>
          </div>
        </div>

        {/* Google Map Section */}
        <div className="mt-8">
          <iframe
            title="Google Map"
            className="w-full h-[350px] rounded-b-3xl"
            frameBorder="0"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609848798!2d72.74110175969065!3d19.08252231720171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63e3f7a0a09%3A0x7cd773d6024a73a3!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1629899995667!5m2!1sen!2sin"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
