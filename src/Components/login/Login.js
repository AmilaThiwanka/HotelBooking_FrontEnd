import React, { useState } from "react"
import { Link } from "react-router-dom"
import HeadTitle from "../../Common/HeadTitle/HeadTitle"
import "./design.css"
import { useHistory } from "react-router-dom";
const Login = () => {

  const history = useHistory();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [recValue, setRecValue] = useState([])
  const submitForm = async (e) => {
    e.preventDefault();

        if (email.length === 0 || password.length === 0) {
            alert("Invalid user data.")
            return;
        }

        try {
            const response = await fetch('http://localhost:8000/login', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({email, password}),
            });

            if (!response.ok) {
                alert("Invalid credentials.")
                return;
            }

            alert("User successfully logged in")
            setPassword("");
            setEmail("");

            history.push('/')


        } catch (err) {
            alert(err.message)
        }
  }
  return (
    <>
      <HeadTitle />
      <section className='forms top'>
        <div className='container'>
          <div className='sign-box'>
            <p>Enter your e-mail and password below to log in to your account and use the benefits of our website.</p>
            <form action='' onSubmit={submitForm}>
              <input type='text' name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
              <input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />

              <div className='flex_space'>
                <div className='flex'>
                  <input type='checkbox' />
                  <label>Remember Me</label>
                </div>
                <div className='flex'>
                  <span>I forgot my password</span>
                </div>
              </div>

              <button type='submit' className='primary-btn'>
                Sign In
              </button>
              <p>
                Don't have account? <Link to='/register'>Signup!</Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login