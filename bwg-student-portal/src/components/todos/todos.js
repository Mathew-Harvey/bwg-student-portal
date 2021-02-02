
import React, { useState, useEffect } from "react"
import "./todos.css"
import APIHelper from "./APIHelper.js"

function Todos(props) {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState("")


  useEffect(() => {
    const fetchTodoAndSetTodos = async () => {
      const todos = await APIHelper.getAllTodos(props.email)
      setTodos(todos)
    }
    fetchTodoAndSetTodos()
  }, [props.email])

  const createTodo = async e => {
    e.preventDefault()
    if (!todo) {
      alert("please enter something")
      return
    }
    if (todos.some(({ task }) => task === todo)) {
      alert(`Task: ${todo} already exists`)
      return
    }

    const newTodo = await APIHelper.createTodo(todo, props.email)
    setTodos([...todos, newTodo])
  }

  const deleteTodo = async (e, id) => {
    try {
      e.stopPropagation()
      await APIHelper.deleteTodo(id)
      setTodos(todos.filter(({ _id: i }) => id !== i))
    } catch (err) { }
  }

  const updateTodo = async (e, id) => {
    e.stopPropagation()
    const payload = {
      completed: !todos.find(todo => todo._id === id).completed,
    }
    const updatedTodo = await APIHelper.updateTodo(id, payload)
    setTodos(todos.map(todo => (todo._id === id ? updatedTodo : todo)))
  }

  return (
    <div className="App">
      <div id="todoInput">
        <form className="form">
        <input
          id="todo-input"
          type="text"
          value={todo}
          autoComplete="off"
          onChange={({ target }) => setTodo(target.value)}
        />
        <label for="name" class="label-name">
          <span class="content-name">   </span>
        </label>
        <button type="button" onClick={createTodo}>
          Add Exercises
        </button>
        </form>
      </div>
      <div id="todoItems">
        <ul>
          {todos.map(({ _id, task, completed }) => {
            return (
              <li
                key={_id}
                onClick={e => updateTodo(e, _id)}
                className={completed ? "completed" : ""}
              >
                {task} <span onClick={e => deleteTodo(e, _id)}>------>REMOVE</span>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Todos