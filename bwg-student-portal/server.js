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
    process.env.MONGODB_URI || "mongodb+srv://bwg-portal:me2penders2000@cluster0.yqfzi.mongodb.net/BWG?retryWrites=true&w=majority",
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
// todo list end points
//-------------------------------------------------------------------------------------------
function success(res, payload) {
  return res.status(200).json(payload)
}

app.get("/todos", async (req, res, next) => {
  try {
    const todos = await db.Todo.find({})
    return success(res, todos)
  } catch (err) {
    next({ status: 400, message: "failed to get todos" })
  }
})

//api for getting todo's with specific email

app.get("/todos/:email", async (req, res, next) => {  
  try {
    const todo = await db.Todo.find({email:req.params.email})
    return success(res, todo)
  } catch (err) {
    console.log(err)
    next({ status: 400, message: "failed to create todo" })
  }

})

//========================

app.post("/todos", async (req, res, next) => {
  try {
    const todo = await db.Todo.create(req.body)
    return success(res, todo)
  } catch (err) {
    console.log(err)
    next({ status: 400, message: "failed to create todo" })
  }
})

app.put("/todos/:id", async (req, res, next) => {
  try {
    const todo = await db.Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    return success(res, todo)
  } catch (err) {
    next({ status: 400, message: "failed to update todo" })
  }
})
app.delete("/todos/:id", async (req, res, next) => {
  try {
    await db.Todo.findByIdAndRemove(req.params.id)
    return success(res, "todo deleted!")
  } catch (err) {
    next({ status: 400, message: "failed to delete todo" })
  }
})

app.use((err, req, res, next) => {
  return res.status(err.status || 400).json({
    status: err.status || 400,
    message: err.message || "there was an error processing request",
  })
})






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
  
  
  //-------------------------------------------------------------------------------------------
  //WILL BE USER INPUT
  //-------------------------------------------------------------------------------------------
  // var email = "nurievrita@gmail.com";
  const bodyweightClass = "Bodyweight Class";
  const mobilityClass = "Mobility";
  const caliClass = "Calisthenics";
  const begClass = "Beginner bodyweight strength and mobility";
  const handstandClass = "Handstand Class"
  //-------------------------------------------------------------------------------------------
  //variable function that takes todays date and lists out dates as a string for previous 7 days
  //-------------------------------------------------------------------------------------------
  
  var date1 = moment().format("LL");
  console.log(date1)
  var date2 = moment().subtract(1, "days").format("LL");
  var date3 = moment().subtract(2, "days").format("LL");
  var date4 = moment().subtract(3, "days").format("LL");
  var date5 = moment().subtract(4, "days").format("LL");
  var date6 = moment().subtract(5, "days").format("LL");
  var date7 = moment().subtract(6, "days").format("LL");
  
//-------------------------------------------------------------------------------------------
  //api to accept log in email address and query servery
//-------------------------------------------------------------------------------------------

app.get("/username/:email", async (req, res, next) => {
  Promise.all(
    [db.Appointment.findOne({ email:req.params.email })],
  ).then((result) => {
    return(res.json(result[0]));
  });
})

app.get("/hourstrained/:email", async (req, res, next) => {
  Promise.all(
    [db.Appointment.countDocuments({ email:req.params.email })],
  ).then((result) => {
    return(res.json(result));
  });
})

app.get("/sevendays/:email", async (req, res, next) => {
  Promise.all(
    [db.Appointment.countDocuments({ email:req.params.email, date: { $in: [date1, date2, date3, date4, date5, date6, date7] } })],
    ).then((result) => {
    return(res.json(result[0]));
  });
})

app.get("/bodyweightClass/:email", async (req, res, next) => {
  Promise.all(
    [db.Appointment.countDocuments({ email:req.params.email, type: bodyweightClass })],
    ).then((result) => {
    return(res.json(result[0]));
  });
})

app.get("/mobilityClass/:email", async (req, res, next) => {
  Promise.all(
    [db.Appointment.countDocuments({ email:req.params.email, type: mobilityClass })],
    ).then((result) => {
    return(res.json(result[0]));
  });
})

app.get("/caliClass/:email", async (req, res, next) => {
  Promise.all(
    [db.Appointment.countDocuments({ email:req.params.email, type: caliClass })],
    ).then((result) => {
    return(res.json(result[0]));
  });
})


//NOT WORKING
app.get("/begClass/:email", async (req, res, next) => {
  Promise.all(
    [db.Appointment.countDocuments({ email:req.params.email, type: begClass })],
    ).then((result) => {
    return(res.json(result[0]));
  });
})

app.get("/handstandClass/:email", async (req, res, next) => {
  Promise.all(
    [db.Appointment.countDocuments({ email:req.params.email, type: handstandClass })],
    ).then((result) => {
    return(res.json(result[0]));
  });
})
  
//-------------------------------------------------------------------------------------------
// Connect Server
//-------------------------------------------------------------------------------------------
  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
  })