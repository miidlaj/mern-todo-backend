import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

export const Connection = () => {
    const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@mern-todo.pyzybdj.mongodb.net/?retryWrites=true&w=majority`;

    mongoose.connect(MONGODB_URI, {useNewUrlParser: true});
    mongoose.connection.on('connected', ()=>{
        console.log("Database connected successfully");
    });

    mongoose.connection.on('disconnect', ()=>{
        console.log("Database disconnected");
    })

    mongoose.connection.on('error', ()=>{
        console.log("Error while connecting the Database");
    })
}


export default Connection;