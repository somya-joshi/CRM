import {React, useState} from 'react'
import Button from 'react-bootstrap/Button';
import UpdateOrder from './UpdateOrder';
import ReadOrderList from './ReadOrderList';


const Modal = () => {
    
    const [open, SetOpen] = useState(false); //open place order 
   
    const handleOpen = () => {
        SetOpen(true) //open place order 
      }
      const handleClose = () => {
        SetOpen(false) //close place order 
      }
  return (
    <div>
       {/* <Button variant="outline-primary" onClick={()=>setOpenModal(true)}>open Modal</Button>  */}
       {openModal && <MyNavbar closeModal = {closeModal}/>}
       { <ReadOrderList handleOpen = {handleOpen} handleClose = {handleClose}/>}
    </div>
  )
}

export default Modal