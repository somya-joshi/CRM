import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { Link, NavLink, } from "react-router-dom";
import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded';
import axios from 'axios';
import { Button } from "react-bootstrap";

//{background: 'white', width: '500px', height: '450px', margin: '200px', borderRadius: '10px', 
//boxShadow: ' rgba(0, 0, 0, 0.24) 0px 3px 8px' }

const modalContainer = {
  background: "white",
  position: "fixed", //important
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  width: '500px',
  height: '400px',
  borderRadius: '10px',
  boxShadow: ' rgba(0, 0, 0, 0.24) 0px 3px 8px'

}

const UpdateOrder = ({ closeOrder, displayOrderId }) => {
  const initialValue = { displayOrderId: "", logisticName: "", awbNo: "" }
  const [order, setOrder] = useState(initialValue);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);



  const { logisticName, awbNo } = order;
  const onInputChange = e => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validate(order));
    setIsSubmit(true);
    await axios.put(`http://localhost:8080/updateorderdetails`, order);
    // history("/");
  };

  //******************GET ORDER****************************** */
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/getcustomerorderbydisplayorderid/${displayOrderId}`);
    setOrder(result.data);
  };
  useEffect(() => {
    loadUser();
  }, []);

 

  //******************VALIDATE****************************** */

  const validate = (values) => {
    const errors = {};
    if (!values.logisticName) {
      errors.logisticName = "logistic Name is required!";
    }
    if (!values.awbNo) {
      errors.awbNo = "awbNo  is required!";
    }
    return errors;
  }
  useEffect(() => {
    console.log(errors);
    if (Object.keys(errors).length === 0 && isSubmit) {
      console.log(errors);
    }
  }, [errors]);

  return (
    <div style={{ marginTop: "1000px" }} >
      <div style={{ position: "fixed", left: 0, right: 0, bottom: 0, top: 0, background: "#A9A9A9" }}
        onClick={closeOrder}></div>
      <div style={modalContainer} >
        <div style={{ height: '50px', background: '#1873CC' }}>
          <span style={{ color: "white", margin: "20px 90px 0 130px", fontSize: "30px" }}>Update Customer</span>
          <Link style={{ color: "red" }} onClick={closeOrder}>{<DisabledByDefaultRoundedIcon />}</Link>
          {Object.keys(errors).length === 0 && isSubmit ? <p style={{ textAlign: 'center', color: 'ForestGreen', fontSize: '20px' }}>Your Order successfully Edited</p> : <p style={{ textAlign: 'center' }}></p>}
        </div>
        <Form onSubmit={e => handleSubmit(e)}>
          <div style={{ margin: "5px 30px 1px 30px" }}>

            <Form.Group className="mb-auto">
              <Form.Label>Display_Order_Id</Form.Label>
              <Form.Control type="text" placeholder="Enter Your displayOrderId" name="displayOrderId" value={displayOrderId} onChange={e => onInputChange(e)} />
            </Form.Group>
            <p style={{ color: "red" }}>{errors.displayOrderId}</p>

            <Form.Group className="mb-auto">
              <Form.Label>Logistic_Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Your logistic Name" name="logisticName" value={logisticName} onChange={e => onInputChange(e)} />
            </Form.Group>
            <p style={{ color: "red", padding: '0' }}>{errors.logisticName}</p>
            <Form.Group className="mb-auto">
              <Form.Label>Awb_No</Form.Label>
              <Form.Control type="text" placeholder="Enter Your awb No" name="awbNo" value={awbNo} onChange={e => onInputChange(e)} />
            </Form.Group>
            <p style={{ color: "red" }}>{errors.awbNo}</p>

          </div>
          <div>
            <Button className="btn btn-primary" style={{ background: '#1873CC', margin: '10px 50px 10px 120px' }}>Update Order</Button>
            <Button className="btn btn-primary mr-6" style={{ color: "white" }}  onClick={closeOrder}>{<DisabledByDefaultRoundedIcon />}</Button>
    
          </div>
        </Form>
      </div>
    </div>



  );
};

export default UpdateOrder;


