import dotenv from "dotenv";
import express from "express";
import connectdb from "./db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

connectdb();

app.get("/", (req, res) => {
  res.send("hi");
  console.log(res.body);
});

app.listen(PORT, () => {
  console.log(`Server is listening to ${PORT}`);
});
