const app=require("./src/app")
const DBConnect = require("./src/config/DBConnect")

const dotenv=require("dotenv")
dotenv.config()

DBConnect()
app.listen(3000,()=>console.log("app is running on port:3000"))