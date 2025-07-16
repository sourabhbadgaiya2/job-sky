import React from "react";

const PostJob = () => {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-semibold mb-4">Post a New Job</h1>
      <form className="grid gap-4">
        <input type="text" placeholder="Job Title" className="border p-2 rounded" />
        <input type="text" placeholder="Location" className="border p-2 rounded" />
        <textarea placeholder="Job Description" className="border p-2 rounded"></textarea>
        <input type="number" placeholder="Salary" className="border p-2 rounded" />
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Post Job</button>
      </form>
    </div>
  );
};

export default PostJob;
