import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from 'axios'

//{background: 'white', width: '500px', height: '450px', margin: '200px', borderRadius: '10px', 
//boxShadow: ' rgba(0, 0, 0, 0.24) 0px 3px 8px' }

  const modalContainer = {background:"white",
                          position:"fixed", //important
                          top:"50%", 
                          left:"50%",
                          transform:"translate(-50%,-50%)",
                          width: '500px', height: '450px',
                          borderRadius: '10px',
                        boxShadow: ' rgba(0, 0, 0, 0.24) 0px 3px 8px' 

  }

const UpdateComplaint = () => {
    const initialValue = { displayComplaintId: "", complaintStatus: "", resolverName: "" }
    const [complaint, setComplaint] = useState(initialValue);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const {displayComplaintId, complaintStatus,resolverName } = complaint;
  const onInputChange = e => {
    setComplaint({ ...complaint, [e.target.name]: e.target.value });
  };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErrors(validate(complaint));
//     setIsSubmit(true);
//       await axios.put(`http://localhost:8080/updatecomplaint`, complaint);
//       setComplaint();
//    // history("/");
//   };


  const getallcustomercomplaintbydisplayComplaintId = async (displayComplaintId) => {
  
    const result = await axios.get(`http://localhost:8080/getallcustomercomplaintbydisplayComplaintId/${displayComplaintId}`);
    console.log(result.data)
    setComplaint(result.data);
  };
  useEffect(() => {
    getallcustomercomplaintbydisplayComplaintId();
  }, [complaint]);
//******************VALIDATE****************************** */
// const validate = (values) => {
//     const errors = {};
//     if (!values.displayComplaintId) {
//       errors.displayComplaintId = "display Complaint Id is required!";
//     }
//     if (!values.complaintStatus) {
//       errors.complaintStatus = "complaint Status  is required!";
//     }
//     if (!values.resolverName) {
//         errors.resolverName = "resolver Name is required!";
//       }
//     return errors;
//   }
//     useEffect(() => {
//       console.log(errors);
//       if (Object.keys(errors).length === 0 && isSubmit) {
//         console.log(errors);
//       }
//     }, [errors]);

  return (
    <div >
    <div style={modalContainer} >
      <div style={{ height: '50px', background: '#1873CC', textAlign:'center'}}><h2>Update Complaint</h2></div>
      <Form >  
      {/* onSubmit={e => handleSubmit(e)} */}
        <div style={{ margin: "5px 30px 1px 30px" }}>

          <Form.Group className="mb-auto">
            <Form.Label>display ComplaintId</Form.Label>
            <Form.Control type="text" placeholder="Enter Your display Complaint Id" name="displayComplaintId" value={displayComplaintId} onChange={e => onInputChange(e)} />
          </Form.Group>


          <Form.Group className="mb-auto">
            <Form.Label>complaint Status</Form.Label>
            <Form.Control type="text" placeholder="Enter Your complaint Status Name" name="complaintStatus" value={complaintStatus} onChange={e => onInputChange(e)} />
          </Form.Group>
          
          <Form.Group className="mb-auto">
            <Form.Label>resolver Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Your resolver Name" name="resolverName" value={resolverName} onChange={e => onInputChange(e)} />
          </Form.Group>
        
        </div>
        <div>
          <button className="btn btn-primary" style={{ background: '#1873CC', marginLeft: '70px', marginTop: '30px' }}>Update Complaint</button>
          <NavLink className="btn btn-primary mr-2" to="/" style={{ background: 'red', marginLeft: '30px', marginTop: '30px' }} >Cancle</NavLink>
        </div>
      </Form>
    </div>
  </div>


    
  );
};

export default UpdateComplaint;
