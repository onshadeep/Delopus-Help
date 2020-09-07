import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { IoMdMail, IoIosKey } from "react-icons/io";
import HelpCentreHeader from "../HelpCentreHeader";

function HelpPassword() {
  return (
    <div>
      <Container>
        <HelpCentreHeader />
      </Container>
      <Container className="mt-5 mb-5">
        <Row>
          <Col>
            <h3 className="A42dftag mb-4">Login and Password</h3>
            <p className="A42text-justify">
              If you have an account in{" "}
              <a href="https://delopus.com/">Delopus</a> and cannot log in, try
              to reset your password using your email or Username. If you still
              can’t access your login process , you can{" "}
              <a href="#T1">contact us</a>.
            </p>
            <p className="A42text-justify">
              If you don't have an account in{" "}
              <a href="https://delopus.com/">Delopus</a>, learn how to{" "}
              <a href="#T1">Register here</a>.
            </p>
            <h6>Reset your password</h6>
            <p className="A42text-justify">
              If you can't remember your password, you can reset it using your
              email address. Click the ? question mark beside the Password field
              or <a href="#T1">Forgotten password?</a> Link and new page will be
              shown...
            </p>
            <p>
              <strong>Follow the step</strong>
              <IoMdMail className="ml-1" />
            </p>
            <ol className="A42text-justify">
              <li>Type an email address associated with your account.</li>
              <li>
                Click on <a href="#T1">Send Mail</a>.
              </li>
              <li>
                A Reset password link will be sent to your email. If you did not
                find any email from us then please check your spam or other.
              </li>
              <li>
                Click on the link <a href="#T1">Reset New password</a>.
              </li>
              <li>Follow the on-screen instructions.</li>
            </ol>
            <hr className="pt-0 pb-0" />
            <p>
              <strong>Edit your Password</strong>
              <IoIosKey className="ml-1" />
            </p>
            <p>Edit your password from your profile.</p>
            <ol className="A42text-justify">
              <li>Go to Profile icon menu.</li>
              <li>Click on Edit your password.</li>
              <li>A new page will be shown.</li>
              <li>
                Enter your Current password, Create a New password and Confirm
                password.
              </li>
              <li>
                Click on <a href="#T1">Submit</a>.
              </li>
            </ol>
            <hr className="pt-0 pb-0" />
            <h6>If you forgotten Email ID and Phone number</h6>
            <div className="A42text-justify">
              <p>
                If you forgot your Email ID then to reset New password{" "}
                <a href="#T1">Contact Us.</a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HelpPassword;
