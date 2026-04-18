const express=require("express")
const auth=require("../middlewares/auth.middleware")
const upload=require("../middlewares/multer.middleware")
const { generateViewReportController, getInterviewReportController, getAllInterviewReportController, generateInterviewReportPDFController } = require("../controllers/interview.controllers")
const router=express.Router()

router.post("/view_report",upload.single("resume"),auth,generateViewReportController)
router.get(`/get_report/:reportId`,auth,getInterviewReportController)
router.get("/get_all",auth,getAllInterviewReportController)
router.post(`/generate/:reportId`,auth,generateInterviewReportPDFController)

module.exports=router