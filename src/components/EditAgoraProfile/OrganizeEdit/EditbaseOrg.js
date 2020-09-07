import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function EditbaseOrg() {
  return (
    <div className="mt-5 mb-5">
      <Container>
        <hr className="mt-0 mb-1" />
        <h5 className="A42dftag">Contact</h5>
        <hr className="mt-0" />
        <Row>
          <Col sm={3}>
            <small>Email</small>
          </Col>
          <Col sm={9}>
            <Form>
              <Form.Control
                size="sm"
                type="email"
                placeholder="name@example.com"
              />
              {/* <Form.Text className="text-muted">
                  <small>We'll never share your email with anyone else.</small>
                </Form.Text> */}
            </Form>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col sm={3}>
            <small>Mobile Number</small>
          </Col>
          <Col sm={9}>
            <Form>
              <Form.Control
                size="sm"
                type="number"
                placeholder="+1 (123) 1234567"
              />
              {/* <Form.Text className="text-muted">
                  <small>
                    We'll never share your phone number with anyone else.
                  </small>
                </Form.Text> */}
            </Form>
          </Col>
        </Row>
        <hr className="mt-3 mb-1" />
        <h5 className="A42dftag">Basic Information</h5>
        <hr className="mt-0" />
        <Row>
          <Col sm={3}>
            <small>Gender</small>
          </Col>
          <Col sm={9}>
            <Form>
              <Form.Group>
                <Form.Control as="select" size="sm" className="mb-0">
                  <option>Male</option>
                  <option>Female</option>
                  <option>Custom</option>
                  <option>Prefer Not To Say</option>
                </Form.Control>
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <small>Languages</small>
          </Col>
          <Col sm={9}>
            <Form>
              <Form.Control size="sm" type="text" placeholder="Write.." />
              {/* <Form.Text className="text-muted">
                          <small>We'll never share your email with anyone else.</small>
                        </Form.Text> */}
            </Form>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col sm={3}>
            <small>Social Link 1</small>
          </Col>
          <Col sm={9}>
            <Form>
              <Form.Control
                size="sm"
                type="text"
                placeholder="https://example.com/users/.."
              />
            </Form>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col sm={3}>
            <small>Social Link 2</small>
          </Col>
          <Col sm={9}>
            <Form>
              <Form.Control
                size="sm"
                type="text"
                placeholder="https://example.com/users/.."
              />
            </Form>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col sm={3}>
            <small>Website Link 1</small>
          </Col>
          <Col sm={9}>
            <Form>
              <Form.Control
                size="sm"
                type="text"
                placeholder="https://example.com/.."
              />
            </Form>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col sm={3}>
            <small>Website Link 2</small>
          </Col>
          <Col sm={9}>
            <Form>
              <Form.Control
                size="sm"
                type="text"
                placeholder="https://example.com/.."
              />
            </Form>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col sm={3}>
            <small>Life Event</small>
          </Col>
          <Col sm={9}>
            <Form>
              <Form.Control size="sm" type="text" placeholder="Write.." />
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

export default EditbaseOrg;
