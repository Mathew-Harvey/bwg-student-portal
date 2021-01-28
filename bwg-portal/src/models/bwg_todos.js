const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const todosSchema = new Schema({
  userId: String,
    todos: [
      {
        checked:Boolean,
        text: String
      }
    ],    
  }, {collection: "Todos"});

const Todos = mongoose.model('Todos', todosSchema);
 module.exports = Todos;