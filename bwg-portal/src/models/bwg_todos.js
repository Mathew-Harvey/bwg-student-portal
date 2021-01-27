const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const todosSchema = new mongoose.Schema({
    id: String,
    username: String,
    password: String,
  }, {collection: "Todos"});

const Todos = mongoose.model('Todos', userSchema);
 module.exports = Todos;