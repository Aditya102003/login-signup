import React from 'react'
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import { useState } from 'react';

function Login() {

    const history = useNavigate();

    const [email,setEmail]= useState('')
    const [password,setPassword]= useState('')

async function submit(e){
    e.preventDefault();
    try{


await axios.post("http://localhost:3000/",{
    // passing the email and password to app.js 

    email,password

    })
    .then(res=>{
        if(res.data=="exist"){
            // if email exist in the database  then this line of code will redirectt to the home page 

            history("/Home",{state:{id:email}})
    }
    else if(res.data=="notexist"){
        // if email exist in the database  then this line of code will redirectt to the home page 

        alert("User have not signed up")
    }
    })
    .catch(e=>{
alert("wrong detail")
console.log(e)
})

}
    catch(e){
        console.log(e)
    }
}

  return (
    <div className="">
        <h1>
            Login
        </h1>
        <form action="POST">
            <input 
            type="email"
            onChange={(e)=>{
            setEmail(e.target.value)
            }}
            placeholder="Email"
            name="" 
            id=""
            />
             <input 
            type="password"
            onChange={(e)=>{
            setPassword(e.target.value)
            }}
            placeholder="Password"
            name="" 
            id=""
            />
             <input 
            type="submit"
            onClick={submit}
            />
        </form>
        <br/>
        <p>OR</p>
        <br/>
        <Link to="/Signup">Signup Page </Link>

    </div>
  )
}

export default Login