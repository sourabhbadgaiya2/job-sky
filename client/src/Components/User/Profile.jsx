import React, { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "Rahul Sharma",
    email: "rahul.sharma@example.com",
    phone: "+91 9876543210",
    dob: "1995-06-15",
    gender: "Male",
    qualification: "B.Tech",
    skills: ["React", "Node.js", "MongoDB"],
    address: "123, Sector 45, New Delhi, India",
    license: true,
    vehicle: true,
    resume: null,
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setProfile({ ...profile, [name]: checked });
    } else if (type === "file") {
      setProfile({ ...profile, [name]: files[0] });
    } else {
      setProfile({ ...profile, [name]: value });
    }
  };

  return (
    <div className="p-6 mb-8 bg-white shadow-md rounded-lg max-w-4xl mx-auto mt-4">
      <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">
        User Profile
      </h2>

      {/* Profile Image */}
      <div className="flex justify-center mb-6">
        <label className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-blue-500 cursor-pointer hover:opacity-80 transition">
          {profile.image ? (
            <img
              src={URL.createObjectURL(profile.image)}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-sm text-gray-500">
              Upload Image
            </div>
          )}
          <input
            type="file"
            name="image"
            accept="image/*"
            className="absolute inset-0 opacity-0 cursor-pointer"
            onChange={handleChange}
          />
        </label>
      </div>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 font-medium">Full Name</label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={profile.dob}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Gender</label>
          <select
            name="gender"
            value={profile.gender}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          >
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Highest Qualification</label>
          <select
            name="qualification"
            value={profile.qualification}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          >
            <option>B.Tech</option>
            <option>M.Tech</option>
            <option>B.Sc</option>
            <option>MBA</option>
            <option>Other</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block mb-1 font-medium">Skills</label>
          <input
            type="text"
            name="skills"
            value={profile.skills.join(", ")}
            onChange={(e) =>
              setProfile({ ...profile, skills: e.target.value.split(",") })
            }
            placeholder="e.g. React, Node.js, Tailwind CSS"
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            name="vehicle"
            checked={profile.vehicle}
            onChange={handleChange}
          />
          <label className="font-medium">Have Two-Wheeler</label>
        </div>

        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            name="license"
            checked={profile.license}
            onChange={handleChange}
          />
          <label className="font-medium">Have Driving License</label>
        </div>

        <div className="md:col-span-2">
          <label className="block mb-1 font-medium">Full Address</label>
          <textarea
            name="address"
            value={profile.address}
            onChange={handleChange}
            rows={3}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block mb-1 font-medium">Upload Resume (PDF)</label>
          <input
            type="file"
            name="resume"
            accept=".pdf"
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div className="md:col-span-2 text-center mt-4">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
