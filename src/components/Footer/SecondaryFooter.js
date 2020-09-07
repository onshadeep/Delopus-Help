import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

const styles = {
  Footerlink: {
    fontSize: "11px",
    textDecoration: "none",
    color: "lightgrey",
    marginLeft: "8px",
    marginRight: "8px"
  }
};

class SecondaryFooter extends Component {
  render() {
    return (
      <div className="nav-bg">
        <Container>
          <Row>
            <Col className="mb-3 mt-3">
              <Row>
                <Col>
                  <a style={styles.Footerlink} href="#T1">
                    HONE
                  </a>
                  <a style={styles.Footerlink} href="#T2">
                    DISCUSS FORUM
                  </a>
                  <a style={styles.Footerlink} href="#T3">
                    HELP
                  </a>
                  <a style={styles.Footerlink} href="#T4">
                    WHY AGORA42.COM?
                  </a>
                  <a style={styles.Footerlink} href="#T5">
                    PRIVACY AND POLICY
                  </a>
                  <a style={styles.Footerlink} href="#T6">
                    SEND FEEDBACK
                  </a>
                  {/* <a style={styles.Footerlink} href="#T6">
                    ONLINE COURSE
                  </a> */}
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="footer-line mt-0 mb-0 pt-0 pb-0"></div>
                </Col>
              </Row>
              <Row>
                <Col>
                  {/* <a style={styles.Footerlink} href="#T1">
                    LEADERBOARD
                  </a> */}
                  <a style={styles.Footerlink} href="#T2">
                    ABOUT
                  </a>
                  <a style={styles.Footerlink} href="#T3">
                    CONTACT
                  </a>
                  <a style={styles.Footerlink} href="#T4">
                    PLACE
                  </a>
                  <a style={styles.Footerlink} href="#T5">
                    OFFICE
                  </a>
                  {/* <a style={styles.Footerlink} href="#T6">
                    PARTNERS
                  </a> */}
                  {/* <a style={styles.Footerlink} href="#T7">
                    WORK WITH US?
                  </a> */}
                  {/* <a style={styles.Footerlink} href="#T8">
                    JOBS
                  </a> */}
                  <a style={styles.Footerlink} href="#T9">
                    HASHTAGS
                  </a>
                  <a style={styles.Footerlink} href="#T10">
                    SITEMAP
                  </a>
                </Col>
              </Row>
            </Col>
            <Col md="auto" className="mt-3 mb-3">
              <div className="Nan-content AfooterCopy mt-2">
                <small>www.agora42.com &copy; {new Date().getFullYear()}</small>
              </div>
            </Col>
            <Col xs lg="2">
              {/* 3 of 3 */}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default SecondaryFooter;
