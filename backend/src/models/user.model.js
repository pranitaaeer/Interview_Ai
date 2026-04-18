const mongoose=require("mongoose")
const bcrypt=require("bcrypt")

const UserSchema= new mongoose.Schema({
    username:{
        type:String,
        required:[true,"username is reuired"],
        unique:true,
        trim:true,
    },
    email:{
        type:String,
        unique:true,
        required:[true,"email is reuired"],
        trim:true,
        lowercase:true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    password:{
        type:String,
        required:[true,"password is reuired"],
        trim:true,
    },
    
},{timestamps:true})

UserSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  const hashedPassword = await bcrypt.hash(this.password, 10);
  this.password = hashedPassword;
});

UserSchema.methods.comparePassword=async function (password) {
    
   return await bcrypt.compare(password,this.password)
}

const UserModel=mongoose.model("User",UserSchema)
module.exports=UserModel