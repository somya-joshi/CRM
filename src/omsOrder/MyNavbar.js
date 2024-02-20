
import Nav from 'react-bootstrap/Nav';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import React, { useState } from "react";
import Button from '@mui/material/Button';

const textstyle={color:'white',
margin:'5px 1px  5px 1px',
fontSize: '25px',
fontFamily: "Times New Roman Times serif"

}

const MyNavbar = () => {
  const[openModal, setOpenModal] = useState(false);
  const closeModal = ()=>setOpenModal(false);

  return (
   <div> 
    <div style={{ backgroundColor: "#8533ff", height: "70px" , color:'white'}}>
    <Nav defaultActiveKey="/home" as="ul">
    <Nav.Item as="li">
        <Nav.Link style={textstyle}>Home</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link style={textstyle} href = '/placeorder'>Complaint Punch</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link style={textstyle} >Link</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
       <Button variant="outline-primary" style={{fontSize:'5px', textAlign:'center'}} onClick={()=>setOpenModal(true)}><h5>open Modal</h5></Button> 
       {/* {openModal && <ReadComplaint closeModal = {closeModal}/>} */}
      </Nav.Item> 
      <span style={{marginLeft:'20%'}}>
      <h5>{<CallIcon/>} 899352666</h5>
      <h5>{<MailIcon/>} crm@gmail.com</h5>
      </span>
    </Nav> 
     </div> 
    </div> 
  );
}


export default MyNavbar
