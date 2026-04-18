const express=require("express")
const { signup, login, myInfo, logout } = require("../controllers/user.controllers")
const auth = require("../middlewares/auth.middleware")

const router=express.Router()

router.post("/signup",signup)
router.post("/login",login)
router.get("/me",auth,myInfo)
router.get("/logout",logout)



module.exports=router