import User from "../models/user.models.js";
import {errorHandler} from "../utils/error.js"
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken"

export const signup = async (req, res, next) => {
  const { fullName, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ fullName, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json({
      message: "Success",
    });
  } catch (err) {
    console.log(err)
    next(err)
  }
};

export const signin = async (req, res, next) => {
  const {email, password} = req.body;
  try{
    const validUser = await User.findOne({email}) 
    if (!validUser) return next(errorHandler(404,'User not found'))
    const validPassword = bcryptjs.compareSync(password,validUser.password)
    if (!validPassword) return next(errorHandler(401,"Wrong credential!"))
    const token = jwt.sign({id: validUser._id}, process.env.JWT_TOKEN)
    const {password: pass, ...rest} = validUser._doc
    res.cookie('access_token', token, { httpOnly: true, expire: new Date(Date.now()+24*60*60)}).status(200).json(rest)
  }catch (error){
    next(error)
  }
}

