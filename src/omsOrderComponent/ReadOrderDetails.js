import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { NavLink } from 'react-router-dom';


const ReadOrderDetails = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/getcustomerorders");
    setOrders(result.data.reverse());
  };

  const deletehandler = async (displayOrderId) => {
    await axios.delete(`http://localhost:8080/deleteorder/${displayOrderId}`);
    loadUsers();
  };


  return (
    <div>

      <div style={{
        marginTop: "100px", marginLeft: "200px",
        overflow: "auto", width: "1000px", height: "400px", boxShadow: ' 5px 5px 10px #808080'
      }}>
        <NavLink to="/placeod">
          <Button variant="primary">place order</Button>
        </NavLink>
        <h1 style={{ background: "#87CEFA", textAlign: 'center', color: "white" }}>Read Order Details </h1>
        <Table striped bordered hover size="sm">
          <thead className='thead-dark'>
            <tr>
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
              orders.map((order, index) => {
                return(
                <tr key ={index}>
                  <td>{order.displayOrderId}</td>
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
                  <td><NavLink   to={`/updateorder/${order.id}`}><Button variant="primary">Update order</Button></NavLink></td>
                  <td> <Button variant="outline-primary">Veiw</Button></td>
                  <td> <Button variant="danger" onClick={() => deletehandler(order.displayOrderId)}>Delete</Button></td>
                </tr>
              )})}
             
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default ReadOrderDetails
