import React, { useEffect } from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';



function Update() {
   // const[id, setId] = useState("")
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")

    const navigate = useNavigate();
    
    useEffect(()=>{
       // setId(localStorage.getItem("id"));
        setEmail(localStorage.getItem("email"));
        setPassword(localStorage.getItem("password"));
    },[]);

const handleUpdate=(id)=>{
 // e.preventDefault();
  axios.put(`https://659bdc86d565feee2dabe1eb.mockapi.io/crm/${id}`, {
        email:"email",
        password:"password",
    })
    .then(()=>{
        navigate("/read")
    })
}
    
  return (
    <div>
        <Form>
        <div className="mb-3">
        <div>
        <label>Email</label>
        <input type="email" value={email}/>
        </div>
        <div>
        <label>Password</label>
        <input type="password" value={password}/>
        </div>
        <Button variant="primary" type="submit" onClick={handleUpdate}>update</Button>
        <Link to = "/read">
        <Button variant="secondary">Back</Button>
        </Link>
      </div>
    </Form>
    </div>
  );
}

export default Update;

