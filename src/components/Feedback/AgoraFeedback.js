import React from "react";
import {
  Modal,
  Button,
  Container,
  Col,
  Row,
  FormControl,
  Form
} from "react-bootstrap";
import { FaIdCard, FaAlignLeft } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdFeedback } from "react-icons/md";
import { GoIssueOpened } from "react-icons/go";

const styles = {
  A42Feedicon: {
    // paddingLeft: "25px",
    // paddingTop: "5px",
    backgroundColor: "black",
    color: "white",
    textAlign: "center"
  }
};

function Feedback(props) {
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className="mt-3 mb-3">
          <Container>
            <Row>
              <Col>
                <h5>Send us Feedback</h5>
                <hr className="mt-0 mb-0" />
                <p className="A42dftag">
                  Please send your valuable feedback so that we can improve our
                  website or idea so as to cater to different creative
                  professionals adequately.
                </p>
                <Container>
                  <Row className="mb-3">
                    <Col sm={1} className="pr-0" style={styles.A42Feedicon}>
                      <FaIdCard />
                    </Col>
                    <Col sm={11} className="pl-0 pr-0">
                      <Form.Group className="mb-0">
                        <Form.Control as="select" size="sm">
                          <option>Select..</option>
                          <option>Architecture</option>
                          <option>Interior designer</option>
                          <option>Artist</option>
                          <option>Organisation</option>
                          <option>Student</option>
                          <option>Other</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col sm={1} className="pr-0" style={styles.A42Feedicon}>
                      <IoIosMail />
                    </Col>
                    <Col sm={11} className="pl-0 pr-0">
                      <FormControl
                      size="sm"
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                        placeholder="name@example.com"
                      />
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col sm={1} className="pr-0" style={styles.A42Feedicon}>
                      <GoIssueOpened />
                    </Col>
                    <Col sm={11} className="pl-0 pr-0">
                      <Form.Group className="mb-0">
                        <Form.Control as="select" size="sm">
                          <option>Select..</option>
                          <option>Website</option>
                          <option>Idea</option>
                          <option>About Improvement?</option>
                          <option>Other</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col sm={1} className="pr-0" style={styles.A42Feedicon}>
                      <FaAlignLeft />
                    </Col>
                    <Col sm={11} className="pl-0 pr-0">
                      <FormControl
                        aria-label="Small"
                        size="sm"
                        as="textarea"
                        rows="6"
                        aria-describedby="inputGroup-sizing-sm"
                        placeholder="Suggestions..."
                      />
                    </Col>
                  </Row>
                </Container>

                <hr />
                <Row>
                  <Col sm={10}>
                    <Button
                      onClick={props.onHide}
                      variant="outline-danger"
                      size="sm"
                    >
                      Close
                    </Button>
                  </Col>
                  <Col sm={2}>
                    <Button variant="primary" size="sm">
                      Send
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </Modal>
    </div>
  );
}

function AgoraFeedback() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <Button variant="secondary" onClick={() => setModalShow(true)}>
        Feedback <MdFeedback />
      </Button>

      <Feedback show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}

export default AgoraFeedback;
