import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';


const PlaceOd = () => {
    const history = useNavigate();
    const [order, setOrder] = useState({
        mobileNo: "",
        productName: "",
        couponCode: ""
    });
    const { mobileNo, productName, couponCode } = order;

    const onInputChange = (e) => {
        setOrder({ ...order, [e.target.name]: e.target.value });
    };

    const sumitHandler = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/placeorder", order);
        history("/");
    }

    return (
        <div style={{height:"400px", width:"400px", border:"5px solid blue", marginTop:"100px", marginLeft:"100px"}}>
            <div >
                <h1>Place Order</h1>
                <Form onSubmit={(e) => sumitHandler(e)}>
                    <Form.Group className="mb-3" >
                        <Form.Label>mobileNo</Form.Label>

                        <Form.Control type="text" placeholder="10-digit" name="mobileNo" value={mobileNo} onChange={(e) => onInputChange(e)} />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>productName</Form.Label>
                        <Form.Control type="text" name="productName" value={productName} onChange={(e) => onInputChange(e)} />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>couponCode</Form.Label>
                        <Form.Control type="text" name="couponCode" value={couponCode} onChange={(e) => onInputChange(e)} />
                    </Form.Group>
                </Form>
            </div >
            <div className="mb-3">
                <Button variant="primary">sumit</Button>
                <NavLink to = "/"> 
                    <Button variant="info" >concle</Button></NavLink>
            </div >
        </div>
    )
}
export default PlaceOd;
