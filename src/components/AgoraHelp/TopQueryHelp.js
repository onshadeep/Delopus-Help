import React from "react";
import { Card, Container, CardGroup } from "react-bootstrap";
import { MdAccountBalance, MdVpnKey } from "react-icons/md";
import { AiFillProfile } from "react-icons/ai";

const styles = {
  Footerlink: {
    textDecoration: "none",
    color: "white"
  },
  A42IconSize: {
    height: "100px",
    width: "100px",
    color: "#f3990f"
  },
  A42Textdeco: {
    textDecoration: "none"
  }
};

function TopQueryHelp() {
  return (
    <div>
      <Container className="mt-8 mb-8">
        <h4>Top Queries</h4>
        <CardGroup>
          <Card className="A42card-hover">
            <div className="A42dftag A42help-bg">
              <MdVpnKey style={styles.A42IconSize} />
            </div>

            <Card.Body>
              <p>
                <small>ABOUT</small>
              </p>
              <Card.Text>
                <a href="#T1" style={styles.A42Textdeco}>
                  How can I change my password and more…{" "}
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="A42card-hover">
            <div className="A42dftag A42help-bg">
              <AiFillProfile style={styles.A42IconSize} />
            </div>
            <Card.Body>
              <p>
                <small>ABOUT</small>
              </p>
              <Card.Text>
                <a href="#T1" style={styles.A42Textdeco}>
                  Edit Profile and Settings...
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="A42card-hover">
            <div className="A42dftag A42help-bg">
              <MdAccountBalance style={styles.A42IconSize} />
            </div>
            <Card.Body>
              <p>
                <small>ABOUT</small>
              </p>
              <Card.Text>
                <a href="#T1" style={styles.A42Textdeco}>
                  Create Account and more..
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        <Card className="A42card-hover mt-4">
          <Card.Body>
            <div className="A42dftag">
              Need more help? Click
              <a href="#T1" style={styles.A42Textdeco} className="ml-1">
                Here
              </a>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default TopQueryHelp;
