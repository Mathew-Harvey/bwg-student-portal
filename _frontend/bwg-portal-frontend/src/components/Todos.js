import React, { useState, useContext } from 'react';
import { handleErrors } from '../pages/login'
import { CredentialsContext } from "../App"

export default function Todos() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: 'test text here'
        }
    ]);
    const [todoText, setToDoText] = useState("")
    const [credentials] = useContext(CredentialsContext)

    const persist =()=> {
        fetch(`http://localhost:3001/todos`, {
            method: 'POST',
            headers:{
                "Content-type" : "application/json",
                "Authorization": `Basic ${credentials.username}:${credentials.password}`
            },
            body:JSON.stringify(todos),
        })       
        .then(() => {})
    };

    const addTodo = (e) => {
        if(!todoText) return;
        e.preventDefault();
        const newTodo = { checked: false, text: todoText }
        setTodos([...todos, newTodo ]);
        setToDoText("");
        persist();
    };

    const toggleTodo = (index) => {
        const newTodoList = [...todos];
        newTodoList[index].checked = !newTodoList[index].checked
        setTodos(newTodoList)
    }


    return <div>
        {todos.map((todo, index) => (
            <div key={index}>
                <input onChange={() => toggleTodo(index)} id='checkbox1' type='checkbox' />
                <label for='checkbox1'>{todo.text}</label>
            </div>
        ))}
        <br />
        <form onSubmit={addTodo}>
            <input
                value={todoText}
                onChange={(e) => setToDoText(e.target.value)}
                type='text'>
            </input>
            <button type='submit'>Add</button>
        </form>
    </div>
}

//https://youtu.be/X__rLNfTsLg?t=4256