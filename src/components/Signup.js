import React from 'react'
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import { useState } from 'react';


function Login() {

  const history = useNavigate();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function submit(e) {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/Signup", {
        // passing the email and password to app.js 

        email, password

      })
        .then(res => {
          if (res.data == "exist") {
            //  it means data of user already exist in the database 
            history("/Home", { state: { id: email } })
            // alert("User already exist ")

          }
          else if (res.data == "notexist") {
            // 
            console.log("ss");

            alert("User have not signed up")
          }
        })
        .catch(e => {
          alert("wrong detail")
          console.log(e)
        })
    }
    catch (e) {
      console.log(e)
    }
  }

  return (
    <div className="">
      <h1>
        Sign-up
      </h1>
      <form action="POST">
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          placeholder="email"
        />
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          placeholder="password"
        />
        <input
          type="submit"
          onClick={submit}
        />
      </form>
      <br />
      <p>OR</p>
      <br />

      <Link to="/">Login Page </Link>

    </div>
  )
}

export default Login