const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let Appointment = Schema({

    "_id": {
        "type": "Number"
    },
    "id": {
        "type": "Number"
    },
    "firstName": {
        "type": "String"
    },
    "lastName": {
        "type": "String"
    },
    "phone": {
        "type": "String"
    },
    "email": {
        "type": "String"
    },
    "date": {
        "type": "Date"
    },
    "time": {
        "type": "String"
    },
    "endTime": {
        "type": "String"
    },
    "dateCreated": {
        "type": "Date"
    },
    "datetimeCreated": {
        "type": "Date"
    },
    "datetime": {
        "type": "Date"
    },
    "price": {
        "type": "String"
    },
    "priceSold": {
        "type": "String"
    },
    "paid": {
        "type": "String"
    },
    "amountPaid": {
        "type": "String"
    },
    "type": {
        "type": "String"
    },
    "appointmentTypeID": {
        "type": "Number"
    },
    "classID": {
        "type": "Number"
    },
    "addonIDs": {
        "type": "Array"
    },
    "category": {
        "type": "String"
    },
    "duration": {
        "type": "Date"
    },
    "calendar": {
        "type": "String"
    },
    "calendarID": {
        "type": "Number"
    },
    "certificate": {
        "type": "String"
    },
    "confirmationPage": {
        "type": "String"
    },
    "location": {
        "type": "String"
    },
    "notes": {
        "type": "String"
    },
    "timezone": {
        "type": "String"
    },
    "calendarTimezone": {
        "type": "String"
    },
    "canceled": {
        "type": "Boolean"
    },
    "canClientCancel": {
        "type": "Boolean"
    },
    "canClientReschedule": {
        "type": "Boolean"
    },
    "labels": {
        "type": "Mixed"
    },
    "forms": {
        "type": "Array"
    },
    "formsText": {
        "type": "String"
    }

});

 const AppointmentConst = mongoose.model("Appointment", Appointment);
 module.exports = AppointmentConst;