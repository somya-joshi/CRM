import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link, NavLink, useNavigate } from "react-router-dom";
import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Button } from "react-bootstrap";



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

const UpdateCustomer = ({ closeModal,displayCustomerId }) => {
    const initialValue = {
        firstName: "", lastName: "", dob: "", gender: "", mobileNo: "", emailId: "",
        address: "", district: "", state: "", country: "", pinCode: "", isActive: ""
    }
    const [customer, setCustomer] = useState(initialValue);
    //const { displayCustomerId } = useParams();
    const history = useNavigate();

    const { firstName, lastName, dob, gender, mobileNo, emailId, address, district, state, country, pinCode, isActive } = customer;
    const onInputChange = e => {
        setCustomer({ ...customer, [e.target.name]: e.target.value });
    };
    //**************get customer by id ******************* */
    const getCustomer = async () => {
        const result = await axios.get(`http://localhost:8080/getcustomerdisplayCustomerid/${displayCustomerId}`);
        setCustomer(result.data);
    };
    useEffect(() => {
        getCustomer();
    }, []);
    //**************update customer by id ******************* */

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.put("http://localhost:8080/updateCustomer", customer)
        alert("your data successfully update")
        history("/customer")
    };
    return (
        <div style={{ marginTop: "1000px" }} >
            <div style={{ position: "fixed", left: 0, right: 0, bottom: 0, top: 0, background: "#A9A9A9" }}
                onClick={closeModal}></div>
            <div style={modalContainer}>
                <Form onSubmit={handleSubmit} >
                    <div style={{ height: '50px', background: '#1873CC' }}>
                        <span style={{ color: "white", margin: "20px 100PX 0 220px", fontSize: "30px" }}>Update Customer</span>
                        <Link  style={{ color: "red" }}  onClick={closeModal}>{<DisabledByDefaultRoundedIcon />}</Link>
                    </div>
                    <div style={{ margin: "5px 30px 1px 30px" }}>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" >
                                <Form.Label>display_Customer_Id</Form.Label>
                                <Form.Control type="text" placeholder="Enter Your displayCustomerId" name="displayCustomerId" value={displayCustomerId} onChange={e => onInputChange(e)} />
                            </Form.Group>
                            <Form.Group as={Col} md="6" >
                                <Form.Label>Is_Active</Form.Label>
                                <Form.Select name="isActive" value={isActive} onChange={e => onInputChange(e)} >
                                    <option value='Y'>Yes</option>
                                    <option value='N'>No</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" >
                                <Form.Label>First_Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Your first Name" name="firstName" value={firstName} onChange={e => onInputChange(e)} />
                            </Form.Group>
                            <Form.Group as={Col} md="6" >
                                <Form.Label>Last_Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Your last Name" name="lastName" value={lastName} onChange={e => onInputChange(e)} />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6">
                                <Form.Label>Gender </Form.Label>
                                <Form.Select name="gender" value={gender} onChange={e => onInputChange(e)}>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group as={Col} md="6" >
                                <Form.Label>dob</Form.Label>
                                <Form.Control type="text" placeholder="Enter Your dd-mm-yyyy" name="dob" value={dob} onChange={e => onInputChange(e)} />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" >
                                <Form.Label>Mobile_No</Form.Label>
                                <Form.Control type="text" placeholder="Enter Your mobileNo" name="mobileNo" value={mobileNo} onChange={e => onInputChange(e)} />
                            </Form.Group>
                            <Form.Group as={Col} md="6" >
                                <Form.Label>Email_Id</Form.Label>
                                <Form.Control type="text" placeholder="Enter Your emailId" name="emailId" value={emailId} onChange={e => onInputChange(e)} />
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-auto" >
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Flat no, streat No," name="address" value={address} onChange={e => onInputChange(e)} />
                        </Form.Group>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6">
                                <Form.Label>District</Form.Label>
                                <Form.Control type="text" placeholder="Enter Your district" name="district" value={district} onChange={e => onInputChange(e)} />
                            </Form.Group>
                            <Form.Group as={Col} md="6">
                                <Form.Label>State</Form.Label>
                                <Form.Control type="text" placeholder="Enter Your state" name="state" value={state} onChange={e => onInputChange(e)} />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" >
                                <Form.Label>Country</Form.Label>
                                <Form.Control type="text" placeholder="Enter Your country" name="country" value={country} onChange={e => onInputChange(e)} />
                            </Form.Group>
                            <Form.Group as={Col} md="6" >
                                <Form.Label>Pin_Code</Form.Label>
                                <Form.Control type="number" placeholder="Enter Your pinCode" name="pinCode" value={pinCode} onChange={e => onInputChange(e)} />
                            </Form.Group>
                        </Row>
                    </div>
                    <div>
                        <Button className="btn btn-primary" style={{ background: '#1873CC', margin: '10px 10px 10px 100px' }}>Update Customer</Button>
                        <NavLink className="btn btn-primary mr-2" to="/customer" style={{ background: 'red', margin: '10px 0 10px 50px' }} onClick={closeModal}>Cancle</NavLink>
                    </div>
                </Form>
            </div>
        </div>
    );
}
export default UpdateCustomer; 