const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const PORT = 4000;
const mongoose = require("mongoose");
const db = require("../backend/models");

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
