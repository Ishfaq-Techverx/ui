import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function CollapsibleExample() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary header mb-fixed"
    >
      <>
        <Navbar.Brand href="/">
          <img
            src={window.location.origin + "/i2clogo.png"}
            width="55"
            height="34"
            class="d-inline-block align-top"
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav ">
          <Nav className="me-auto"></Nav>
          <Nav className="header">
            <Nav.Link href="#features" className="links">
              About us
            </Nav.Link>
            <Nav.Link href="#pricing" className="links">
              Registeration
            </Nav.Link>
            <Nav.Link href="#pricing" className="links">
              Careers
            </Nav.Link>

            <button className="contactus-btn">Contact us</button>
          </Nav>
        </Navbar.Collapse>
      </>
    </Navbar>
  );
}

export default CollapsibleExample;
