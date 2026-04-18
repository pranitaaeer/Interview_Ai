// const mongoose=require("mongoose")

// const technicalQuestions=new mongoose.Schema({
//     question:{
//         type:String,
//         require:[true,"question is required"]
//     },
//     intention:{
//         type:String,
//         require:[true,"intention is required"]
//     },
//     answer:{
//         type:String,
//         require:[true,"answer is required"]
//     }
    
// },{timestamps:true})

// const behavioralQuestions=new mongoose.Schema({
//     question:{
//         type:String,
//         require:[true,"question is required"]
//     },
//     intention:{
//         type:String,
//         require:[true,"intention is required"]
//     },
//     answer:{
//         type:String,
//         require:[true,"answer is required"]
//     }
    
// },{timestamps:true})

// const skillGaps=new mongoose.Schema({
//     skill:{
//         type:String,
//         require:[true,"skills are required"]
//     },
//     severity:{
//         type:String,
//         enum:["Low","Medium","High"],
//         required: [ true, "Severity is required" ]
//     }
// },{timestamps:true})

// const preparationPlan=new mongoose.Schema({
//     day:{
//         type:Number,
//         required: [ true, "day is required" ]
//     },
//     focus:{
//         type:String,
//         required: [ true, "focus is required" ]
//     },
//     tasks:{
//         type:String,
//         required: [ true, "task is required" ]
//     }
// },{timestamps:true})

// const AISchema=new mongoose.Schema({
//     jobDescription:{
//         type:String,
//         require:[true,"jobDescription is require"]
//     },
//     resume:{
//         type:String
//     },
//     selfDescription:{
//         type:String,
//         require:[true,"selfDescription is require"]
//     },
//     matchScore:{
//         type:Number,
//         min:0,
//         max:100
//     },
//     technicalQuestions:[technicalQuestions],
//     behavioralQuestions:[behavioralQuestions],
//     skillGaps:[skillGaps],
//     preparationPlan:[preparationPlan],
//     user:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:"User"
//     },
//     title:{
//         type:String,
//         require:[true,"jobtitle is required"]
//     }

    
// },{timestamps:true})

// const AIModel=mongoose.model("Ai",AISchema)
// module.exports=AIModel

const mongoose = require("mongoose")

/* -------------------- SUB SCHEMAS -------------------- */

const technicalQuestions = new mongoose.Schema({
    question: {
        type: String,
        required: [true, "question is required"]
    },
    intention: {
        type: String,
        required: [true, "intention is required"]
    },
    answer: {
        type: String,
        required: [true, "answer is required"]
    }
}, { timestamps: true })


const behavioralQuestions = new mongoose.Schema({
    question: {
        type: String,
        required: [true, "question is required"]
    },
    intention: {
        type: String,
        required: [true, "intention is required"]
    },
    answer: {
        type: String,
        required: [true, "answer is required"]
    }
}, { timestamps: true })


const skillGaps = new mongoose.Schema({
    skill: {
        type: String,
        required: [true, "skill is required"]
    },
    severity: {
        type: String,
        enum: ["low", "medium", "high"],   // 🔥 FIXED (lowercase match AI)
        required: [true, "severity is required"]
    }
}, { timestamps: true })


const preparationPlan = new mongoose.Schema({
    day: {
        type: Number,
        required: [true, "day is required"]
    },
    focus: {
        type: String,
        required: [true, "focus is required"]
    },
    tasks: {
        type: [String],   // 🔥 CRITICAL FIX (array of strings)
        required: [true, "tasks is required"]
    }
}, { timestamps: true })


/* -------------------- MAIN SCHEMA -------------------- */

const AISchema = new mongoose.Schema({
    jobDescription: {
        type: String,
        required: [true, "jobDescription is required"]
    },
    resume: {
        type: String
    },
    selfDescription: {
        type: String,
        required: [true, "selfDescription is required"]
    },
    matchScore: {
        type: Number,
        min: 0,
        max: 100
    },

    technicalQuestions: [technicalQuestions],
    behavioralQuestions: [behavioralQuestions],
    skillGaps: [skillGaps],
    preparationPlan: [preparationPlan],

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    title: {
        type: String,
        required: [true, "jobTitle is required"]
    }

}, { timestamps: true })


const AIModel = mongoose.model("Ai", AISchema)

module.exports = AIModel