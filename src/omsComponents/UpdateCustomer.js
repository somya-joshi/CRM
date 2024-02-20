import React, { useEffect } from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';



function UpdateCustomer() {
  const[displayCustomerId, setDisplayCustomerId] = useState("")
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

    const navigate = useNavigate();
    
    useEffect(()=>{
       setDisplayCustomerId(localStorage.getItem("displayCustomerId"));
       setFirstName(localStorage.getItem("firstName"));
       setLastNamed(localStorage.getItem("lastName"));
       setDob(localStorage.getItem("dob"));
       setGender(localStorage.getItem("gender"));
       setMobileNo(localStorage.getItem("mobileNo"));
       setEmailId(localStorage.getItem("emailId"));
       setAddress(localStorage.getItem("address"));
       setDistrict(localStorage.getItem("district"));
       setState(localStorage.getItem("state"));
       setCountry(localStorage.getItem("country"));
       setPinCode(localStorage.getItem("pinCode"));
        
    },[]);

const handleUpdate=(displayCustomerId)=>{
 // e.preventDefault();
  axios.put(`http://localhost:8080/getallcustomers/${displayCustomerId}`, {
    displayCustomerId:"displayCustomerId",
    firstName:"firstName",
    lastName:"lastName",
    dob:"dob",
    gender:"gender",
    mobileNo:"mobileNo",
    emailId:"emailId",
    address:"address",
        email:"email",
        district:"district",
        state:"state",
        country:"country",
        pinCode:"pinCode",
    })
    .then(()=>{
        navigate("/readCustomer")
    })
}
    
  return (
    <div>
        <Form>
        <div className="mb-3">
        <div>
        <label>display_customer_id</label>
        <input type="text" value={displayCustomerId}/>
        </div>
        <div>
        <label>first_name</label>
        <input type="text" value={firstName}/>
        </div>
        <div>
        <label>last_name</label>
        <input type="text" value={lastName}/>
        </div>
        <div>
        <label>dob</label>
        <input type="text" value={dob}/>
        </div>
        <div>
        <label>gender</label>
        <input type="text" value={gender}/>
        </div>
        <div>
        <label>mobile_no</label>
        <input type="text" value={mobileNo}/>
        </div>
        <div>
        <label>email_id</label>
        <input type="email" value={emailId}/>
        </div>
        <div>
        <label>address</label>
        <input type="text" value={address}/>
        </div>
        <div>
        <label>district</label>
        <input type="text" value={district}/>
        </div>
        <div>
        <label>state</label>
        <input type="text" value={state}/>
        </div>
        <div>
        <label>country</label>
        <input type="text" value={country}/>
        </div>
        <div>
        <label>pinCode</label>
        <input type="number" value={pinCode}/>
        </div>
        <Button variant="primary" type="submit" onClick={handleUpdate}>update</Button>
        <Link to = "/readCustomer">
        <Button variant="secondary">Back</Button>
        </Link>
      </div>
    </Form>
    </div>
  );
}

export default UpdateCustomer;

