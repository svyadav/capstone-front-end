import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios"
import { FaGoogle,FaGithub,FaFacebook } from "react-icons/fa";
import Spinner from 'react-bootstrap/Spinner';
import Cookies from 'universal-cookie';
const Login = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [toggle,setToggle]=useState(false)
    const [message,setMessage]=useState("")
    const navigate=useNavigate()
 
    const google = () => {
    window.open("http://capstone-6pkp.onrender.com/auth/google", "_self");
    
  };
  const github = () => {
    window.open("http://localhost:5000/auth/github", "_self");
  };

  const facebook = () => {
    window.open("http://localhost:5000/auth/facebook", "_self");
  };


 

  const handleLogin=async()=>{
    setToggle(true)
    let res=await axios.post("http://capstone-6pkp.onrender.com/users/signin",{
      email,password
    
    })
   
    if(res.data.statusCode===200){
      setToggle(false)
       sessionStorage.setItem('token',res.data.token)
       navigate("/dash")
    }
  

    else{
      setToggle(false)
      setMessage(res.data.message)
      setTimeout(()=>{
        setMessage("")

      },3000)
    }


  }
  return (
    <>
      <div className="login-wrapper">
      <div className="login">
            <h1>Login</h1>
        <Form>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
      </Form.Group>
      <div className="btn-wrapper">
        <div>
        <Button className="btn-login" variant="success" onClick={()=>handleLogin()}>
      Login
      </Button>

        </div>
        <div>
            Didn't have an account? <NavLink to="/signup">Signup</NavLink>
        </div>
        <div>
           ---------------------or-------------------
        </div>
    
        <div>
          <Button variant="outline-success" className="btn-login" onClick={google}>
           <FaGoogle style={{marginRight:"15px",color:"red"}}/> 
            Login with Google
          </Button>
        </div>
        <div>
          <Button variant="secondary" className="btn-login" onClick={github}>
            <FaGithub style={{marginRight:"15px"}}/>Login with Github
          </Button>
        </div>
        <div>
          <Button variant="primary" className="btn-login" onClick={facebook}>
            <FaFacebook style={{marginRight:"15px"}}/>Login with Facebook
          </Button>
        </div>
    

      </div>
      
    </Form>
    {toggle?<Spinner animation="border" variant="primary" />:<></>}
    {message?<div style={{"color":"red","textAlign":"center"}}>{message}</div>:<></>}
        </div>
        
      </div>
    </>
  );
};
export default Login;
