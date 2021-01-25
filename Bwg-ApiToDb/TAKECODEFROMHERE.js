//this is not needed now, we are copying the api to a data base then crud to react app to make pretty



"use strict";

// Modules:
var AcuityScheduling = require("acuityscheduling");
var express = require("express");

// Create an instance of Acuity for accessing the API:

var acuity = AcuityScheduling.basic({
    userId: process.env.ACUITY_USER_ID,
    apiKey: process.env.ACUITY_API_KEY,

});

// Create a new express server:

var app = express();
var port = process.env.ACUITY_PORT || 3000;

// Add some routes:

app.get("/", function (req, res) {
  res.send("Hello World");
});
// 
app.get("/api/appointments", function (req, _res) {
  // res.send(res.appointments)
  // Request classes from the Acuity API:

  const firstName = "Nuri";
  //best to filter on email rather than first name

  acuity.request("appointments", function (err, res, appointments) {
    if (err) return console.error(err);
    var filteredAppointments = appointments.filter(
    //   (appointment) => appointment.firstName === firstName
    (a) => a.firstName === firstName && a.type==='Calisthenics'
    );

    _res.json(filteredAppointments); 
    // _res.json(filteredAppointments.length) //returns numbner of classes from nuri
    
    _res.json(appointments)
    console.log(appointments);
  });
});

// Listen on the selected port:
app.listen(port, function (err) {
  if (err) {
    return console.error(err);
  }
  console.log("Server started! Say hey at http://localhost:" + port + "/");
});



//list all classes filtered by student
//count all classes filtered by student
//List all classes sorted by type and filtered by student

//send data to monogo db