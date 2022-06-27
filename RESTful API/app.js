const express = require('express');
const mongoose = require('mongoose');
const members = require("./Controller/memberController");
const login = require("./Controller/loginController");
const shop = require("./Controller/shopController");

// Access of the environment variables
require("dotenv").config();

// Connection String to the database
const conn = process.env.DATABASE_URL;
const port = 8000;

// Connection to the database
mongoose.connect(conn);
const database = mongoose.connection;

// Checking the connection to the database
database.on("error", (error)=>{
    console.log(error);
});
database.once("connected", ()=>{
    console.log("Succesfully connected");
});

const app = express();
app.use(express.json());
app.use("/members", members);
app.use("/login", login);
app.use("/shop", shop);


app.listen(port, ()=>{
    console.log("server running at http://localhost:" + port);
});

