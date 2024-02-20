import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import { Link } from "react-router-dom"
import Button from '@mui/material/Button';
import CreateCustomer from './CreateCustomer';
import UpdateCustomer from './UpdateCustomer'


const ReadCustomerList = () => {
    const [customers, SetCustomers] = useState([]);
    const [openModal, setOpenModal] = useState(false);

    const closeModal = () => setOpenModal(false);
    const openCreate = () => setOpenModal(true);
    const openUpdate = () => setOpenModal(true);
     

    const getCustomer = async () => {
        const result = await axios.get(`http://localhost:8080/getallcustomers`);
        SetCustomers(result.data);
    };

    useEffect(() => {
        getCustomer();
    }, [customers]);
    //********************delete complaint************************ *


    const deletehandler = async (displayCustomerId) => {
        await axios.delete(`http://localhost:8080/deletecustomerbyid/${displayCustomerId}`);
        // alert("your complaint successfully deleted")
        getCustomer();
    };

    return (
        <div>
            <div style={{
                margin: "100px 0 0 300px", overflow: "auto", width: "800px", height: "500px", boxShadow: ' 5px 5px 10px #808080'
            }}>
                <Stack direction="row" spacing={2} sx={{ background: "#87CEFA", width: "1710px", color: "white" }}>
                <Button variant="contained" color="success" onClick={openCreate}>Create Customer</Button>
                    {openModal && <CreateCustomer closeModal={closeModal} />}
                    <h1 style={{ paddingLeft: '10%' }}>Read Customer By mobileNo </h1>
                </Stack>
                <Table striped bordered hover size="sm">
                    <thead className='thead-dark'>
                        <tr style={{ textAlign: 'center' }}>
                            <th>display_Customer_Id</th>
                            <th>First_Name </th>
                            <th>last_Name</th>
                            <th>Date_Of_Birth</th>
                            <th>Gender</th>
                            <th>Mobile_No</th>
                            <th>EmailId </th>
                            <th>Address</th>
                            <th>District</th>
                            <th>State</th>
                            <th>Country</th>
                            <th>Pin_Code </th>
                            <th>Is_Active </th>
                            <th>Action </th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            customers.map((customer, index) => {
                                return (
                                    <tr key={index}>
                                        <td >{customer.displayCustomerId}</td>
                                        <td>{customer.firstName}</td>
                                        <td>{customer.lastName}</td>
                                        <td>{customer.dob}</td>
                                        <td>{customer.gender}</td>
                                        <td>{customer.mobileNo}</td>
                                        <td>{customer.emailId}</td>
                                        <td>{customer.address}</td>
                                        <td>{customer.district}</td>
                                        <td>{customer.state}</td>
                                        <td>{customer.country}</td>
                                        <td>{customer.pinCode}</td>
                                        <td>{customer.isActive}</td>
                                        <td>
                                            <Stack direction="row" spacing={2}>
                                            <Button variant="contained" color="success" onClick={openUpdate}>{<EditIcon />}</Button>
                                            {openModal && <UpdateCustomer closeModal={closeModal} displayCustomerId={customer.displayCustomerId}/>}
                                            <Link className="btn btn-danger mr-2" variant="danger mx=3" onClick={() => deletehandler(customer.displayCustomerId)}>{<DeleteIcon />}</Link>
                                            </Stack>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
}
export default ReadCustomerList
