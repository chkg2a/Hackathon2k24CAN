import React from "react";
import jobSearch from "../assets/images/jobs-search.jpg"

const Hero = () => {
  return (
    <div className="flex items-center justify-evenly p-20">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold max-w-[28rem]">
          Find Part-Time Jobs Online, Work from Home
        </h1>
        <p className="text-slate-500 max-w-[28rem]">
          Discover flexible in part-time job opportunity that you can work from
          the comfort of your own home. Join our online platform and start
          earning today.
        </p>
        <div className="box-content my-5">
          <button className="border-2 bg-black text-white p-3 w-28">
            Sign Up
          </button>
          <button className="outline-black border-black border-2 p-3 w-28">
            Learn more
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img
          src={jobSearch}
          className="w-[45rem]"
        />
      </div>
    </div>
  );
};

export default Hero;
