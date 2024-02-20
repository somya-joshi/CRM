import {React, useState} from 'react'
import Button from 'react-bootstrap/Button';
import PlaceOrder from './PlaceOrder';


const Modal = () => {
    const[openModal, setOpenModal] = useState(false);
    const closeModal = ()=>setOpenModal(false);
  return (
    <div>
      <Button variant="primary"  onClick={()=>setOpenModal(true)}>Place Order</Button>
       {openModal && <PlaceOrder closeModal = {closeModal}/>}
    </div>
  )
}

export default Modal
