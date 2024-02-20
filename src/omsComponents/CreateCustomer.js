import React, { useState } from 'react';
import {Button, Form, Col,Row} from 'react-bootstrap';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const mystyle={	background:'#E0FFFF',
    width:'500px',	
    height:'720px',
	margin:'100px',
	padding:'10px',
	textAlign:'center',
    borderStyle: 'red',
	boxShadow: '5px 5px 5px gray'}

function CreateCustomer() {
 // const[displayCustomerId, setDisplayCustomerId] = useState("")
  const[firstName, setFirstName] = useState("")
  const[lastName, setLastNamed] = useState("")
  const[dob, setDob] = useState("")
  const[gender, setGender] = useState("")
  const[mobileNo, setMobileNo] = useState("")
  const[emailId, setEmailId] = useState("")
  const[address, setAddress] = useState("")
  const[district, setDistrict] = useState("")
  const[state, setState] = useState("")
  const[country, setCountry] = useState("")
  const[pinCode, setPinCode] = useState("")

  const history = useNavigate();

  const handlesubmit = (e)=>{
    e.preventDefault();
    console.log("onclick");
    axios.post('http://localhost:8080/getallcustomers',
              {firstName,lastName, dob, gender, mobileNo,emailId,
                address,district,state,country,pinCode,
              })
              .then(()=>{
                history("/readCustomer")
              });
  };
  return (
    <div style={mystyle}>
		<div className="d-flex justify-content-between m-3">
        <h3>Create New Customer </h3>
        <Link to = "/ReadCustomer">
        <Button variant="primary">Show customer </Button>
        </Link>
        </div>
        <Form>
              <Row className="mb-3">
                    <Form.Group as={Col} md="6" >
                    <Form.Label >First name</Form.Label>
                    <Form.Control type="text"  name = "firstName" onChange={(e)=>setFirstName(e.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col} md="6">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control  type="text"  name = "lastName" onChange={(e)=>setLastNamed(e.target.value)}/>
                    </Form.Group>
            </Row>

            <Row className="mb-3">
                    <Form.Group as={Col} md="4" >
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control type="text"    placeholder= "dd-MMM-yyyy" name = "dob" onChange={(e)=>setDob(e.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col} md="3">
                    <Form.Label>Gender </Form.Label>
                    <Form.Control  type="text"  name = " gender," onChange={(e)=>setGender(e.target.value)}/>
                    </Form.Group>

                    <Form.Group as={Col} md="4">
                    <Form.Label>Mobile no</Form.Label>
                    <Form.Control type="text" placeholder="(+91)789945-1212"   name = "mobileNo,"  onChange={(e)=>setMobileNo(e.target.value)} />
                    </Form.Group>
            </Row>
              
            <Form.Group className="mb-3" >
                  <Form.Label>E-mail</Form.Label>
                  <Form.Control type="text"  placeholder="emxaple@gmail"  name="emailId,"  onChange={(e)=>setEmailId(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" >
                  <Form.Label>Flat, House no, Building, ompany, Apartment</Form.Label>
                  <Form.Control type="text"  name = "address"  onChange={(e)=>setAddress(e.target.value)} />
            </Form.Group>

            <Row className="mb-3">
                <Form.Group as={Col} md="4">
                <Form.Label>Districs</Form.Label>
                <Form.Control type="city"   name = "district" onChange={(e)=>setDistrict(e.target.value)} />
                </Form.Group>
                
                <Form.Group as={Col} md="4">
                    <Form.Label>Zip Code  </Form.Label>
                    <Form.Control  type="number"  placeholder="6-digit Pincode" name = " " onChange={(e)=>setPinCode(e.target.value)} />
                    </Form.Group>
            </Row>

      <Form.Select onChange={(e)=>setState(e.target.value)}>
        <option>State</option>
        <option value="1">maharashtra</option>
      <option value="2">patna</option>
      <option value="3">delhi</option>
      </Form.Select>
      <br />
      <Form.Select  onChange={(e)=>setCountry(e.target.value)} >
        <option>Country</option>
        <option value="1">india</option>
      <option value="2">japan</option>
      <option value="3">UK</option>
      </Form.Select>

      
            <label className="col-md-6 control-label"></label>
            <div className="col-md-10">
            <Button type="submit"  >Send <span  onClick={handlesubmit}></span></Button>
            </div>

</Form>
</div>

  );
}
export default CreateCustomer;