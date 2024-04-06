import Jobs from "../models/jobs.models.js";
import {errorHandler} from "../utils/error.js"

export const addjob = async (req, res, next) => {
  const { title, description, experience, companyName, jobDuration, remote,intern, favs } = req.body;
  const newJob = new Jobs({ title, description, experience, companyName, jobDuration, remote,intern, favs });
  try {
    await newJob.save();
    res.status(201).json({
      message: "Success",
    });
  } catch (err) {
    console.log(err)
    next(err)
  }
};

export const getjob = async (req, res, next) => {
  try{
    const jobListing = await Jobs.find({})
    res.status(200).json(jobListing)
  }catch (error){
    next(error)
  }
}
