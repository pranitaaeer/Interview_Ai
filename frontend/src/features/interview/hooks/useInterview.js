
import { useContext,useEffect } from "react"
import { InterviewContext } from "../interview.context"
import { generateInterviewReportPDF, generateViewReport,getAllInterviewReport,getInterviewReport } from "../services/interview.api"
import {useParams} from "react-router"
export const useInterview=() => {
    const context=useContext(InterviewContext)
    const {reportId}=useParams()
    const {loading,setLoading,report,setReport,reports,setReports}=context

    const handleViewReport=async ({resume,selfDescription,jobDescription}) => {
        let response=null
        try {
            setLoading(true)
            response=await generateViewReport({resume,selfDescription,jobDescription})
            console.log("response:",response);
            setReport(response.interviewReport)
        } catch (error) {
            
        }finally{
            setLoading(false)
        }
        return response.interviewReport
    }

    const handleInterviewReport=async (reportId) => {
        let response=null
        try {
            setLoading(true)
             response=await getInterviewReport(reportId)
            setReport(response.ExistedReport)
        } catch (error) {
            
        }finally{
            setLoading(false)
        }
        return response.ExistedReport
    }
    const getAllReport=async () => {
        let response=null
        try {
            setLoading(true)
             response=await getAllInterviewReport()
            setReports(response.Reports)
        } catch (error) {
            
        }finally{
            setLoading(false)
        }
        return response.Reports
    }
    const getResumePdf = async (reportId) => {
    try {
        setLoading(true)

        const response = await generateInterviewReportPDF(reportId)

        // ❌ DO NOT setReport

        console.log("PDF response:", response)

        const html = response.html

        const blob = new Blob([html], { type: "text/html" })
        const url = window.URL.createObjectURL(blob)

        const a = document.createElement("a")
        a.href = url
        a.download = "resume.html"
        a.click()

        window.URL.revokeObjectURL(url)

    } catch (error) {
        console.log(error)
    } finally {
        setLoading(false)
    }
}
    useEffect(() => {
        if (reportId) {
            handleInterviewReport(reportId)
        } else {
            getAllReport()
        }
    }, [ reportId ])


  return {handleViewReport,handleInterviewReport,getAllReport,getResumePdf,loading,report,reports}
}

