import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const MyNavbar = () => {

  return (
    <div style={{ backgroundColor: "#1E90FF", height: "50px", marginBottom: "100px" }}>
      <Navbar>
        <Container>
          <Nav>
            <Nav.Link >Home</Nav.Link>
            <Nav.Link >link</Nav.Link>
            <Nav.Link >Link</Nav.Link>
            <NavDropdown >
              <NavDropdown.Item >Action</NavDropdown.Item>
              <NavDropdown.Item>Another action</NavDropdown.Item>
              <NavDropdown.Item >Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Separated link </NavDropdown.Item>
            </NavDropdown>
            <Link to = "/placeod">
         <Button variant="primary">place order</Button>
         </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default MyNavbar
