import React from 'react'
import Job from "../Components/Job"
import Filter from "../Components/Filter"

const Jobs = () => {
  return (
    <>
    <div className="flex justify-center items-center">
      <Filter />
      <Job/>
    </div>
    </>
  )
}

export default Jobs
