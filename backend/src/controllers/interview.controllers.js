
const pdfParse =require("pdf-parse")
const { generateInterviewReport, generateResumePdf } = require("../service/ai.services")
const AIModel = require("../models/ai.model")



const generateViewReportController=async (req,res) => {
    try {
        console.log("file data",req.file);
        const resumeContent=await (new pdfParse.PDFParse(Uint8Array.from(req.file.buffer))).getText()
        
        const {selfDescription,jobDescription}=req.body
        console.log("data:",selfDescription,jobDescription);
       const report=await generateInterviewReport({resume:resumeContent.text,selfDescription,jobDescription})
     console.log("report:",report);
       const interviewReport=await AIModel.create({
          jobDescription,
          resume:resumeContent.text,
          selfDescription,
          user:req.user._id,
         ...report,
        
        })
        await interviewReport.save()
        return res.status(201).json({message:"report generated successfully",interviewReport})

    } catch (error) {
        console.log("err in generating report",error.message);
        return res.status(500).json({message:"error in report genaration",err:error.message})
    }
}

const getInterviewReportController=async (req,res) => {
    try {
        
        const {reportId}=req.params

        const ExistedReport = await AIModel.findOne({_id:reportId,user:req.user._id});
        // const ExistedReport=await AIModel.findById(reportId)
        if(!ExistedReport){
        return res.status(404).json({message:"report not exists"})
        }
        return res.status(200).json({message:"report fetch successfully",ExistedReport})

    } catch (error) {
        console.log("err in getting report");
        return res.status(500).json({message:"err in getting report",err:error})
    }
}

const getAllInterviewReportController=async (req,res) => {
    try {
        const userId=req.user._id
        const Reports=await AIModel.find({user:userId})
        .sort({createdAt:-1})
        .select("-resume -selfDescription -jobDescription -__v -technicalQuestions -behavioralQuestions -skillGaps -preparationPlan")
        console.log("report",Reports);
        if(!Reports){
        return res.status(404).json({message:"reports not exists"})
        }
        return res.status(200).json({message:"report fetch successfully",Reports})

    } catch (error) {
        console.log("err in getting reports");
        return res.status(500).json({message:"err in getting reports",err:error})
    }
}

const generateInterviewReportPDFController = async (req, res) => {
    try {
        const { reportId } = req.params

        const report = await AIModel.findById(reportId)

        if (!report) {
            return res.status(404).json({ message: "report not exists" })
        }

        const pdfBuffer = await generateResumePdf({
            resume: report.resume,
            selfDescription: report.selfDescription,
            jobDescription: report.jobDescription
        })

        res.setHeader("Content-Type", "application/pdf")
        res.setHeader(
            "Content-Disposition",
            `attachment; filename=resume_${reportId}.pdf`
        )

        return res.end(pdfBuffer)

    } catch (error) {
        return res.status(500).json({
            message: "PDF generation failed",
            error: error.message
        })
    }
}
module.exports={
    generateViewReportController,
    getInterviewReportController,
    getAllInterviewReportController,
    generateInterviewReportPDFController
}
