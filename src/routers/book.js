import express from "express";
import Book from "../models/Book.js";
const router = express.Router();



//creating book
router.post("/books", async (req, res) => {
    const addingBookRecord = new Book(req.body);

    try {
        const savedBook = await addingBookRecord.save();
        res.status(201).json(savedBook);
    } catch (err) {
        res.status(400).send(err);
    }
});

//get all book
router.get("/books", async (req, res) => {
    try {
        const getBooks = await Book.find({}).sort({"id":1});
        res.send(getBooks);
    } catch (err) {
        res.status(400).send(err);
    }
});

//get specific book by id
router.get("/books/:id", async (req, res) => {
    try {
        const getBook = await Book.findById(req.params.id);
        res.send(getBook);
    } catch (err) {
        res.status(400).send(err);
    }
});

//update book

router.patch("/books/:id", async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedBook);
    } catch (err) {
        res.status(500).send(err);
    }
});


//delete book
router.delete("/books/:id", async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedBook);
    } catch (err) {
        res.status(400).send(err);
    }
});

export default router;