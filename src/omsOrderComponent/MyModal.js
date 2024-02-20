
import Button from 'react-bootstrap/Button';

const modalContainer = {background:"white",
position:"fixed", //important
top:"50%", 
left:"50%",
transform:"translate(-50%,-50%)",
padding: "3rem",
borderRadius:"0.5rem",
 maxWidth:"30rem",
}

const MyModal = ({closeModal}) => {
  return(
    <div style={{margin:"5rem"}} >
          <div style={{position:"fixed", left:0, right:0, bottom:0,top:'50px',background:"#A9A9A9"}} 
          onClick={closeModal}></div>
          <div style={modalContainer}>
            <div>
              <h1>Place Order</h1>
               <p>ggggggggggggggggggggggffffffffffffffffffff
                fdddddddddddddddddddhhhhhhhhhhhhh</p>
            </div>
                 <Button  variant="primary">sumit</Button>
                 <Button  variant="primary"onClick={closeModal}>Accept it</Button>
            </div>
    </div>
  )
}
export default MyModal