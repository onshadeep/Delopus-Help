import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { UncontrolledCollapse } from "reactstrap";
import { IoIosArrowDown } from "react-icons/io";
import HelpCentreHeader from "../HelpCentreHeader";

const styles = {
  A42Text: {
    //   textDecoration: "none",
    color: "#41465c"
  },
  Cardborder: {
    border: "none"
  }
};

function HelpEditProfile() {
  return (
    <div>
      <Container>
        <HelpCentreHeader />
      </Container>
      <Container className="mt-5 mb-5">
        <Row>
          <Col>
            <h3 className="A42dftag mb-4">Edit Profile and Settings</h3>
            <h5 className="mt-4 mb-4">Your Agora42 Profile</h5>
            <p className="A42text-justify">
              Your <a href="https://delopus.com/">Delopus</a> profile is a professional landing page for you to
              manage your own, personal Identity. It’s a great way for you to
              tell people who you are and what you do by displaying a general
              overview of your experiences and achievements.
            </p>
            <p className="A42text-justify">
              There are more features to help you meet your objectives, by
              leveraging your profile or the profiles of other members. A
              complete <a href="https://delopus.com/">Delopus</a> profile can help you connect with opportunities.
            </p>
            <hr className="pt-0 pb-0" />

            <Container id="toggler0">
              <Row>
                <Col sm={11} className="pl-0 pr-0">
                  <a href="#T1" style={styles.A42Text} className="A42text-justify">
                    How do I update <a href="https://delopus.com/">Delopus</a> profile information like my name,
                    username, phone number , profile image and email?
                  </a>
                </Col>
                <Col sm={1}>
                  <IoIosArrowDown style={styles.A42Text} />
                </Col>
              </Row>
            </Container>

            <UncontrolledCollapse toggler="#toggler0">
              <Card style={styles.Cardborder}>
                <Card.Body className="p-0">
                  <Container>
                    <Row>
                      <Col className="pl-0 pr-0">
                        <Card body className="A42text-justify">
                          You may need to log into your account before you’re
                          able to update your profile information.
                        </Card>
                        <p className="A42text-justify">
                          To update your profile information, including your
                          email address, phone number, username and profile
                          image associated with your account:
                        </p>
                        <ol className="A42text-justify">
                          <li>Go to your profile icon.</li>
                          <li>
                            Tap <a href="#T1">Edit Profile</a>
                          </li>
                        </ol>
                      </Col>
                    </Row>
                  </Container>
                </Card.Body>
              </Card>
            </UncontrolledCollapse>
            <hr className="pt-0 pb-0" />

            <Container id="toggler1">
              <Row>
                <Col sm={11} className="pl-0 pr-0">
                  <a href="#T1" style={styles.A42Text} className="A42text-justify">
                    How do I add a profile picture or change my current picture?
                  </a>
                </Col>
                <Col sm={1}>
                  <IoIosArrowDown style={styles.A42Text} />
                </Col>
              </Row>
            </Container>

            <UncontrolledCollapse toggler="#toggler1">
              <Card style={styles.Cardborder}>
                <Card.Body className="p-0">
                  <Container>
                    <Row>
                      <Col className="A42text-justify pl-0 pr-0" >
                        <p>To add or change your profile picture.</p>
                        <ol>
                          <li>Go to your profile icon and tap Edit Profile.</li>
                          <li>Tap Change Profile Photo.</li>
                          <li>
                            Select where you'd like to import your picture from.
                          </li>
                          <li>
                            Now your profile will update.
                          </li>
                        </ol>
                      </Col>
                    </Row>
                  </Container>
                </Card.Body>
              </Card>
            </UncontrolledCollapse>
            <hr className="pt-0 pb-0" />

            <Container id="toggler4">
              <Row>
                <Col sm={11} className="pl-0 pr-0">
                  <a href="#T1" style={styles.A42Text} className="A42text-justify">
                    How do I add a social link or a bio or a website and more to
                    my profile?
                  </a>
                </Col>
                <Col sm={1}>
                  <IoIosArrowDown style={styles.A42Text} />
                </Col>
              </Row>
            </Container>

            <UncontrolledCollapse toggler="#toggler4">
              <Card style={styles.Cardborder}>
                <Card.Body className="p-0">
                  <Container>
                    <Row>
                      <Col className="A42text-justify pl-0 pr-0">
                        <p>
                          You can write a bio of up to 180 characters on your
                          profile. Please keep in mind that anyone can see your
                          bio, social link, website link.
                        </p>
                        <p>
                          <strong>To edit your bio :</strong>
                        </p>
                        <ol>
                          <li>
                            Go to your profile icon and tap on Edit profile.
                          </li>
                          <li>
                            Write your bio and add the URL to your website or
                            social link.
                          </li>
                          <li>
                            Tap <a href="#T1">Update</a> (According to given
                            on-screen instruction).
                          </li>
                        </ol>
                      </Col>
                    </Row>
                  </Container>
                </Card.Body>
              </Card>
            </UncontrolledCollapse>
            <hr className="pt-0 pb-0" />

            <Container id="toggler5">
              <Row>
                <Col sm={11} className="pl-0 pr-0">
                  <a href="#T1" style={styles.A42Text} className="A42text-justify">
                    How do I find my profile setting?
                  </a>
                </Col>
                <Col sm={1}>
                  <IoIosArrowDown style={styles.A42Text} />
                </Col>
              </Row>
            </Container>

            <UncontrolledCollapse toggler="#toggler5">
              <Card style={styles.Cardborder}>
                <Card.Body className="p-0">
                  <Container>
                    <Row>
                      <Col className="A42text-justify pl-0 pr-0">
                        <p>To find profile setting :-</p>
                        <ol>
                          <li>Go to profile icon and tap.</li>
                          <li>
                            Tap <a href="#T1">setting</a>.
                          </li>
                        </ol>
                      </Col>
                    </Row>
                  </Container>
                </Card.Body>
              </Card>
            </UncontrolledCollapse>
            <hr className="pt-0 pb-0" />

            <Container id="toggler6">
              <Row>
                <Col sm={11} className="pl-0 pr-0">
                  <a href="#T1" style={styles.A42Text} className="A42text-justify">
                    How do I log out of <a href="https://delopus.com/">Delopus</a>?
                  </a>
                </Col>
                <Col sm={1}>
                  <IoIosArrowDown style={styles.A42Text} />
                </Col>
              </Row>
            </Container>

            <UncontrolledCollapse toggler="#toggler6">
              <Card style={styles.Cardborder}>
                <Card.Body className="p-0">
                  <Container>
                    <Row>
                      <Col className="A42text-justify pl-0 pr-0">
                        <p>
                          You can log out of <a href="https://delopus.com/">Delopus</a> on the web by going to your
                          profile.
                        </p>
                        <ol>
                          <li>
                            Tap or click on the profile icon in the top right.
                          </li>
                          <li>
                            Tap or click on <a href="#T1">Log Out</a>.
                          </li>
                        </ol>
                      </Col>
                    </Row>
                  </Container>
                </Card.Body>
              </Card>
            </UncontrolledCollapse>
            <hr className="pt-0 pb-0" />

            <Container id="toggler7">
              <Row>
                <Col sm={11} className="pl-0 pr-0">
                  <a href="#T1" style={styles.A42Text} className="A42text-justify">
                    How do I edit my <a href="https://delopus.com/">Delopus</a> profile picture thumbnail?
                  </a>
                </Col>
                <Col sm={1}>
                  <IoIosArrowDown style={styles.A42Text} />
                </Col>
              </Row>
            </Container>

            <UncontrolledCollapse toggler="#toggler7">
              <Card style={styles.Cardborder}>
                <Card.Body className="p-0">
                  <Container>
                    <Row>
                      <Col className="A42text-justify pl-0 pr-0">
                        <p>
                          The thumbnail version of your profile picture is the
                          smaller version that people see next to your name. If
                          you want to change your profile picture, learn more
                          tap <a href="#T1">here</a>. (Set the link of How do I
                          add a profile picture or change my current picture?).
                        </p>
                        <p>To reposition your profile picture thumbnail :</p>
                        <ol>
                          <li>Go to profile icon menu and tap.</li>
                          <li>
                            Go to your profile picture and over your profile
                            picture and click<a href="#T1">Update</a>.
                          </li>
                        </ol>
                      </Col>
                    </Row>
                  </Container>
                </Card.Body>
              </Card>
            </UncontrolledCollapse>
            <hr className="pt-0 pb-0" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HelpEditProfile;
