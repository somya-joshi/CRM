
import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {Link} from 'react-router-dom';
//import "./mystyle/Read.css";


const ReadCustomer = () => {
    const[data, setDate] = useState([]);
  
 //save data in list
    function getdata(){
        axios.get('http://localhost:8080/getallcustomers')
        .then((res)=>{
            console.log(res.data);   //data is array added object
            setDate(res.data);
        });
    }
    function handleDelete(displayCustomerId){
      axios.delete(`http://localhost:8080/getallcustomers/${displayCustomerId}`)
      .then(() => {
        getdata();
      });
    }
    useEffect(()=>{ // useEffect use to rerander only when change in getdata function
        getdata(); //after deleting update customer list
    },[]);   //[] only one time only when data is loaded

//update
function setInLocalStorage( displayCustomerId, firstName,lastName,dob,gender, mobileNo,emailId,address,
   district,state,country,pinCode,){
  localStorage.getItem("displayCustomerId", displayCustomerId);
  localStorage.getItem("firstName", firstName);
  localStorage.getItem("lastName", lastName)
  localStorage.getItem("dob", dob);
  localStorage.getItem("gender", gender)
  localStorage.getItem("mobileNo", mobileNo);
  localStorage.getItem("emailId", emailId)
  localStorage.getItem("address", address);
  localStorage.getItem("district", district)
  localStorage.getItem("state", state);
  localStorage.getItem("country", country)
  localStorage.getItem("pinCode", pinCode); 
}
  return (
<div >
         <div className="d-flex justify-content-between m-3">
        <h2>Check Customer Details</h2>
        <Link to = "/createCustomer">
        <Button variant="secondary">Add Customer</Button>
        </Link>
        </div>
      <Table >
      <thead >
        <tr>
          <th>display_customer_id</th>
          <th>first_name </th>
          <th>last_name</th>
          <th>dob</th>
          <th>gender</th>
          <th>mobile_no</th>
          <th>email_id</th>
          <th>address</th>
          <th>district</th>
          <th>state</th>
          <th>country</th>
          <th>pin_code</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody >
      {
        data.map((eachdata)=>{
            return(
            <tr>
             <td>{eachdata.displayCustomerId}</td>
            <td>{eachdata.firstName}</td>
            <td>{eachdata.lastName}</td>
            <td>{eachdata.dob}</td>
            <td>{eachdata.gender}</td>
            <td>{eachdata.mobileNo}</td>
            <td>{eachdata.emailId}</td>
            <td>{eachdata.address}</td>
            <td>{eachdata.district}</td>
            <td>{eachdata.state}</td>
            <td>{eachdata.country}</td>
            <td>{eachdata.pinCode}</td>
            <tr></tr>
            <tr></tr>
            <Link to = "/updateCustomer">
            <td><Button variant="success" 
            onClick={()=>setInLocalStorage(  //for update
            eachdata.displayCustomerId,
            eachdata.firstName,
            eachdata.lastName,
            eachdata.dob,
            eachdata.gender,
            eachdata.mobileNo,
            eachdata.address,
            eachdata.district,
            eachdata.state,
            eachdata.country,
            eachdata.pinCode)}>
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

export default ReadCustomer;
