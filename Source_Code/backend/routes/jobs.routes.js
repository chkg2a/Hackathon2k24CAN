import express from "express"
import { addjob, getjob } from "../controllers/jobs.controller.js"

const router = express.Router()

router.post("/add", addjob)
router.get("/getjobs",getjob)
router.get("/delete",getjob)

export default router

