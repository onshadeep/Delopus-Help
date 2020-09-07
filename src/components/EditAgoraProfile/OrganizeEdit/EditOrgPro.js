import React, { Component } from "react";
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";

const styles = {
  editImage: {
    width: "50px",
    height: "50px",
    borderRadius: "50%"
  }
};

export class EditOrgPro extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "Public" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = e => {
        this.setState({ image: e.target.result });
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  render() {
    return (
      <div className="mt-5 mb-5">
        <Container>
          <hr className="mt-0 mb-1" />
          <h5 className="A42dftag">Edit Profile</h5>
          <hr className="mt-0" />
          <Row className="mb-3">
            <Col className="A42dftag">
              <Image
                id="target"
                src={this.state.image}
                style={styles.editImage}
              />
              <small>
                <input
                  type="file"
                  onChange={this.onImageChange}
                  className="ml-3 mt-2"
                  id="group_image"
                />
              </small>
            </Col>
          </Row>
          <hr className="mt-0 mb-1" />
          <h5 className="A42dftag">About</h5>
          <hr className="mt-0" />
          <Row>
            <Col sm={3}>
              <small>Full Name of Company</small>
            </Col>
            <Col sm={9}>
              <Form>
                <Form.Group>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Full Name.."
                  />
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
              <small>COA Number</small>
            </Col>
            <Col sm={9}>
              <Form>
                <Form.Group>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="COA number.."
                  />
                  <Form.Text className="text-muted">
                    <small>
                      Enter COA number if it is an Architecture.We'll never
                      share your COA number with anyone else.
                    </small>
                  </Form.Text>
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col sm={3}>
              <small>GSTIN Number</small>
            </Col>
            <Col sm={9}>
              <Form>
                <Form.Group>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="GSTIN number.."
                  />
                  <Form.Text className="text-muted">
                    <small>
                      Enter GSTIN number if it is a Company.We'll never share
                      your GSTIN number with anyone else.
                    </small>
                  </Form.Text>
                </Form.Group>
              </Form>
            </Col>
          </Row>
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
          <Row>
            <Col sm={3}>
              <small>Bio</small>
            </Col>
            <Col sm={9}>
              <Form>
                <Form.Group>
                  <Form.Control
                    size="sm"
                    as="textarea"
                    rows="1"
                    placeholder="Bio.."
                  />
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
}

export default EditOrgPro;
