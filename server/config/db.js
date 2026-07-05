import mongoose from "mongoose";

const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGODB);
        console.log("DB Connected");
    }catch(error){
        console.error(error);
    }
};

export default connectDB;