import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddJob = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData(
      {
        ...formData,
        [e.target.id]: e.target.value,
      },
    );
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/job/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setError(data.message);
        setLoading(false);
        return;
      }
      setLoading(false);
      setError(null);
      {
        !error ? "success" : "failed";
      }
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
        <input
          type="text"
          placeholder="Job Title"
          className="border p-3 rounded-lg"
          id="title"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Job Description"
          className="border p-3 rounded-lg"
          id="description"
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Mininum Experience in Years"
          className="border p-3 rounded-lg"
          id="experience"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Company Name"
          className="border p-3 rounded-lg"
          id="companyName"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Job Duration"
          className="border p-3 rounded-lg"
          id="jobDuration"
          onChange={handleChange}
        />
        <div className="flex justify-evenly ">
          <label type="text" for="remote">Remote</label>
          <input
            type="checkbox"
            placeholder="remote"
            className="border p-3 rounded-lg"
            id="remote"
            onChange={handleChange}
          />
          <label type="text" for="intern">Internship</label>
          <input
            type="checkbox"
            placeholder="intern"
            className="border p-3 rounded-lg"
            id="intern"
            value="false"
            onChange={handleChange}
          />
        </div>
        <input
          type="number"
          placeholder="favs"
          className="border p-3 rounded-lg"
          id="favs"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading..." : "Add Job"}
        </button>
      </form>
    </div>
  );
};

export default AddJob;
