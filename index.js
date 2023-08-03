const express = require("express");
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const authRoutes = require('./routes/auth')
const userRoutes = require("./routes/users");
const postRoutes = require("./routes/posts");
const categoryRoutes = require("./routes/categories");
const app = express();
dotenv.config();

mongoose
  .connect("mongodb://127.0.0.1:27017/blog-api")
  .then(() => console.log("Database Connected!"))
  .catch((err) => {
    console.log(err);
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