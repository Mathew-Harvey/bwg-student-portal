const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const PORT = 4000;
const mongoose = require("mongoose");
const db = require("../backend/models");
const moment = require("moment");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose
  .connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/BWG_Appointments",
    {
      useFindAndModify: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("Connected"))
  .catch(() => console.log("Not Connected"));

const connection = mongoose.connection;

connection.once("open", function () {
  console.log("Connection with MongoDB was successful");
  // app.use(cors());
  app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
  });
});

app.get("/getData", (req, res) => {
  db.Appointment.find({}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

//all the appoints that bron has done?

//WILL BE USER INPUT
var firstName = "Nuri";
var classType = "Bodyweight Class";

//variable function that takes todays date and lists out dates as a string for previous 7 days

var date1 = moment().format("LL");
var date2 = moment().subtract(1, "days").format("LL");
var date3 = moment().subtract(2, "days").format("LL");
var date4 = moment().subtract(3, "days").format("LL");
var date5 = moment().subtract(4, "days").format("LL");
var date6 = moment().subtract(5, "days").format("LL");
var date7 = moment().subtract(6, "days").format("LL");

//================================

app.get("/firstName", (req, res) => {
  db.Appointment.find({ firstName: firstName }, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

//how many bodywieght classes has bron done?

app.get("/numberofclasses", (req, res) => {
  db.Appointment.find(
    { firstName: firstName, type: classType },
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
    }
  );
});

//ALl  Bodyweight Classes Nuri atteneded last week 

app.get("/date", (req, res) => {
  db.Appointment.count(
    { firstName: firstName, type: classType, date: { $in: [date1, date2, date3, date4, date5, date6, date7] } },
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
    }
  );
});

//ALl   Classes Nuri atteneded last week 

app.get("/date1", (req, res) => {
  db.Appointment.count(
    { firstName: firstName,  date: { $in: [date1, date2, date3, date4, date5, date6, date7] } },
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
    }
  );
})

//how many classes have i done? of what type

