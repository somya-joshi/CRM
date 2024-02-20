
import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

const Read = () => {
    const[data, setDate] = useState([]);
  
 //save data in list
    function getdata(){
        axios.get('https://659bdc86d565feee2dabe1eb.mockapi.io/crm')
        .then((res)=>{
            console.log(res.data);   //data is array added object
            setDate(res.data);
        });
    }
    function handleDelete(id){
      axios.delete(`https://659bdc86d565feee2dabe1eb.mockapi.io/crm/${id}`)
      .then(() => {
        getdata();
      });
    }
    useEffect(()=>{ // useEffect use to rerander only when change in getdata function
        getdata();
    },[]);   //[] only one time only when data is loaded

//update
function setInLocalStorage(id, email, password){
  localStorage.getItem("id", id);
  localStorage.getItem("email", email);
  localStorage.getItem("password", password)
}

  return (
    <div>
     <Form>
      <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        label="Check this switch"
      />
    </Form>
 
         <div className="d-flex justify-content-between m-3">
     
        <h2>Read Operation</h2>
        <Link to = "/create">
        <Button variant="secondary">Create New</Button>
        </Link>
        </div>
        <h1>Read Operation</h1>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>email </th>
          <th>password</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody >
      {
        data.map((eachdata)=>{
            return(
            <tr>
             <td>{eachdata.id}</td>
            <td>{eachdata.email}</td>
            <td>{eachdata.password}</td>
            <Link to = "/update">
            <td><Button variant="success" 
            onClick={()=>setInLocalStorage(  //for update
              eachdata.id, 
              eachdata.email,
              eachdata.password)}>
              Edit</Button></td>
            </Link>
            <td><Button variant="danger" onClick={()=>handleDelete(eachdata.id)}>Delete</Button></td>
             </tr>
               )})
      }
      </tbody>
    </Table>
    </div>
  );
}

export default Read;
