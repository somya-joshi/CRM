import React, { useState, useEffect } from 'react';
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
const ReadComplaint = ({closeModal}) => {

    return (
        <div style={{margin:"50px"}} >
        <div style={{position:"fixed", left:0, right:0, bottom:0,top:0,background:"#A9A9A9"}} 
        onClick={closeModal}></div> <div >
          <div style={modalContainer} >
            <div style={{ height: '50px', background: '#1873CC' }}><h2>Edit Order</h2></div>
            <Form >
              <div style={{ margin: "5px 30px 1px 30px" }}>
    
                <Form.Group className="mb-auto">
                  <Form.Label>display OrderId</Form.Label>
                  <Form.Control type="text" placeholder="Enter Your displayOrderId" name="displayOrderId" />
                </Form.Group>
                {/* <p style={{ color: "red" }}>{errors.displayOrderId}</p> */}
    
                <Form.Group className="mb-auto">
                  <Form.Label>logistic Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Your logistic Name" name="logisticName"/>
                </Form.Group>
                {/* <p style={{ color: "red", padding: '0' }}>{errors.logisticName}</p> */}
                <Form.Group className="mb-auto">
                  <Form.Label>awb No</Form.Label>
                  <Form.Control type="text" placeholder="Enter Your awb No" name="awbNo"  />
                </Form.Group>
                {/* <p style={{ color: "red" }}>{errors.awbNo}</p> */}
    
              </div>
              <div>
                <button className="btn btn-primary" style={{ background: '#1873CC', marginLeft: '70px', marginTop: '30px' }}>Update Order</button>
                <NavLink className="btn btn-primary mr-2" to="/" style={{ background: 'red', marginLeft: '30px', marginTop: '30px' }} >Cancle</NavLink>
              </div>
            </Form>
          </div>
        </div>
        </div>

      );
    };
export default ReadComplaint
