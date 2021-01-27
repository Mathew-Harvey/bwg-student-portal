const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    id: String,
    username: String,
    password: String,
  }, {collection: "User"});

const User = mongoose.model('User', userSchema);
 module.exports = User;