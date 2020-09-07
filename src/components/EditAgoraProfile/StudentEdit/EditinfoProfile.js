import React from "react";
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";
import DatePickerdob from "./DatePickerdob";

const styles = {
  editImage: {
    width: "50px",
    height: "50px",
    borderRadius: "50%"
  }
};

class EditinfoProfile extends React.Component {
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
              <small>Full Name</small>
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
          <Row>
            <Col sm={3}>
              <small>Date of Birth</small>
            </Col>
            <Col sm={9}>
              <Form>
                <Form.Group>
                  {/* <DatePickerdob /> */}
                  <DatePickerdob />
                  <Form.Text className="text-muted">
                    <small>We'll never share your DOB with anyone else.</small>
                  </Form.Text>
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <hr className="mt-0 mb-1" />
          <h5 className="A42dftag">University/College</h5>
          <hr className="mt-0" />
          <Row>
            <Col sm={3}>
              <small>University/College</small>
            </Col>
            <Col sm={9}>
              <Form>
                <Form.Group>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="university/college.."
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col sm={3}>
              <small>Course</small>
            </Col>
            <Col sm={9}>
              <Form>
                <Form.Group>
                  <Form.Control size="sm" type="text" placeholder="Course.." />
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col sm={3}>
              <small>Location</small>
            </Col>
            <Col sm={9}>
              <Form>
                <Form.Group>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Location.."
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col sm={3}>
              <small>Which year of college</small>
            </Col>
            <Col sm={9}>
              <Form.Group>
                <Form.Control as="select" size="sm" className="mb-0">
                  <option>1 Year</option>
                  <option>2 Year</option>
                  <option>3 Year</option>
                  <option>4 Year</option>
                  <option>5 Year</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col sm={3}>
              <small>Expected year of passing out</small>
            </Col>
            <Col sm={9}>
              <Form>
                <Form.Group>
                  <DatePickerdob />
                </Form.Group>
              </Form>
            </Col>
          </Row>
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

export default EditinfoProfile;
