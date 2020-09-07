import React, { Component } from "react";
import logo from "./../../assets/img/logo.png";
import { Nav, Image, Navbar } from "react-bootstrap";
import Avatar from "./../../assets/img/img_avatar.png";

const styles = {
  Navbar: {
    paddingTop: "0px",
    paddingBottom: "0px"
  },
  Navlink: {
    color: "#dcdcdc"
  }
};

class PrimaryHeader extends Component {
  render() {
    return (
      <div>
        <Navbar
          collapseOnSelect
          expand="lg"
          style={styles.Navbar}
          className="nav-bg"
          variant="dark"
          
        >
          <Navbar.Brand href="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#T1" style={styles.Navlink} className="Nan-content">
                {" | "} <small>Username</small>
                <Image className="user-avatar Nan-content" src={Avatar} alt="First slide" />
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#T2" style={styles.Navlink} className="Nan-content">
                <small>Home</small>
              </Nav.Link>
              <Nav.Link href="#T3" style={styles.Navlink} className="Nan-content">
                {" | "}<small>My Profile</small>
              </Nav.Link>
              <Nav.Link href="#T4" style={styles.Navlink} className="Nan-content">
                {" | "}<small>Search</small>
              </Nav.Link>
              <Nav.Link href="#T5" style={styles.Navlink} className="Nan-content">
                {" | "}<small>Help</small>
              </Nav.Link>
              <Nav.Link href="#T5" style={styles.Navlink} className="Nan-content">
                {" | "}<small>Competitions</small>
              </Nav.Link>
              <Nav.Link href="#T6" style={styles.Navlink} className="Nan-content">
                {" | "}<small>Leader board</small>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default PrimaryHeader;
