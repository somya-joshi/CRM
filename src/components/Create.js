import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Create() {
  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")
  const history = useNavigate();

  const handlesubmit = (e)=>{
    e.preventDefault();
    console.log("onclick");
    axios.post('https://659bdc86d565feee2dabe1eb.mockapi.io/crm',
              {email:email,
               password:password,
              })
              .then(()=>{
                history("/read")
              });
  };

  return (
    <div>
    <Form>
      <div className="mb-3">
        <div className="d-flex justify-content-between m-3">
        <h2>Create New </h2>
        <Link to = "/read">
        <Button variant="primary">Show data</Button>
        </Link>
        </div>
        <div>
        <label>Email</label>
        <input type="email" onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div>
        <label>Password</label>
        <input type="password" onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <Button type="submit" onClick={handlesubmit}>submit</Button>
      </div>
    </Form>
    </div>
  );
}
export default Create;
