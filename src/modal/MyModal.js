import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';

const MyModal = ({closeModal}) => {
    const modalContainer = {background:"white",
                            position:"fixed", //important
                            top:"50%", 
                            left:"50%",
                            transform:"translate(-50%,-50%)",
                            padding: "3rem",
                            borderRadius:"0.5rem",
                             maxWidth:"30rem",
    }
//use only hide scroll bar of niche wale page ka
    useEffect(()=>{
        document.body.style.overflow="hidden";
        return()=>{
            document.body.style.overflow="scroll";
        };
    }, []);
    //***************** */
  return(
    <div style={{margin:"5rem"}} >
          <div style={{position:"fixed", left:0, right:0, bottom:0,top:0,background:"#A9A9A9"}} 
          onClick={closeModal}></div>
          <div style={modalContainer}>
            <div>
                <h1>my Modal</h1>
                <p1>Trinamool Congress bot leader Mahua Moitra who was expelled
                 vacated her government bungalow in Delhi at 10 am today, January 19, Friday.
                 </p1>
            </div>
                 <Button  variant="primary">sumit</Button>
                 <Button  variant="primary"onClick={closeModal}>Accept it</Button>
            </div>
    </div>
  )
}
export default MyModal