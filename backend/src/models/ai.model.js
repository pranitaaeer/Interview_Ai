
const mongoose = require("mongoose")

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
        enum: ["low", "medium", "high"],   
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
        type: [String],   
        required: [true, "tasks is required"]
    }
}, { timestamps: true })



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