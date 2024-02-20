import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


const ReadOrderByMobNo = () => {
  const [orders, setOrders] = useState([]);
  const {mobileNo} = useParams();

  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => setOpenModal(false);
  const openCreate = () => setOpenModal(true);
  const openUpdate = () => setOpenModal(true);

  const getOrders = async () => {
    const result = await axios.get(`http://localhost:8080/getcustomerorderbymobileno/${mobileNo}`);
    setOrders(result.data);
  };

  useEffect(() => {
    getOrders();
  }, []);
//********************delete order************************ */
  const deletehandler = async (displayOrderId) => {
    await axios.delete(`http://localhost:8080/deleteorder/${displayOrderId}`);
    getOrders();
  };

  return (
    <div>
      <div style={{ margin:"100px 0 0 300px"
        , overflow: "auto", width: "1000px", height: "300px", boxShadow: ' 5px 5px 10px #808080'
      }}>
         <Stack direction="row" spacing={2} sx={{ background: "#87CEFA", width: "1710px", color: "white"}}>
         <Link to = "/placeorder" style={{background:"green", color:"white", height:"50px", width:"200px", borderRadius:"5px", textAlign:"center"}}><h4> place Order</h4></Link>
        <h1 style={{paddingLeft:'200px'}}>Read Order Details </h1>
        </Stack>
        <Table striped bordered hover size="sm">
          <thead className='thead-dark'>
            <tr style={{textAlign: 'center'}}>
              <th>displayOrderId</th>
              <th>customerName </th>
              <th>productName</th>
              <th>mobileNo</th>
              <th>modelNo</th>
              <th>brandName</th>
              <th>ProductColor </th>
              <th>category</th>
              <th>subCategory</th>
              <th>discription</th>
              <th>orderDate </th>
              <th>expectedDeliveryDate</th>
              <th>logisticName</th>
              <th>awbNo</th>
              <th>couponCode </th>
              <th>action </th>
            </tr>
          </thead>
          <tbody >
            {
              orders.map((orders, index) => {
                return (
                  <tr key={index}>
                    <td >{orders.displayOrderId}</td>
                    <td>{orders.customerName}</td>
                    <td>{orders.productName}</td>
                    <td>{orders.mobileNo}</td>
                    <td>{orders.modelNo}</td>
                    <td>{orders.brandName}</td>
                    <td>{orders.ProductColor}</td>
                    <td>{orders.category}</td>
                    <td>{orders.subCategory}</td>
                    <td>{orders.discription}</td>
                    <td>{orders.orderDate}</td>
                    <td>{orders.expectedDeliveryDate}</td>
                    <td>{orders.logisticName}</td>
                    <td>{orders.awbNo}</td>
                    <td>{orders.couponCode}</td>
                    <td>
                      <Stack direction="row" spacing={2}>
                      <Link className="btn btn-primary mr-2" to={`/updateorder/${orders.displayOrderId}`}  >{<EditIcon />}</Link>
                      <Link className="btn btn-danger mr-2" onClick={() => deletehandler(orders.displayOrderId)}>{<DeleteIcon />}</Link>
                      </Stack>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>

      </div>
<div>
</div>
    </div>
  );
}

export default ReadOrderByMobNo
  