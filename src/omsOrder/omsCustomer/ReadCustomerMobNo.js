import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import CreateCustomer from './CreateCustomer'


const ReadCustomerMobNo = () => {
    const [customer, SetCustomer] = useState([]);
    const {mobileNo} = useParams();
    const {displayComplaintId} = useParams();


    const[openModal, setOpenModal] = useState(false);
    const closeModal = ()=>setOpenModal(false);

    const getCustomerByMobileNo = async () => {
         const result = await axios.get(`http://localhost:8080/getcustomerbymobileno/${mobileNo}`);
         SetCustomer(result.data);
       };
     
       useEffect(() => {
        getCustomerByMobileNo();
       }, []);


       //********************delete complaint************************ */
  const deletehandler = async () => {
    await axios.delete(`http://localhost:8080/deletecustomerbyid/${displayComplaintId}`);
    alert("your complaint successfully deleted")
    getCustomerByMobileNo();
  };
       return (
        <div>
          <div style={{
             margin:"100px 0 0 300px", overflow: "auto", width: "800px", height: "auto", boxShadow: ' 5px 5px 10px #808080'
          }}>
             <Stack direction="row" spacing={2} sx={{ background: "#87CEFA", width: "1710px", color: "white"}}>
            <Button variant="success " onClick={()=>setOpenModal(true)}>Create Customer</Button> 
            <h1 style={{paddingLeft:'10%'}}>Read Customer By mobileNo </h1>
            </Stack>
            <Table striped bordered hover size="sm">
              <thead className='thead-dark'>
                <tr style={{textAlign: 'center'}}>
                  <th>display_Customer_Id</th>
                  <th>First_Name </th>
                  <th>lastName</th>
                  <th>Date_Of_Birth</th>
                  <th>Gender</th>
                  <th>Mobile_No</th>
                  <th>EmailId </th>
                  <th>Address</th>
                  <th>District</th>
                  <th>State</th>
                  <th>Country</th>
                  <th>PinCode </th>
                  <th>Action </th>
                </tr>
              </thead>
              <tbody >
                      <tr>
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
                        <td>
                        <Stack direction="row" spacing={2}>
                      <Link className="btn btn-primary mr-2" to="/updatecomplaint">{<EditIcon />}</Link>
                      <Button variant="danger" onClick={() => deletehandler(customer.displayCustomerId)}>Delete</Button>
                      </Stack>
                    </td>
                  </tr>
          </tbody>
        </Table>
        {openModal && <CreateCustomer closeModal = {closeModal}/>}
      </div>

    </div>
  );
}
export default ReadCustomerMobNo
  