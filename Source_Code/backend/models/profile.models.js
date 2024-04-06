import mongoose from "mongoose"

const profileSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: String,
    required: true,
  },
  skill: {
    type: String,
    required: true,
  },
}, {timestamps: true})

const Profile = mongoose.model("Profile",profileSchema)

export default Profile
