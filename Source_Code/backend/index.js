import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import userRouter from "./routes/user.routes.js"
import authRouter from "./routes/auth.routes.js"
import jobRouter from "./routes/jobs.routes.js"
import profileRouter from "./routes/profile.routes.js"
import cors from "cors"
import "dotenv/config.js";
const app = express()
const PORT = process.env.PORT || 3000

// app.use(cors)
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use("/api/user", userRouter)
app.use("/api/auth", authRouter)
app.use("/api/job", jobRouter)
app.use("/api/profile", profileRouter)
app.use((err,req,res,next) => {
  const statusCode = err.statusCode || 500
  const message = err.message || "Internal server error"
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  })
})

const { Schema } = mongoose;

mongoose.connect(process.env.MONGODB_URL).then( () => {
  console.log('Connected to MongoDB')
  }).catch((err)=>{
    console.log(err)
  })

app.get('/', (req, res) => {
  res.json({
    message: "hello world"
  })
  console.log(req.body)
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
