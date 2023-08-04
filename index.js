const express = require("express");
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const authRoutes = require('./routes/auth')
const userRoutes = require("./routes/users");
const postRoutes = require("./routes/posts");
const categoryRoutes = require("./routes/categories");
const multer = require("multer");
const app = express();
dotenv.config();

mongoose
  .connect("mongodb://127.0.0.1:27017/blog-api")
  .then(() => console.log("Database Connected!"))
  .catch((err) => {
    console.log(err);
  });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, "hola.jpeg");
  },
});

const upload = multer({ storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/categories", categoryRoutes);

app.listen("5000",()=>{
    console.log("backend is running")
})