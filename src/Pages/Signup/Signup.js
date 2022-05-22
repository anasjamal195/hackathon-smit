import React from 'react'
import db from '../../firebase'
import { useState } from 'react'
import { collection,addDoc } from "@firebase/firestore";


export default function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [post_code, setPostCode] = useState('');
    const [mobile_no, setMobileNo] = useState('');

    const collectionRef = collection(db,'users');


    const signupHandler = (e)=>{
        e.preventDefault()

        const addUser = async ()=>{
            await addDoc(collectionRef,{
                name:name,
                email:email,
                password:password,
                country:country,
                city:city,
                state:state,
                post_code:post_code,
                mobile_no:mobile_no,
            })
            window.location.href="/homepage"
            
        }
        addUser();
        

    }





  return (
    <div>
        <h1>Sign up</h1>
        <form onSubmit = {signupHandler}>
            <label htmlFor='name'>Name</label>
            <input id = 'name'  onChange={(e)=>{setName(e.target.value)}} required placeholder='Enter name'/>
            <br/>
            <label htmlFor='email'>Email</label>
            <input id = 'email' onChange={(e)=>{setEmail(e.target.value)}} required placeholder='Enter email'/>
            <br/>
            <label htmlFor='password'>Password</label>
            <input id = 'password' onChange={(e)=>{setPassword(e.target.value)}} required placeholder='Enter Password'/>
            <br/>
            <label htmlFor='country'>Country</label>
            <input id = 'country' onChange={(e)=>{setCountry(e.target.value)}} required placeholder='Enter your country'/>
            <br/>
            <label htmlFor='city'>City</label>
            <input id = 'city' onChange={(e)=>{setCity(e.target.value)}} required placeholder='Enter city name'/>
            <br/>
            <label htmlFor='state'>State</label>
            <input id = 'state' onChange={(e)=>{setState(e.target.value)}} required placeholder='Enter your state'/>
            <br/>
            <label htmlFor='post_code'>Postal Code</label>
            <input id = 'post_code' onChange={(e)=>{setPostCode(e.target.value)}} required placeholder='Enter your postal code'/>
            <br/>
            <label htmlFor='mobile'>Mobile No</label>
            <input id = 'mobile' onChange={(e)=>{setMobileNo(e.target.value)}} required placeholder='Enter your mobile no.'/>
            <br/>
            <button type = "submit" >Create Account</button>
        </form>
    </div>
  )
}
