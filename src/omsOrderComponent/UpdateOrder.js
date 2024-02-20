import React, { useState,useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const mystyle = {
    background: 'lightblue',
    width: '500px',
    height: '500px',
    margin: '100px',
    padding: '10px',
    textAlign: 'center',
    borderRadius: '20px',
    boxShadow: '5px 5px 5px gray'
}

const UpdateOrder = () => {

const{id}= useParams();

    const [order, setOrder] = useState({
        displayOrderId: "",
        awbNo: "",
        logisticName: ""
    })
    const {awbNo, logisticName,displayOrderId } = order;

 
    const onInputChange = (e) => {
        setOrder({ ...order, [e.target.name]: e.target.value });
    };

  useEffect(() => {
    getOrder();
  }, []);
  
    const getOrder = async () => {
        const result = await axios.put(`http://localhost:8080/updateorderdetails/${id}`);
       setOrder(result.date);
      };

    return (
        <div style={mystyle}>
            <div className="d-flex justify-content-between m-3">
                <h2>UPDATE ORDER </h2>
                <Link to="/">
                    <Button variant="primary">Show Order</Button>
                </Link>
            </div>
            {/* onSubmit={(e) => sumitHandler(e)} */}
            <Form >
                <Form.Group className="mb-3" >
                    <Form.Label>displayOrderId</Form.Label>
                    <Form.Control type="text" placeholder="display Order Id" name="displayOrderId" value={displayOrderId} onChange={(e) => onInputChange(e)} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>awbNo</Form.Label>
                    <Form.Control type="text" name="awbNo" value={awbNo} onChange={(e) => onInputChange(e)} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>logisticName</Form.Label>
                    <Form.Control type="text" name="logistic Name" value={logisticName} onChange={(e) => onInputChange(e)} />
                </Form.Group>
                <label className="col-md-3 control-label"></label>
                <div className="col-md-10">
                    <Button type="submit"  >Send </Button>
                    <Link to="/">
                        <Button variant="primary">cancel</Button>
                    </Link>
                </div>

            </Form>
        </div >
    );

}

export default UpdateOrder
