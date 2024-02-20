import {React, useState} from 'react'
import Button from 'react-bootstrap/Button';
import MyModal from './MyModal';


const Modal = () => {
    const[openModal, setOpenModal] = useState(false);
    const closeModal = ()=>setOpenModal(false);
  return (
    <div>
       <Button variant="outline-primary" onClick={()=>setOpenModal(true)}>open Modal</Button> 
       {openModal && <MyModal closeModal = {closeModal}/>}
    </div>
  )
}

export default Modal
