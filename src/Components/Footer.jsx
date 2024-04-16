import { Nav, Navbar } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-links">
        <Navbar.Brand href="/">
          <img
            src={window.location.origin + "/i2clogo.png"}
            width="55"
            height="34"
            class="d-inline-block align-top"
            alt=""
          />
        </Navbar.Brand>
        <Navbar className=" header ">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav ">
            <Nav className="header fotter-items">
              <div className="links footer-content-space ">FAQs</div>
              <div className="links footer-content-space ">Privacy Policy</div>
              <div className="links footer-content-space ">Other</div>
              <button className="contactus-btn">Contact us</button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div className="copyrights">
        Copyright © 2023 i2c inc. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
