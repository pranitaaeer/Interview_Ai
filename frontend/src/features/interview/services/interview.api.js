import axios from "axios";

const api=axios.create({
    baseURL:"http://localhost:3000",
    withCredentials:true
})



export const generateViewReport = async ({ resume, selfDescription, jobDescription }) => {
    try {
        const formData = new FormData()

        if (resume) {
            formData.append("resume", resume) // must match multer field
        }

        formData.append("selfDescription", selfDescription || "")
        formData.append("jobDescription", jobDescription || "")

        const response = await api.post(
            "/api/ai/view_report",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }
        )

        return response.data

    } catch (error) {
        console.log("Error:", error.response?.data || error.message)
    }
}

export const getInterviewReport=async (reportId) => {
    try {
        const response=await api.get(`/api/ai/get_report/${reportId}`)
        return response.data
    } catch (error) {
        console.log(error);
    }
}

export const getAllInterviewReport=async () => {
    try {
        const response=await api.get("/api/ai/get_all")
        return response.data
    } catch (error) {
        console.log(error);
    }
}

export const generateInterviewReportPDF = async (reportId) => {
    const response = await api.post(`/api/ai/generate/${reportId}`)
    return response.data   // MUST be correct
}
