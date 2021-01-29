const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require('cors')
const mongoose = require("mongoose")
const db = require("./src/models");
const PORT = 3001
const moment = require("moment");

const ObjectId = require("mongoose").Types.ObjectId;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())
app.use(express.json())

//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------
//Connection to one db - BWG
//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------

mongoose
  .connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/BWG",
    {
      useFindAndModify: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("Connected"))
  .catch(() => console.log("Not Connected"));

const connection = mongoose.connection;







//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------

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
  var email = "nurievrita@gmail.com";
  const bodyweightClass = "Bodyweight Class";
  const mobilityClass = "Mobility";
  const caliClass = "Calisthenics";
  const begClass = "Beginner bodyweight strength and mobility";
  //variable function that takes todays date and lists out dates as a string for previous 7 days
  
  var date1 = moment().format("LL");
  var date2 = moment().subtract(1, "days").format("LL");
  var date3 = moment().subtract(2, "days").format("LL");
  var date4 = moment().subtract(3, "days").format("LL");
  var date5 = moment().subtract(4, "days").format("LL");
  var date6 = moment().subtract(5, "days").format("LL");
  var date7 = moment().subtract(6, "days").format("LL");
  
  //================================
  //Promise functions to return values
  //================================
  
  function totalBodyweightClass() {
    Promise.all(
      [db.Appointment.countDocuments({ email:email, type: bodyweightClass })],
    ).then(([result]) => {
      console.log(result);
    });
  }
  function totalMobilityClass() {
    Promise.all(
      [db.Appointment.countDocuments({ email:email, type: mobilityClass })],
    ).then(([result]) => {
      console.log(result);
    });
  }
  function totalCaliClass() {
    Promise.all(
      [db.Appointment.countDocuments({ email:email, type: caliClass })],
    ).then(([result]) => {
      console.log(result);
    });
  }
  function totalBegClass() {
    Promise.all(
      [db.Appointment.countDocuments({ email:email, type: begClass })],
    ).then(([result]) => {
      console.log(result);
    });
  }
  function weekTotalClass() {
    Promise.all(
      [db.Appointment.countDocuments({ email:email, date: { $in: [date1, date2, date3, date4, date5, date6, date7] } })],
    ).then(([result]) => {
      console.log(result);
    });
  }
  function totalClass() {
    Promise.all(
      [db.Appointment.countDocuments({ email:email })],
    ).then(([result]) => {
      console.log(result);
    });
  }
  totalBodyweightClass()
  totalMobilityClass()
  totalCaliClass()
  totalBegClass()
  weekTotalClass()
  totalClass()
  //================================
  // Routes to return values
  //================================
  app.get("/totalBodyweightClass", (req, res) => {
    db.Appointment.countDocuments({email:email, type:bodyweightClass}, (err, result) => {
      if (err) {
        res.sendStatus(err);
      } else {
        res.json(result);
      }
    });
  });
  app.get("/totalMobilityClass", (req, res) => {
    db.Appointment.countDocuments({email:email, type:mobilityClass}, (err, result) => {
      if (err) {
        res.sendStatus(err);
      } else {
        res.json(result);
      }
    });
  });
  app.get("/totalCaliClass", (req, res) => {
    db.Appointment.countDocuments({email:email, type:caliClass}, (err, result) => {
      if (err) {
        res.sendStatus(err);
      } else {
        res.json(result);
      }
    });
  });
  app.get("/totalBegClass", (req, res) => {
    db.Appointment.countDocuments({email:email, type:begClass}, (err, result) => {
      if (err) {
        res.sendStatus(err);
      } else {
        res.json(result);
      }
    });
  });
  app.get("/weekTotalClass", (req, res) => {
    db.Appointment.countDocuments({email:email, date: { $in: [date1, date2, date3, date4, date5, date6, date7] }}, (err, result) => {
      if (err) {
        res.sendStatus(err);
      } else {
        res.json(result);
      }
    });
  });
  app.get("/totalClass", (req, res) => {
    db.Appointment.countDocuments({email:email}, (err, result) => {
      if (err) {
        res.sendStatus(err);
      } else {
        res.json(result);
      }
    });
  });
  