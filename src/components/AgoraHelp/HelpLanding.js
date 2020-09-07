import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import HelpAccount from "./CreateAccount/HelpAccount";
// import HelpPassword from "./EditPassword/HelpPassword";
// import HelpEditProfile from "./EditProfile/HelpEditProfile";
import HelpNeedMore from "./NeedHelp/HelpNeedMore";

import TopQueryHelp from "./TopQueryHelp";

class HelpLanding extends Component {
  render() {
    return (
      <div>
        <section className="A42help-bg">
          <hr className="mt-0 mb-0" />
          <Container>
            <Row>
              <Col className="mt-5 mb-5">
                <h1 className="A42dftag A42font-color">Delopus, Help Centre</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="A42dftag A42shadow A42font-color mb-5">
                  We are here to help you.
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <TopQueryHelp/>
        {/* <HelpAccount/> */}
        {/* <HelpPassword/> */}
        {/* <HelpEditProfile/> */}
        <HelpNeedMore/>
      </div>
    );
  }
}

export default HelpLanding;
