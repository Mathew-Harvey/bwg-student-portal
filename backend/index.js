const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 4000;
const mongoose = require("mongoose");

const db = mongoose.connect("mongodb://127.0.0.1:27017/bwg", {
    useNewUrlParser: true
});

const connection = mongoose.connection;

connection.once("open", function () {
    console.log("Connection with MongoDB was successful");
});

let Appointment = require("./models/bwg_model")



app.get("/getData", function (req, res) {
    Appointment.find({}, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});


app.use(cors());
app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
});