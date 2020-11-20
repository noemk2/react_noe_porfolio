import "./Navbar.css";
import { Nav, Navbar as Navo } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  return (
    <>
      <Navo bg="primary" variant="dark">
        <Navo.Brand href="#home">NoeApp</Navo.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="Projects">Projects</Nav.Link>
          {/*  
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
*/}
        </Nav>
      </Navo>
    </>
  );
}

export default Navbar;
