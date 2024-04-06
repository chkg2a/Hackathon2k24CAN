import React from "react";
import job_1 from "../assets/images/job-1.jpg"
import job_2 from "../assets/images/job-2.jpeg"
import job_3 from "../assets/images/job-3.jpg"


const JobTypes = () => {
  return (
    <section className="flex flex-col justify-center items-center">
      <div>
        <p className="text-center text-slate-700">Find your perfect job</p>
        <h1 className="text-4xl font-bold text-center">
          Types of Part-Time Jobs Available
        </h1>
        <p className="text-center text-slate-500 w-50 md:w-[50rem]">
          Discover a wide range of part-time job options that are perfect for
          students seeking flexible work hours and the ability to work from
          home. Sign up now to start browsing and applying for jobs.
        </p>
      </div>
      <div className="flex flex-1 mt-20">
        <div>
          <img className="w-[500px]" src={job_1}/>
          <h2 className="text-3xl font-bold text-center">
            Flexible Part-Time Jobs
          </h2>
          <p>
            Explore a variety of part-time job opportunities through our
            platform.
          </p>
        </div>
        <div>
          <img className="w-[500px]" src={job_2}/>
          <h2 className="text-3xl font-bold text-center">
            Remote Part-Time Jobs
          </h2>
          <p>Find part-time jobs that fit your schedule and lifestyle.</p>
        </div>
        <div>
          <img className="w-[500px]" src={job_3}/>
          <h2 className="text-3xl font-bold text-center">
            Earn Extra Income with Part-Time Jobs
          </h2>
          <p>
            Work from the comfort of your own home with our remote part-time job
            opportunities.
          </p>
        </div>
      </div>
      <div className="box-content mb-20 mt-20">
        <button className="border-2 bg-black text-white p-3 w-28">
          Sign Up
        </button>
        <button className="outline-black border-black border-2 p-3 w-28">
          Learn more
        </button>
      </div>
    </section>
  );
};

export default JobTypes;
