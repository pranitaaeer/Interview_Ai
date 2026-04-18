const mongoose =require("mongoose")


const DBConnect=async () => {
    try {
        const db= await mongoose.connect(`${process.env.MONGO_URI}`)
        console.log(`Database connect successfully on port:${db.connection.host}`)
    } catch (error) {
        console.log("database connection err",error);
        process.exit()
    }
}

module.exports=DBConnect

