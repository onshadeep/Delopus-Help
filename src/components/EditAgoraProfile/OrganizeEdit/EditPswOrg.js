import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function EditPswOrg() {
  return (
    <div className="mt-5 mb-5">
      <Container>
        <hr className="mt-0 mb-1" />
        <h5 className="A42dftag">Edit Password</h5>
        <hr className="mt-0" />
        <Row className="mt-3">
          <Col sm={3}>
            <small>Current Password</small>
          </Col>
          <Col sm={9}>
            <Form>
              <Form.Control
                type="password"
                size="sm"
                placeholder="Current passqord"
              />
              {/* <Form.Text className="text-muted">
                          <small>We'll never share your email with anyone else.</small>
                        </Form.Text> */}
            </Form>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col sm={3}>
            <small>Enter New Password</small>
          </Col>
          <Col sm={9}>
            <Form>
              <Form.Control
                type="password"
                size="sm"
                placeholder="New password"
              />
              {/* <Form.Text className="text-muted">
                          <small>We'll never share your email with anyone else.</small>
                        </Form.Text> */}
            </Form>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col sm={3}>
            <small>Confirm New Password</small>
          </Col>
          <Col sm={9}>
            <Form>
              <Form.Control
                type="password"
                size="sm"
                placeholder="Confirm password"
              />
              {/* <Form.Text className="text-muted">
                          <small>We'll never share your email with anyone else.</small>
                        </Form.Text> */}
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

export default EditPswOrg;
