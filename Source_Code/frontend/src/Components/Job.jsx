import React, { useState, useEffect } from "react";

const Job = () => {
  const [jobListing, setJobListing] = useState([])
  const handleJobListing = async () => {
    try {
      const res = await fetch('/api/job/getjobs')
      const data = await res.json()
      setJobListing(data)
    } catch (error) {
      next(error)
    }
  }

  useEffect(()=>{
    handleJobListing()
  })

  return (
      <>   
        <div className="flex flex-col"> 
        {jobListing.map((listing) => (
          <section className="box-border rounded-lg bg-white mt-5 flex flex-col p-4 w-[50rem] max-h-40">
            <h1 className="text-3xl font-bold">{listing.title}</h1>
            <div className="flex">
              <p className="">{listing.companyName} <span className="font-semibold">Job:</span> <span>{listing.remote ? "Remote" : "On-Site"}</span></p>
              <p className="">{listing.location}</p>
              <p className="">{listing.duration}</p>
            </div>
            <p className="text-slate-500">{listing.description}</p>
            <p className="">{listing.cratedAt}</p>
          </section>
        ))}
      </div>
      </>
  );
};

export default Job;
