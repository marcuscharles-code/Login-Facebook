import React, { useState } from 'react';
import '../Components/LoginForm.css';
import axios from 'axios';

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");


    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post("http://localhost:6969/Login", { email, password });
        if (response.data.message) {
          setMessage("Login successful");
        } else {
          setMessage(response.data.message);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    

 
    

  return (
    
   <div className="content">
     <div className="content">
      <div className="flex-div">
        <div className="name-content">
          <h1 className="logo">facebook</h1>
          <p>Connect with friends and the world around you on facebook.</p>
        </div>
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email or Phone Number" required  value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" placeholder="Password" required value={password} onChange={(e)=> setPassword(e.target.value)} />
            <button className="login" type="submit">Log In</button>
            <a href="#">Forgot Password ?</a>
            <hr />
            <button className="create-account">Create New Account</button>
            <p>{message}</p>
        </form>
      </div>
    </div>
   </div>
  )
}

export default LoginForm