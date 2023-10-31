import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connect.js";
import router from "./routers/book.js";


const app = express();
const port = process.env.PORT || 8800;
dotenv.config();

app.use(express.json());
app.use(router);


const startServer = async () => {
    try {
        connectDB(process.env.DB_URL);
        app.listen(port, () => console.log(`Server started on port ${port}`));
    } catch (error) {
        console.log(error);
    }
};

startServer();
