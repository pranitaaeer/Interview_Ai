const pdfParse = require("pdf-parse")
const { generateInterviewReport, generateResumePdf } = require("../services/ai.service")
const interviewReportModel = require("../models/interviewReport.model")




/**
 * @description Controller to generate interview report based on user self description, resume and job description.
 */
async function generateInterViewReportController(req, res) {

    
    try {
        let resumeText = "";

        // 1. Safe check: ensure req.file and buffer exist and are NOT empty
        if (req.file && req.file.buffer && req.file.buffer.length > 0) {
            try {
                // Buffer parser call - simple and safe syntax
                const pdfData = await pdfParse(req.file.buffer);
                resumeText = pdfData.text || "";
            } catch (pdfErr) {
                console.error("PDF Parsing failed:", pdfErr.message);
                return res.status(400).json({
                    message: "error in report generation",
                    err: "Invalid or unreadable PDF file. Please upload a clear text PDF."
                });
            }
        }

        const { selfDescription, jobDescription } = req.body;

        // 2. Minimum input check
        if (!resumeText && !selfDescription) {
            return res.status(400).json({
                message: "error in report generation",
                err: "Please provide either a valid Resume PDF or a Self Description."
            });
        }

        // 3. AI Service Call
        const report = await generateInterviewReport({
            resume: resumeText,
            selfDescription,
            jobDescription
        });

        // 4. Save to Database
        const interviewReport = await interviewReportModel.create({
            jobDescription,
            resume: resumeText,
            selfDescription,
            user: req.user._id,
            ...report,
        });

        return res.status(201).json({
            message: "report generated successfully",
            interviewReport
        });

    } catch (error) {
        console.error("err in generating report:", error.message);
        return res.status(500).json({
            message: "error in report genaration",
            err: error.message
        });
    }

}

/**
 * @description Controller to get interview report by interviewId.
 */
async function getInterviewReportByIdController(req, res) {

    const { interviewId } = req.params

    const interviewReport = await interviewReportModel.findOne({ _id: interviewId, user: req.user.id })

    if (!interviewReport) {
        return res.status(404).json({
            message: "Interview report not found."
        })
    }

    res.status(200).json({
        message: "Interview report fetched successfully.",
        interviewReport
    })
}


/** 
 * @description Controller to get all interview reports of logged in user.
 */
async function getAllInterviewReportsController(req, res) {
    const interviewReports = await interviewReportModel.find({ user: req.user.id }).sort({ createdAt: -1 }).select("-resume -selfDescription -jobDescription -__v -technicalQuestions -behavioralQuestions -skillGaps -preparationPlan")

    res.status(200).json({
        message: "Interview reports fetched successfully.",
        interviewReports
    })
}


/**
 * @description Controller to generate resume PDF based on user self description, resume and job description.
 */
async function generateResumePdfController(req, res) {
    const { interviewReportId } = req.params

    const interviewReport = await interviewReportModel.findById(interviewReportId)

    if (!interviewReport) {
        return res.status(404).json({
            message: "Interview report not found."
        })
    }

    const { resume, jobDescription, selfDescription } = interviewReport

    const pdfBuffer = await generateResumePdf({ resume, jobDescription, selfDescription })

    res.set({
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename=resume_${interviewReportId}.pdf`
    })

    res.send(pdfBuffer)
}

module.exports = { generateInterViewReportController, getInterviewReportByIdController, getAllInterviewReportsController, generateResumePdfController }