const express = require("express");
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const authRoutes = require('./routes/auth')
const app = express()
dotenv.config()

mongoose.connect(process.env.DB_URL)
  .then(() => console.log('Database Connected!'))
  .catch((err)=>{
    console.log(err)
  });

  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use("/api/auth", authRoutes)

app.listen("5000",()=>{
    console.log("backend is running")
})