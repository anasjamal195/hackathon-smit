import React from 'react'
import db from '../../firebase'
import { useState } from 'react'
import { collection,addDoc,getDocs } from "@firebase/firestore";


export default function Login() {
    const [user, setUser] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


   

  return (
    <div>
        <h1>Sign up</h1>
        <form >
            <label htmlFor='email'>Email</label>
            <input id = 'email' onChange={(e)=>{setEmail(e.target.value)}} required placeholder='Enter email'/>
            <br/>
            <label htmlFor='password'>Password</label>
            <input id = 'password' onChange={(e)=>{setPassword(e.target.value)}} required placeholder='Enter Password'/>
            <br/>
            <button type = "submit" >Login</button>
        </form>
    </div>
  )
}
