
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded';
import Form from 'react-bootstrap/Form';
 import'./Test.css'

function Test() {
  return (
    <div className='cont'>
    <div className='container'>
    {/* <div class="topnav">
  <input type="text" placeholder="Search.."/>
</div> */}
     <Form>
      <div className='orderheading'><h2>Read order</h2></div>
      <div Style= {{marginLeft:'30px', marginRight:'30px'}}>
      <Form.Group className="mb-3">
        <Form.Label>Mobile-No</Form.Label>
        <Form.Control  type="text"name="mobileNo"
              placeholder="Enter Your Mobile No"/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      
      <Form.Group className="mb-3" >
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      </div>
      <div  className='buttondiv'> 
      <Button className ='buttonplace'variant="contained" sx={{marginRight:'80px'}} endIcon={<SendIcon />}>Place</Button>
      <Button variant="contained" endIcon={<DisabledByDefaultRoundedIcon />}>cancle</Button>
      </div>
    </Form>
    </div>
     </div>
  
  );
}

export default Test
