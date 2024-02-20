import React, { useState, useEffect } from "react";
import axios from 'axios';
import { NavLink, useNavigate } from "react-router-dom";

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import Row from 'react-bootstrap/Row';


const modalContainer = {
    background: "white",
    position: "fixed", //important
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: '600px',
    height: '500px',
    //padding: "3rem",
    borderRadius: '10px',
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    overflow: 'auto'
}

const CreateCustomer = ({ closeModal }) => {
    const initialValue = {
        firstName: "", lastName: "", dob: "", gender: "", mobileNo: "", emailId: "",
        address: "", district: "", state: "", country: "", pinCode: ""
    }
    const [customer, setCustomer] = useState(initialValue);
    const [errors, setErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate = useNavigate();

    const { firstName, lastName, dob, gender, mobileNo, emailId, address, district, state, country, pinCode } = customer;
    const onInputChange = e => {
        setCustomer({ ...customer, [e.target.name]: e.target.value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors(validate(customer));
        setIsSubmit(true);
        await axios.post("http://localhost:8080/createcustomer", customer)
        .then(resp => {
            closeModal()
            setCustomer(); // clear last order in place order form
            //alert("your order succussfully placed");
          });
    };
    useEffect(() => {
        console.log(errors);
        if (Object.keys(errors).length === 0 && isSubmit) {
            console.log(errors);
        }
    }, [errors]);

    const validate = (values) => {
        const errors = {};

        if (values.firstName.length === 0) {
            errors.firstName = "First Name is required!";
        }
        if (values.lastName.length === 0) {
            errors.lastName = "Last Name is required!";
        }
        if (values.dob.length === 0) {
            errors.dob = "Dob is required!";
        }
        if (values.gender.length === 0) {
            errors.gender = "Gender is required!";
        }
        if (values.mobileNo.length === 0) {
            errors.mobileNo = "MobileNo Name is required!";
        }
        if (values.emailId.length === 0) {
            errors.emailId = "Email Id Name is required!";
        }
        if (values.address.length === 0) {
            errors.address = "Address is required!";
        }
        if (values.district.length === 0) {
            errors.district = "District is required!";
        }
        if (values.state.length === 0) {
            errors.state = "State is required!";
        }
        if (values.country.length === 0) {
            errors.country = "Country is required!";
        }
        if (values.pinCode.length === 0) {
            errors.pinCode = "Pin Code is required!";
        }
        return errors;
    }


    return (
        <div style={{ marginTop: "1000px" }} >
            <div style={{ position: "fixed", left: 0, right: 0, bottom: 0, top: 0, background: "#A9A9A9" }}
                onClick={closeModal}></div>
            <div style={modalContainer}>
                <Form onSubmit={handleSubmit}>
                    <div style={{ height: '50px', background: '#1873CC', textAlign: 'center' }}><h2>Create Customer</h2></div>
                    {Object.keys(errors).length === 0 && isSubmit ? <p style={{ textAlign: 'center', color: 'green', fontSize: '20px' }}>Customer successfully Created</p> : <p style={{ textAlign: 'center' }}></p>}
                    <div style={{ margin: "5px 30px 1px 30px" }}>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" >
                                <Form.Label>First_Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Your first Name" name="firstName" value={firstName} onChange={e => onInputChange(e)} />
                                <small style={{ color: "red", padding: '0' }}>{errors.firstName}</small>
                            </Form.Group>

                            <Form.Group as={Col} md="6" >
                                <Form.Label>Last_Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Your last Name" name="lastName" value={lastName} onChange={e => onInputChange(e)} />
                                <small style={{ color: "red", padding: '0' }}>{errors.lastName}</small>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6">
                                <Form.Label>Gender </Form.Label>
                                <Form.Select name="gender" value={gender} onChange={e => onInputChange(e)} >
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </Form.Select>
                                <small style={{ color: "red", padding: '0' }}>{errors.gender}</small>
                            </Form.Group>
                            <Form.Group as={Col} md="6" >
                                <Form.Label>dob</Form.Label>
                                <Form.Control type="text" placeholder="Enter Your dd-mm-yyyy" name="dob" value={dob} onChange={e => onInputChange(e)} />
                                <small style={{ color: "red", padding: '0' }}>{errors.dob}</small>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" >
                                <Form.Label>Mobile_No</Form.Label>
                                <Form.Control type="text" placeholder="Enter Your mobileNo" name="mobileNo" value={mobileNo} onChange={e => onInputChange(e)} />
                                <small style={{ color: "red", padding: '0' }}>{errors.mobileNo}</small>
                            </Form.Group>
                            <Form.Group as={Col} md="6" >
                                <Form.Label>Email_Id</Form.Label>
                                <Form.Control type="text" placeholder="Enter Your emailId" name="emailId" value={emailId} onChange={e => onInputChange(e)} />
                                <small style={{ color: "red", padding: '0' }}>{errors.emailId}</small>
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-auto" >
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Flat no, streat No," name="address" value={address} onChange={e => onInputChange(e)} />
                            <small style={{ color: "red", padding: '0' }}>{errors.address}</small>
                        </Form.Group>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6">
                                <Form.Label>District</Form.Label>
                                <Form.Control type="text" placeholder="Enter Your district" name="district" value={district} onChange={e => onInputChange(e)} />
                                <small style={{ color: "red", padding: '0' }}>{errors.district}</small>
                            </Form.Group>
                            <Form.Group as={Col} md="6">
                                <Form.Label>State</Form.Label>
                                <Form.Control type="text" placeholder="Enter Your state" name="state" value={state} onChange={e => onInputChange(e)} />
                                <small style={{ color: "red", padding: '0' }}>{errors.state}</small>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" >
                                <Form.Label>Country</Form.Label>
                                <Form.Control type="text" placeholder="Enter Your country" name="country" value={country} onChange={e => onInputChange(e)} />
                                <small style={{ color: "red", padding: '0' }}>{errors.country}</small>
                            </Form.Group>
                            <Form.Group as={Col} md="6" >
                                <Form.Label>Pin_Code</Form.Label>
                                <Form.Control type="number" placeholder="Enter Your pinCode" name="pinCode" value={pinCode} onChange={e => onInputChange(e)} />
                                <small style={{ color: "red", padding: '0' }}>{errors.pinCode}</small>
                            </Form.Group>
                        </Row>
                    </div>
                    <div>
                        <button className="btn btn-primary" style={{ background: '#1873CC', margin: '10px 10px 10px 100px' }}>Create Customer</button>
                        <NavLink className="btn btn-primary mr-2" to="/" style={{ background: 'red', margin: '10px 0 10px 50px' }} >Cancle</NavLink>
                    </div>
                </Form>
            </div>
        </div>
    );
}
export default CreateCustomer;