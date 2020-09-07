import React from "react";
import { Card, Container, CardGroup } from "react-bootstrap";
import {
  MdAccountBalance,
  MdVpnKey,
  MdHelp
} from "react-icons/md";
import { AiFillProfile } from "react-icons/ai";

const styles = {
  Footerlink: {
    textDecoration: "none",
    color: "white"
  },
  A42IconSize: {
    height: "35px",
    width: "35px",
    color: "#f3990f"
  },
  A42Textdeco: {
    textDecoration: "none"
  }
};

function HelpCentreHeader() {
  return (
    <div>
      <Container className="mt-2 mb-2">
        <h4>Top Queries</h4>
        <CardGroup>
          <Card className="A42card-hover">
            <div className="A42dftag A42help-bg">
              <MdVpnKey style={styles.A42IconSize} />
            </div>

            <Card.Body>
              <Card.Text>
                <a href="#T1" style={styles.A42Textdeco}>
                  change my password…{" "}
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="A42card-hover">
            <div className="A42dftag A42help-bg">
              <AiFillProfile style={styles.A42IconSize} />
            </div>
            <Card.Body>
              <Card.Text>
                <a href="#T1" style={styles.A42Textdeco}>
                  Edit Profile..
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="A42card-hover">
            <div className="A42dftag A42help-bg">
              <MdAccountBalance style={styles.A42IconSize} />
            </div>
            <Card.Body>
              <Card.Text>
                <a href="#T1" style={styles.A42Textdeco}>
                  Create Account..
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="A42card-hover">
            <div className="A42dftag A42help-bg">
              <MdHelp style={styles.A42IconSize} />
            </div>
            <Card.Body>
              <Card.Text>
                <a href="#T1" style={styles.A42Textdeco}>
                  Need more Help..
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    </div>
  );
}

export default HelpCentreHeader;
