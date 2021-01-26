import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const handleErrors = async (response) => {
    if(!response.ok) {
        const {message} = await response.json();
        throw Error(message);
    }
    return response.json();
}

export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");

    const register = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3001/register`, {
            method: 'POST',
            headers:{
                "Content-type" : "application/json",
            },
            body:JSON.stringify({
                username,
                password,
            }),
        })
        .then(handleErrors)
        .then(() => {
            history.push("/");
        })
        .catch((error) =>{
            setError(error.message);
        })
    };

    const history = useHistory()
    return (
     <div>
         <h1>Register</h1>
         {error && (<span style ={{color: 'red'}}>{error}</span>)}
        <form onSubmit={register}>
            <input 
            onChange={(e)=> setUsername(e.target.value)} 
            placeholder='username'/>
            <br />
            <input 
            type='password'
            onChange={(e)=> setPassword(e.target.value)} 
            placeholder='password'/>
            <br />
            <button type='submit'>Register</button>
        </form>
    </div>
    );
}

// https://youtu.be/X__rLNfTsLg?t=2485