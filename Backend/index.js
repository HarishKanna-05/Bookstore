import dotenv from "dotenv";
import express from "express";
import connectdb from "./db.js";
import bookRouter from "./routes/bookroutes.js";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

app.use(express.json());

connectdb();

app.use("/book", bookRouter);
app.listen(PORT, () => {
  console.log(`Server is listening to ${PORT}`);
});
