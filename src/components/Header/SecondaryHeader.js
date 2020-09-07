import React, { useState } from "react";
import {
  Nav,
  Form,
  FormControl,
  Button,
  ButtonToolbar,
  Navbar,
  Container,
  Row,
  Col,
  Modal
} from "react-bootstrap";
import Tabs from "../AgoraTabs/Tabs";
import ModalaskQuestion from "../DiscussForum/ModalaskQuestion";
import ModalshareLink from "../DiscussForum/ModalshareLink";
import { FaSearch } from "react-icons/fa";

const styles = {
  Navlink: {
    color: "#2a2f42"
  },
  AskButton: {
    width: "110px",
    marginTop: "7px"
  },
  AinputBorder: {
    borderRadius: "20px"
  }
};

function SecondaryHeader() {
  const [lgShow, setLgShow] = useState(false);

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={styles.Navbar}
        className="sec-nav-bg"
        variant="dark"
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#T1" style={styles.Navlink}>
              Feed
            </Nav.Link>
            <Nav.Link href="#T1" style={styles.Navlink}>
              Bulletin
            </Nav.Link>
            <Nav.Link href="#T1" style={styles.Navlink}>
              Favourites
            </Nav.Link>
            <Nav.Link href="#T1" style={styles.Navlink}>
              Forum
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#T2" style={styles.Navlink}>
              Home
            </Nav.Link>
            <Nav.Link href="#T3" style={styles.Navlink}>
              Notification
            </Nav.Link>
            <Nav.Link href="#T4" style={styles.Navlink}>
              Answer
            </Nav.Link>
            <ButtonToolbar className="d-flex flex-column">
              <Button
                variant="danger"
                size="sm"
                style={styles.AskButton}
                onClick={() => setLgShow(true)}
                className="button mr-2"
              >
                Ask Question
              </Button>
              <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-modal-sizes-title-lg">
                    <small>Ask Question</small>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Container className="mb-1">
                    <Row>
                      <Col>
                        <small>
                          You are ready to ask your first question and the
                          community is have to help to get you the best answers,
                          we have provided some guidence.
                        </small>
                      </Col>
                    </Row>
                  </Container>

                  <Tabs>
                    <div label="Add Question">
                      <ModalaskQuestion />
                    </div>
                    <div label="Share Link">
                      <ModalshareLink />
                    </div>
                  </Tabs>
                </Modal.Body>
              </Modal>
            </ButtonToolbar>
            <Form inline>
              <FormControl
                type="text"
                style={styles.AinputBorder}
                size="sm"
                className="Ainput-border mr-sm-2"
              />
              <button className="search-button">
                <FaSearch />
              </button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default SecondaryHeader;
