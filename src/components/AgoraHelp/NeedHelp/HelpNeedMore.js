import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { UncontrolledCollapse } from "reactstrap";
import { IoIosArrowDown } from "react-icons/io";
import { FaEllipsisV } from "react-icons/fa";
import { GoPlusSmall } from "react-icons/go";
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

function HelpNeedMore() {
  return (
    <div>
      <Container>
        <HelpCentreHeader />
      </Container>
      <Container>
        <Row>
          <Col className="mt-5 mb-5">
            <h3 className="A42dftag mb-4">Need more Help?</h3>
            <h5 className="A42dftag">Post</h5>
            <Row>
              <Col>
                <Container id="toggler0">
                  <Row>
                    <Col sm={11} className="pl-0 pr-0">
                      <a href="#T1" style={styles.A42Text} className="A42text-justify">
                        Ho do I post my project or portfolio?
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
                          <Col className="A42text-justify pl-0 pr-0">
                            <p>
                              To share something on{" "}
                              <a href="https://www.delopus.com/">Delopus</a> :
                            </p>
                            <ol>
                              <li>
                                From the top of your News Feed or Project, click
                                on post.
                              </li>
                              <li>
                                One popup will come
                              </li>
                              <li>
                                Make sure you have read the rules and Regulations on posting any Project.
                              </li>
                            </ol>
                            <p>You can also:</p>
                            <ol>
                              <li>Add the Project name with maximumum 45 characters. </li>
                              <li>Add the Project details with maximumum 200 characters. </li>
                              <li>Add the Project tags</li>
                              <li>Add maximum 10 images of your Project</li>
                              <li>Add the image Name for each iamge with maximum 45 characters </li>
                              <li>Add the image description for each image with maximum 150 characters.</li>
                              <li>Choose an image as a thumbnail that will shown on feed/Project page.</li>
                              <li>
                                Tap on Save Post.
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
                        How do I edit a post I've post on <a href="https://www.delopus.com/">Delopus</a>?
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
                          <Col className="A42text-justify pl-0 pr-0">
                            <p>
                              To edit a post you've post on{" "}
                              <a href="https://www.delopus.com/">Delopus</a> :
                            </p>
                            <ol>
                              <li>
                                From your News Feed/Project, click your profile icon in
                                the top left to go to your profile
                              </li>
                              <li>
                                Scroll to find the post you've post, then
                                click
                                <FaEllipsisV /> in the top right corner of your
                                post.
                              </li>
                              <li>
                                Click Edit <a href="#T1">Post</a>.
                              </li>
                              <li>
                                Make your changes. If images are included in
                                your post, you select any images you'd
                                like to delete and click <GoPlusSmall /> in the
                                plus sign box. Tap <GoPlusSmall /> to add new
                                image.
                              </li>
                              <li>
                                Click <a href="#T1">Save Post</a>.
                              </li>
                            </ol>
                          </Col>
                        </Row>
                      </Container>
                    </Card.Body>
                  </Card>
                </UncontrolledCollapse>
                <hr className="pt-0 pb-0" />

                <Container id="toggler2">
                  <Row>
                    <Col sm={11} className="pl-0 pr-0">
                      <a href="#T1" style={styles.A42Text} className="A42text-justify">
                        How do I remove something posted on my News
                        Feed/Project/Profile?
                      </a>
                    </Col>
                    <Col sm={1}>
                      <IoIosArrowDown style={styles.A42Text} />
                    </Col>
                  </Row>
                </Container>
                <UncontrolledCollapse toggler="#toggler2">
                  <Card style={styles.Cardborder}>
                    <Card.Body className="p-0">
                      <Container>
                        <Row>
                          <Col className="A42text-justify pl-0 pr-0">
                            <p>
                              You can remove posts that you post on your
                              timeline. To remove a post from your News
                              Feed/Profile/Project:
                            </p>
                            <ol>
                              <li>
                                From your Home, click on the profile icon in the
                                top left corner.
                              </li>
                              <li>
                                Scroll down and hover over the post and click{" "}
                                <FaEllipsisV /> in the top right corner.
                              </li>
                              <li>Select Delete from the dropdown menu.</li>
                              <li>
                                Delete: Removes the post from{" "}
                                <a href="https://www.delopus.com/">Delopus</a> entirely. Keep in
                                mind that you can only delete posts that you
                                have posted.
                              </li>
                            </ol>
                          </Col>
                        </Row>
                      </Container>
                    </Card.Body>
                  </Card>
                </UncontrolledCollapse>
                <hr className="pt-0 pb-0" />
                <h5 className="A42dftag">Names on Delopus</h5>
                <p className="A42text-justify">
                  To make sure people know who they're connecting with, we ask
                  everyone to use the same name on <a href="https://www.delopus.com/">Delopus</a>{" "}
                  that they use in everyday life.{" "}
                </p>
                <Container id="toggler3">
                  <Row>
                    <Col sm={11} className="pl-0 pr-0">
                      <a href="#T1" style={styles.A42Text}>
                        Using your name on <a href="https://www.delopus.com/">Delopus</a>
                      </a>
                    </Col>
                    <Col sm={1}>
                      <IoIosArrowDown style={styles.A42Text} />
                    </Col>
                  </Row>
                </Container>
                <UncontrolledCollapse toggler="#toggler3">
                  <Card style={styles.Cardborder}>
                    <Card.Body className="p-0">
                      <Container>
                        <Row>
                          <Col className="A42text-justify pl-0 pr-0">
                            <p>
                              We understand that the name you use in everyday
                              life might be different from your legal name. We
                              want you to be able to use the name you most
                              identify with on your{" "}
                              <a href="https://www.delopus.com/">Delopus</a> profile.
                            </p>
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
                        What names are allowed on <a href="https://www.delopus.com/">Delopus</a>?
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
                            <a href="https://www.delopus.com/">Delopus</a> is a community where
                              everyone uses the name they go by in everyday
                              life. Always knowing who you're connecting with
                              helps keep you and the rest of our community safe
                              from impersonation, scams and phishing.
                            </p>
                            <p>Your name can't include :</p>
                            <ol>
                              <li>
                                Symbols, numbers, unusual capitalization,
                                repeating characters or punctuation.
                              </li>
                              <li>Characters from multiple languages.</li>
                              <li>Titles of any kind (example: religious).</li>
                              <li>Words or phrases in place of a name.</li>
                              <li>
                                Offensive or suggestive words of any kind.
                              </li>
                            </ol>
                            <p>Other things to keep in mind :</p>
                            <ol>
                              <li>
                                The name on your profile should be the name that
                                your friends call you in everyday life.
                              </li>
                              <p>
                                This name should also appear on an ID or
                                document from our ID list.
                              </p>
                              <li>Profiles are for individual use only.</li>
                              <li>
                                Pretending to be anything or anyone isn't
                                allowed.
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
                        How do I change my name on <a href="https://www.delopus.com/">Delopus</a>?
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
                            <p>
                              To change your name on <a href="https://www.delopus.com/">Delopus</a> :
                            </p>
                            <ol>
                              <li>
                                Click on the profile icon in the top right of
                                any <a href="https://www.delopus.com/">Delopus</a> page and click Edit Profile.
                              </li>
                              <li>Click Name.</li>
                              <li>Enter your First name and Last Name</li>
                              <li>Enter your password and click Update.</li>
                            </ol>
                            <p>
                              If you're having trouble changing your name,
                              please fill out the registration form to let us
                              know. You can only change your name every 60 days.
                            </p>
                            <strong>To edit or delete another name:</strong>
                            <ol>
                              <li>
                                Go to the profile icon and click on edit
                                profile.
                              </li>
                              <li>Click on About.</li>
                              <li>
                                And follow the on screen Instructions.
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
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HelpNeedMore;
