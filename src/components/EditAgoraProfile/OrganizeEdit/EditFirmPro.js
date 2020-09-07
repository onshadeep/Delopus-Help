import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import EditOrgPro from "./EditOrgPro";
import EditbaseOrg from "./EditbaseOrg";
import EditPswOrg from "./EditPswOrg";

function EditFirmPro() {
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
                      <Nav.Link eventKey="second">Basic Information</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Edit Password</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={10} className="A42editborder">
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <EditOrgPro/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <EditbaseOrg/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <EditPswOrg/>
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

export default EditFirmPro;
