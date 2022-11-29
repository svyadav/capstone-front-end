import React from "react"
import Button from 'react-bootstrap/Button';
import {useNavigate } from "react-router-dom";
const Dash=()=>{
    const navigate=useNavigate()
    return <>
    <div className="dash">
        <div>
        <h1>Welcome!!!</h1>
        </div>
    
  
    
    </div>
    <div className="dash">
    <Button variant="danger" className=" btn-logout" onClick={()=>navigate('/')}>
      Logout
      </Button>
   
    </div>
    
    </>

}

export default Dash