import dotenv from "dotenv";
import express from "express";
import connectdb from "./db.js";
import bookRouter from "./routes/bookroutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

connectdb();

app.use("/book", bookRouter);
app.listen(PORT, () => {
  console.log(`Server is listening to ${PORT}`);
});
