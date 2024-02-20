import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';



const ReadComplaintMob = () => {
    const [compalintS, setCompalintS] = useState([]);
    const {mobileNo} = useParams();

    const getComplaintByMobileNo = async () => {
        // alert(mobileNo)
         const result = await axios.get(`http://localhost:8080/getallcustomercomplaintbymobNo/${mobileNo}`);
         //console.log(result.data);
         setCompalintS(result.data);
       };
     
       useEffect(() => {
        getComplaintByMobileNo();
       }, []);


       //********************delete complaint************************ */
  const deletehandler = async (displayComplaintId) => {
    await axios.delete(`http://localhost:8080/deletecomplaint/${displayComplaintId}`);
    alert("your complaint successfully deleted")
    getComplaintByMobileNo();
  };
       return (
        <div>
          <div style={{
             margin:"100px 0 0 300px", overflow: "auto", width: "1000px", height: "300px", boxShadow: ' 5px 5px 10px #808080'
          }}>
             <Stack direction="row" spacing={2} sx={{ background: "#87CEFA", width: "1710px", color: "white"}}>
             <Link to = "/placeorder" style={{background:"green", color:"white", height:"50px", width:"200px", borderRadius:"5px", textAlign:"center"}}><h4>Create Complaint </h4></Link>
            <h1 style={{paddingLeft:'10%'}}>Read Complaint By mobileNo </h1>
            </Stack>
            <Table striped bordered hover size="sm">
              <thead className='thead-dark'>
                <tr style={{textAlign: 'center'}}>
                  <th>display_ComplaintId</th>
                  <th>display_OrderId </th>
                  <th>product_Name</th>
                  <th>firstName</th>
                  <th>lastName</th>
                  <th>mobile_No</th>
                  <th>problemDescription </th>
                  <th>complaintDate</th>
                  <th>complaintStatus</th>
                  <th>resolverName</th>
                  <th>resolvedDate</th>
                  <th>Action </th>
                </tr>
              </thead>
              <tbody >
                {
                  compalintS.map((compalint, index) => {
                    return (
                      <tr key={index}>
                        <td >{compalint.displayComplaintId}</td>
                        <td>{compalint.displayOrderId}</td>
                        <td>{compalint.productName}</td>
                        <td>{compalint.firstName}</td>
                        <td>{compalint.lastName}</td>
                        <td>{compalint.mobileNo}</td>
                        <td>{compalint.problemDescription}</td>
                        <td>{compalint.complaintDate}</td>
                        <td>{compalint.complaintStatus}</td>
                        <td>{compalint.resolverName}</td>
                        <td>{compalint.resolvedDate}</td>
                        <td>
                        <Stack direction="row" spacing={2}>
                      <Link className="btn btn-primary mr-2" to="/updatecomplaint">{<EditIcon />}</Link>
                      <Button variant="danger" onClick={() => deletehandler(compalint.displayComplaintId)}>Delete</Button>
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
export default ReadComplaintMob
  