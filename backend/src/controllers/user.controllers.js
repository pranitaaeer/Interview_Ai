const BlacklistModel = require("../models/blacklist.model");
const UserModel = require("../models/user.model");
const jwt=require("jsonwebtoken")

const signup=async (req,res) => {
    try {
        
        const {username,email,password}=req.body

        if([username,email,password].some((elem)=>!elem)){
        return res.status(404).json({message:"all fields are required",})

        }
       
        const user=await UserModel.create({
            username,
            email,
            password
        })
        await user.save()
        const token = await jwt.sign({_id: user._id}, process.env.JWT_SECRET, {expiresIn: "15d"});

        res.cookie("token", token, {
            httpOnly: true,
            secure: false, 
            sameSite: "Lax",
            maxAge: 15 * 24 * 60 * 60 * 1000 
        });
        return res.status(201).json({message:"user signup successfully",user:{username,email,_id:user._id},token})

    } catch (error) {
        console.log("err in signup user",error);
        return res.status(500).json({message:"err in signup user",err:error})
    }
}

const login=async (req,res) => {
    try {
        const {credentials,password}=req.body
        const ExistedUser=await UserModel.findOne({
            $or:[{username:credentials},{email:credentials}]
        })
        if(!ExistedUser){
            return res.status(401).json({message:"please register first"})
        }
        const isCorrectPassword= await ExistedUser.comparePassword(password)
        if(!isCorrectPassword){
            return res.status(400).json({message:"invalid credentials"})
        }
       const token = await jwt.sign({_id: ExistedUser._id}, process.env.JWT_SECRET, {expiresIn: "15d"});

        res.cookie("token", token, {
            httpOnly: true,
            secure: false, 
            sameSite: "Lax",
            maxAge: 15 * 24 * 60 * 60 * 1000 
        });
        return res.status(201).json({message:"user login successfully",
            user:{
                username:ExistedUser.username,
                email:ExistedUser.email,
                _id:ExistedUser._id}
            ,token})
    } catch (error) {
      console.log("err in login user",error);
        return res.status(500).json({message:"err in login user",err:error})
    }

}

const myInfo=async (req,res) => {
    try {
        const user=req.user
        return res.status(200).json({message:"user fetched successfully",user})

    } catch (error) {
        console.log("err in myinfo",error);
        return res.status(500).json({message:"err in myinfo",err:error})
    }
}

const logout=async (req,res) => {
    try {
        
       
        const token=req.cookies.token || req.headers.authorization.split(" ")[1]

        if(!token){
            return res.status(401).json({message:"invalid token"})
        }
       const BlacklistedUser= await BlacklistModel.create({token})
       await BlacklistedUser.save()
        res.clearCookie("token")
        return res.status(200).json({message:"user logout successsfully"})

    } catch (error) {
        console.log("err in logout user",error);
        return res.status(500).json({message:"err in logout user",err:error})
    }
}

module.exports={signup,login,myInfo,logout}
