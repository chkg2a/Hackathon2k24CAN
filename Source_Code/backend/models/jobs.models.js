import mongoose, { Schema } from "mongoose";

const jobListings = new Schema({
  title: {
    type: String,
    required: true,
  }, 
  experience:  {
    type: Number,
    required: true,
  },
  companyName:  {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  remote:  {
    type: String,
    required: true,
  },
  intern:  {
    type: String,
    required: true,
  },
  favs:  {
    type: Number,
    required: true,
  },
}, {timestamps: true});

const Jobs = mongoose.model("Jobs", jobListings);

export default Jobs;
