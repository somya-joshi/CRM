
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const CreateEmployee = () => {
  
  const history = useNavigate();

    const[employee, setEmployee] = useState({
      emailId:"",
      passwd:""
    })
const{emailId,passwd} = employee;

const onInputChange = (e)=>{
  setEmployee({...employee,[e.target.name]:e.target.value});
};


    const sumitHandler =async (e)=>{
      e.preventDefault();
      await axios.post('http://localhost:8080/saveemployee',employee)
                  history("/readempl");
    };
  
  return (
    <div>
    <Form onSubmit={(e)=>sumitHandler(e)}>
      <div className="mb-3">
        <div className="d-flex justify-content-between m-3">
        <h2>Create New Employee </h2>
        <Link to = "/readempl">
        <Button variant="primary">Show data</Button>
        </Link>
        </div>
        <div>
        <label>EmailId</label>
        <input type="email" name = "emailId" value={emailId} onChange={(e)=>onInputChange(e)}/>
        </div>
        <div>
        <label>Passwd</label>
        <input type="password" name = "passwd" value={passwd} onChange={(e)=>onInputChange(e)}/>
        </div>
        <Button type="submit">submit</Button>
        <Link to = "/readempl">
        <Button variant="primary">cancel</Button>
        </Link>
      </div>
    </Form>
    </div>
  );
  
}

export default CreateEmployee
