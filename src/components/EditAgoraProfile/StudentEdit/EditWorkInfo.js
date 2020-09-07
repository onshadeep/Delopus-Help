import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function EditWorkInfo() {
  return (
    <div className="mt-5 mb-5">
      <Container>
        <hr className="mt-0 mb-1" />
        <h5 className="A42dftag">Work</h5>
        <hr className="mt-0" />
        <Row className="mb-3">
          <Col sm={3}>
            <small>Current Work/Office</small>
          </Col>
          <Col sm={9}>
            <Form>
              <Form.Group>
                <Form.Control size="sm" type="text" placeholder="Write.." />
                {/* <Form.Text className="text-muted">
                    <small>
                      We'll never share your email with anyone else.
                    </small>
                  </Form.Text> */}
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <small>Worked Places</small>
          </Col>
          <Col sm={9}>
            <Form>
              <Form.Group>
                <Form.Control size="sm" type="text" placeholder="Write.." />
                {/* <Form.Text className="text-muted">
                    <small>
                      We'll never share your email with anyone else.
                    </small>
                  </Form.Text> */}
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <hr className="mt-0 mb-1" />
        <h5 className="A42dftag">Skill</h5>
        <hr className="mt-0" />
        <Row>
          <Col sm={3}>
            <small>Skills</small>
          </Col>
          <Col sm={9}>
            <Form>
              <Form.Group>
                <Form.Control size="sm" type="text" placeholder="Write.." />
                {/* <Form.Text className="text-muted">
                    <small>
                      We'll never share your email with anyone else.
                    </small>
                  </Form.Text> */}
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <hr className="mt-0 mb-1" />
        <h5 className="A42dftag">Where do you live</h5>
        <hr className="mt-0" />
        <Row>
          <Col sm={3}>
            <small>Country</small>
          </Col>
          <Col sm={9}>
            <Form>
              <Form.Group>
                <Form.Control size="sm" type="text" placeholder="Country.." />
                {/* <Form.Text className="text-muted">
                    <small>
                      We'll never share your email with anyone else.
                    </small>
                  </Form.Text> */}
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <small>State</small>
          </Col>
          <Col sm={9}>
            <Form>
              <Form.Group>
                <Form.Control size="sm" type="text" placeholder="state.." />
                {/* <Form.Text className="text-muted">
                    <small>
                      We'll never share your email with anyone else.
                    </small>
                  </Form.Text> */}
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <small>City</small>
          </Col>
          <Col sm={9}>
            <Form>
              <Form.Group>
                <Form.Control size="sm" type="text" placeholder="city.." />
                {/* <Form.Text className="text-muted">
                    <small>
                      We'll never share your email with anyone else.
                    </small>
                  </Form.Text> */}
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <hr className="mt-3 mb-2" />
          <div className="d-flex flex-row-reverse bd-highlight">
            <div className="p-2 bd-highlight">
              <Button variant="primary" type="submit" size="sm" block>
                Submit
              </Button>
            </div>
          </div>
      </Container>
    </div>
  );
}

export default EditWorkInfo;
