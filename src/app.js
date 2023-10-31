import express from "express";
import dotenv from 'dotenv';
import connectDB from "./db/connect.js";

const app = express();
dotenv.config();
const port = process.env.PORT || 3000;


const startServer = async () => {
    try {
        connectDB(process.env.DB_URL);
        app.listen(8800, () => console.log('Server started on port 8800'));
    } catch (error) {
        console.log(error);
    }
};

startServer();