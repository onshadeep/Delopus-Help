import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
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

function HelpAccount() {
  return (
    <div>
      <Container>
        <HelpCentreHeader />
      </Container>

      <Container className="mt-5 mb-5">
        <Row>
          <Col>
            <h3 className="A42dftag mb-4">Create Account</h3>
            <Row>
              <Col>
                <hr className="pt-0 pb-0" />
                <Container id="toggler0">
                  <Row>
                    <Col sm={11} className="pl-0 pr-0">
                      <a href="#T1" style={styles.A42Text}>
                        How do I create an <a href="https://delopus.com/">Delopus</a> account?
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
                            <h6>
                              To create an <a href="https://delopus.com/">Delopus</a> account from a computer :
                            </h6>
                            <ol className="A42text-justify">
                              <li>
                                Go to <a href="https://delopus.com/">Delopus</a>.
                              </li>
                              <li>
                                Go to and click on Login/Register on the right
                                top corner side on the page.
                              </li>
                              <li>
                                Enter your all instruction which is ask
                                on-screen.
                              </li>
                              <li>
                                If you register with an email and Username,
                                click Sign up.
                              </li>
                            </ol>
                            <p className="A42text-justify">
                              If you sign up with email and Username, make
                              sure you enter your email address and Username
                              correctly and choose an email address and phone
                              number that only you can access. you need to {''}
                              <a href="#T1">
                                confirm your email.
                              </a>
                              . If you log out and forget your password, you'll
                              need to be able to access your email to get back into your Delopus account.
                            </p>
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
                        How do I finish creating my <a href="https://delopus.com/">Delopus</a> account and
                        confirm my email?
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
                          <Col className="pl-0 pr-0">
                            <p className="A42text-justify">
                              To finish creating an account, you need to confirm
                              that you own the email that
                              you used to create the account :
                            </p>
                            <ol className="A42text-justify">
                              <li>
                                To confirm your email, click or tap the link in
                                the email you got when you created the account.
                                Learn what to do if you{" "}
                                can't find the email<a href="#T1">Contact Us </a> to <a href="https://delopus.com/">Delopus</a> signup
                                confirmation email.
                              </li>
                            </ol>
                            <p className="A42text-justify">
                              Confirming your email helps us
                              know that we're sending your account info to the
                              right place.
                            </p>
                            <p className="A42text-justify">
                              <strong>Note :-</strong>
                              Please confirm your email as soon
                              as possible. You may not be able to use your
                              account until you confirm your email.
                            </p>
                          </Col>
                        </Row>
                      </Container>
                    </Card.Body>
                  </Card>
                </UncontrolledCollapse>
                <hr className="pt-0 pb-0" />

                <Container id="toggler3">
                  <Row>
                    <Col sm={11} className="pl-0 pr-0">
                      <a href="#T1" style={styles.A42Text} className="A42text-justify">
                        I can't find my <a href="https://delopus.com/">Delopus</a> signup confirmation email.
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
                              If you created a <a href="https://delopus.com/">Delopus</a> account with an
                              email, we sent a confirmation link to that email.
                              If you can't find your confirmation email :
                            </p>
                            <ol>
                              <li>
                                Check your junk mail folder. If you're using
                                Gmail, check your Social emails.
                              </li>
                              <li>
                                Make sure that you entered the correct email. If
                                you entered the wrong email.
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
                        How can I make my <a href="https://delopus.com/">Delopus</a> password strong?
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
                              When you create a new password, keep in mind :
                            </p>
                            <ol>
                              <li>
                                Your password should be easy for you to remember
                                but difficult for others to guess.
                              </li>
                              <li>
                                Your <a href="https://delopus.com/">Delopus</a> password should be different
                                than the passwords you use to log into other
                                accounts, like your email or bank account.
                              </li>
                              <li>Longer passwords are usually more secure.</li>
                              <li>
                                Your password should not be your email, phone
                                number or birthday.
                              </li>
                            </ol>
                            <p>
                              If you see a message letting you know the password
                              you entered isn't strong enough, try mixing
                              together uppercase, lowercase letters, at least
                              one symbol and digits . You can also make the
                              password more complex by making it longer with a
                              phrase or series of words that you can easily
                              remember, but no one else knows.
                            </p>
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
                        Why am I being asked my COA number during create account
                        on <a href="https://delopus.com/">Delopus</a>?
                      </a>
                      <p className="mb-0">or</p>
                      <a href="#T1" style={styles.A42Text} className="A42text-justify">
                        What COAs number are allowed on <a href="https://delopus.com/">Delopus</a>?
                      </a>
                    </Col>
                    <Col sm={1}>
                      <IoIosArrowDown style={styles.A42Text} />
                    </Col>
                  </Row>
                </Container>
                <UncontrolledCollapse toggler="#toggler7" className="mt-3">
                  <Card style={styles.Cardborder}>
                    <Card.Body className="p-0">
                      <Container>
                        <Row>
                          <Col className="A42text-justify pl-0 pr-0">
                            <p>
                            <a href="https://delopus.com/">Delopus</a> is a community where
                              every architect can show his work and post some
                              jobs/intern for architecture student and COA
                              number is an identity that show you are a
                              professional architecture. And always knowing who
                              you're connecting with helps keep you and the rest
                              of our community safe from impersonation, scams
                              and phishing.
                            </p>
                            <p>
                              Only those COAs number is acceptable which is
                              given or declare by{" "}
                              <a href="https://www.coa.gov.in/">Council Of Architecture</a>.
                            </p>
                            <p>Your COAs number can't include :</p>
                            <ol>
                              <li>
                                Symbols,unusual capitalization, repeating
                                characters or punctuation.
                              </li>
                              <li>Titles of any kind (example: religious).</li>
                              <li>Words or phrases in place of a name.</li>
                              <li>
                                Offensive or suggestive words of any kind.
                              </li>
                            </ol>
                          </Col>
                        </Row>
                      </Container>
                    </Card.Body>
                  </Card>
                </UncontrolledCollapse>
                <hr className="pt-0 pb-0" />

                <Container id="toggler8">
                  <Row>
                    <Col sm={11} className="pl-0 pr-0">
                      <a href="#T1" style={styles.A42Text} className="A42text-justify">
                        Why am I being asked my GSTIN number during create
                        account on <a href="https://delopus.com/">Delopus</a>?
                      </a>
                      <p className="mb-0">or</p>
                      <a href="#T1" style={styles.A42Text} className="A42text-justify">
                        What GSTIN number are allowed on <a href="https://delopus.com/">Delopus</a>?
                      </a>
                    </Col>
                    <Col sm={1}>
                      <IoIosArrowDown style={styles.A42Text} />
                    </Col>
                  </Row>
                </Container>
                <UncontrolledCollapse toggler="#toggler8" className="mt-3">
                  <Card style={styles.Cardborder}>
                    <Card.Body className="p-0">
                      <Container>
                        <Row>
                          <Col className="A42text-justify pl-0 pr-0">
                            <p>
                            <a href="https://delopus.com/">Delopus</a> is a community where
                              every firm can show his work and post some
                              jobs/intern for architecture (student or Architect
                              or Professional architecture) and Goods and
                              Service Tax Identification Number (GSTIN) is a
                              state-specific unique number based on PAN. GSTIN
                              is a 15 digit registration number consisting of
                              state code, PAN, entity code, and the check digit.
                              And always knowing who you're connecting with
                              helps keep you and the rest of our community safe
                              from impersonation, scams and phishing.
                            </p>
                            <p>
                              Only those GSTINs number is acceptable which is
                              given or declare by{" "}
                              <a href="https://services.gst.gov.in/">Goods and Services Tax</a>. Your
                              GSTINs number can't include:
                            </p>
                            <ol>
                              <li>
                                Symbols, unusual capitalization, repeating
                                characters or punctuation.
                              </li>
                              <li>Titles of any kind (example: religious).</li>
                              <li>Words or phrases in place of a name.</li>
                              <li>
                                Offensive or suggestive words of any kind.
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

export default HelpAccount;
