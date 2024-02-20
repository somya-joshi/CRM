import React, { useState, useEffect } from "react";
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import { NavLink } from "react-router-dom";


const modalContainer = {background:"white",
position:"fixed", //important
top:"50%", 
left:"50%",
transform:"translate(-50%,-50%)",
width: '500px',
 height: '450px',
borderRadius: '10px',
 boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' 

}

const PlaceOrder = () => {
  const initialValue = { mobileNo: "", productName: "", couponCode: "" }
  const [order, setOrder] = useState(initialValue);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const { mobileNo, productName, couponCode } = order;
  const onInputChange = e => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validate(order));
    setIsSubmit(true);
    await axios.post("http://localhost:8080/placeorder", order)
  };
  useEffect(() => {
    console.log(errors);
    if (Object.keys(errors).length === 0 && isSubmit) {
      console.log(errors);
    }
  }, [errors]);

  const validate = (values) => {
    const errors = {};

    if (values.mobileNo.length === 0) {
      errors.mobileNo = "mobileNo is required!";
    }
    if (values.productName.length === 0) {
      errors.productName = "productName is required!";
    }
    return errors;
  }

  return (
    <div style={{margin:"100px"}} >
      <div style={modalContainer}>
        <Form onSubmit={e => handleSubmit(e)}>
          <div style={{ height: '50px', background: '#1873CC'}}><h2>Place order</h2></div>
          {Object.keys(errors).length === 0 && isSubmit ? <p  style={{textAlign:'center', color:'green', fontSize: '20px'}}>Your Order successfully Place</p> : <p style={{textAlign:'center'}}></p>}
          <div style={{ margin:"5px 30px 1px 30px"}}>
            <Form.Group className="mb-auto">
              <Form.Label>Mobile-No</Form.Label>
              <Form.Control type="text" placeholder="Enter Your Mobile No" name="mobileNo" value={mobileNo} onChange={e => onInputChange(e)} />
            </Form.Group>
            <p style={{ color: "red", padding: '0' }}>{errors.mobileNo}</p>
           
            <Form.Group className="mb-auto">
              <Form.Label>product-Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Your Product Name" name="productName" value={productName} onChange={e => onInputChange(e)} />
            </Form.Group>
            <p style={{ color: "red"}}>{errors.productName}</p>
           
            <Form.Group className="mb-auto" >
              <Form.Label>Coupon-Code</Form.Label>
              <Form.Control type="text" placeholder="Enter Your Coupon Code" name="couponCode" value={couponCode} onChange={e => onInputChange(e)} />
            </Form.Group>
          </div>
          <div>
          <button className="btn btn-primary" style={{background:'#1873CC',marginLeft:'70px',marginTop:'30px'}}>Place Order</button>
          <NavLink className="btn btn-primary mr-2" to="/" style={{ background: 'red', marginLeft: '30px', marginTop: '30px' }} >Cancle</NavLink>
          </div> 
        </Form>
      </div>
    </div>
  );
}


export default PlaceOrder;
