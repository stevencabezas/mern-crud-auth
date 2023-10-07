import mongoose from "mongoose";

export const connectDB = async () => {
    try{
        await mongoose.connect("mongodb+srv://kitososx3:9Yj4QqMNYkKI3hIA@mern-restful.arzkuum.mongodb.net/?retryWrites=true&w=majority");
        console.log(">>> DB is connected");
    }catch(error){
        console.log("Here the error: "+error); 
    }
}

mongoose.set('strictQuery', true);