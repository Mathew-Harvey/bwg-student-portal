import axios from "axios"

const API_URL = "/todos/"

async function createTodo(task, email) {
  console.log(email)
  const { data: newTodo } = await axios.post(API_URL, {
    task, 
    email,
  })
  return newTodo
}

async function deleteTodo(id) {
  const message = await axios.delete(`${API_URL}${id}`)
  return message
}

async function updateTodo(id, payload) {
  const { data: newTodo } = await axios.put(`${API_URL}${id}`, payload)
  return newTodo
}

async function getAllTodos(email) {
  console.log(email)
  const { data: todos } = await axios.get(API_URL + email)
  return todos
}

export default { createTodo, deleteTodo, updateTodo, getAllTodos }