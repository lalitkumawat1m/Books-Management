import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    summary: { type: String, required: true },
    price: { type: Number, required: true },
    id: { type: Number, required: true ,unique: true},
    category: { type: String, required: true },
});

//we are creating new collection
export default mongoose.model("Book", BookSchema)