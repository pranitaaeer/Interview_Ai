const express=require("express")
const cookieparser=require("cookie-parser")
const cors=require("cors")
const app=express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
     origin: "http://localhost:5173",
    credentials: true
}))
app.use(cookieparser())


const userRouter=require("./routes/user.routes")
const interviewRouter=require("./routes/interview.routes")
app.use("/api/auth",userRouter)
app.use("/api/ai",interviewRouter)
module.exports=app