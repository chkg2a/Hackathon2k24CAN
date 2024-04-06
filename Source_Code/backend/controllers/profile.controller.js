import Profile from "../models/profile.models.js";
import {errorHandler} from "../utils/error.js"

export const editProfile = async (req, res, next) => {
  const { fullname, experience, age, skill} = req.body;
  const profileData = new Jobs({ fullname, experience, age, skill});
  try {
    await profileData.save();
    res.status(201).json({
      message: "Success",
    });
  } catch (err) {
    console.log(err)
    next(err)
  }
};

export const getProfile = async (req, res, next) => {
  try{
    const profileData = await Profile.find({})
    res.status(200).json(profileData)
  }catch (error){
    next(error)
  }
}
