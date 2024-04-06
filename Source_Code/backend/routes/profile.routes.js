import express from "express"
import { editProfile, getProfile } from "../controllers/jobs.controller.js"

const router = express.Router()

router.post("/edit", addjob)
router.get("/getprofile",getjob)

export default router

