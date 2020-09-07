import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import EditProfpro from "./EditProfpro";
import EditProWork from "./EditProWork";
import EditbaseProInfo from "./EditbaseProInfo";
import EditPswPro from "./EditPswPro";

function EditProfessionalPro() {
  return (
    <div className="mt-5 mb-5">
      <Container>
        <Row>
          <Col>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={2} className="A42editnav pt-5">
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Edit Profile</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Work</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Basic Information</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fourth">Edit Password</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={10} className="A42editborder">
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <EditProfpro />
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <EditProWork />
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <EditbaseProInfo />
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                      <EditPswPro />
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default EditProfessionalPro;
