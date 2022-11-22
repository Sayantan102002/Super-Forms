const express = require("express");

const bodyParser = require("body-parser");
const cors = require("cors");
const http = require("http");
const mongoose = require("mongoose");
const fs = require("fs");
const app = express();
const keys = require("./keys/keys");
require("dotenv").config();

const port = process.env.port || 3000;
mongoose.Promise = global.Promise;

mongoose.connect(keys.mongoURI, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log("Db connected");
    });
app.use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json())
    .use(cors({ "Access-Control-Allow-Origin": "*" }));