import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PlaceOrder from './PlaceOrder';
import UpdateOrder from './UpdateOrder';




const ReadOrderList = () => {
  const [orders, setOrders] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const closeOrder = () => setOpenModal(false);
  const openPlaceOrder = () => setOpenModal(true);
  const openUpdateOrder = () => setOpenModal(true);


  const getOrders = async () => {
    const result = await axios.get('http://localhost:8080/getcustomerorders')
    setOrders(result.data.reverse());
  };

  useEffect(() => {
    getOrders();
  }, []);

  const deletehandler = async (displayOrderId) => {

    await axios.delete(`http://localhost:8080/deleteorder/${displayOrderId}`);
    alert("Your order is successfully deleted")
    getOrders();
  };

  return (
    <div>
      <div style={{
        marginTop: "100px", marginLeft: "300px", overflow: "auto", width: "1000px", height: "400px", boxShadow: ' 5px 5px 10px #808080'
      }}>
        <Stack direction="row" spacing={2} sx={{ background: "#87CEFA", width: "1710px", color: "white" }}>
          <Button variant="contained" color="success" onClick={openPlaceOrder}>Place Order</Button>
          {openModal && <PlaceOrder closeOrder={closeOrder} />}
          {/* <Link to="/placeorder" variant="contained" style={{width:'200px', height:'50px'}}></Link> */}
          <h1 style={{ paddingLeft: '200px' }}>Read Order Details </h1>
        </Stack>
        <Table striped bordered hover size="sm">
          <thead className='thead-dark'>
            <tr style={{ textAlign: 'center' }}>
              <th>Display_Order_Id</th>
              <th>Customer_Name </th>
              <th>Product_Name</th>
              <th>Bobile_No</th>
              <th>Model_No</th>
              <th>Brand_Name</th>
              <th>Product_Color </th>
              <th>Category</th>
              <th>SubCategory</th>
              <th>Discription</th>
              <th>Order_Date </th>
              <th>Expected_Delivery_Date</th>
              <th>Logistic_Name</th>
              <th>Awb_No</th>
              <th>Coupon_Code </th>
              <th>Action </th>
            </tr>
          </thead>
          <tbody >
            {
              orders.map((order, index) => {
                return (
                  <tr key={index}>
                    <td >{order.displayOrderId}</td>
                    <td>{order.customerName}</td>
                    <td>{order.productName}</td>
                    <td>{order.mobileNo}</td>
                    <td>{order.modelNo}</td>
                    <td>{order.brandName}</td>
                    <td>{order.ProductColor}</td>
                    <td>{order.category}</td>
                    <td>{order.subCategory}</td>
                    <td>{order.discription}</td>
                    <td>{order.orderDate}</td>
                    <td>{order.expectedDeliveryDate}</td>
                    <td>{order.logisticName}</td>
                    <td>{order.awbNo}</td>
                    <td>{order.couponCode}</td>
                    <td>
                      <Stack direction="row" spacing={2}>
                        <Button variant="contained" color="success" onClick={openUpdateOrder}>{<EditIcon />}</Button>
                        {openModal && <UpdateOrder closeOrder={closeOrder} displayOrderId={order.displayOrderId} />}
                        <Link className="btn btn-danger mr-2" variant="danger mx=3" onClick={() => deletehandler(order.displayOrderId)}>{<DeleteIcon />}</Link>
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



export default ReadOrderList;