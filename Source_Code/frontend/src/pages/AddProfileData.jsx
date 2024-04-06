import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
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
      const res = await fetch("/api/profile/edit", {
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
      setError(null)
      navigate('/signin')
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-center font-semibold text-3xl my-7">SignUp</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
        <input
          type="text"
          placeholder="Full Name"
          className="border p-3 rounded-lg"
          id="fullName"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="experience"
          className="border p-3 rounded-lg"
          id="experience"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="age"
          className="border p-3 rounded-lg"
          id="age"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="skill"
          className="border p-3 rounded-lg"
          id="skill"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading..." : "Update"}
        </button>
      </form>
      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  );
};

export default Signup;
