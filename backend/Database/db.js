// const express = require('express');
// const mongoose = require('mongoose')

// const app = express()

// mongoose.connect('mongodb://localhost:27017/test')

// app.listen(3000, () =>{
//     console.log("server running")
// });

require("dotenv").config();
const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/test";

const connectToMongo = () => {
  mongoose
    .connect(mongoURI, { useNewUrlParser: true })
    .then(() => {
      console.log("Connected to MongoDB Successfully");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB", error);
    });
};

module.exports = connectToMongo;
