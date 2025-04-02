import Book from "../models/bookmodel.js";

const getBooks = async (req, res) => {
  try {
    const book = await Book.find();
    res.status(200).json(book);
  } catch (err) {
    console.log("Error", err);
    res.status(500).json(err);
  }
};

export default getBooks;
