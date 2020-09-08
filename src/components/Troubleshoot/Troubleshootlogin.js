import React from "react";
import { Container } from "react-bootstrap";
import "../../assets/css/SiteAgora.css";
export default function Troubles() {
  return (
    <div>
      <Container>
        <h1 className="mg">Troubleshooting and Login Help</h1>
        <ol type="A">
          <li>
            <b>Can't Log in?</b>
          </li>
          <ol type="a">
            <li>
              <p>What can I do if I forgot my Delopus password?</p>
              <p>
                If you can't remember your password, you can reset it using your
                email address.
              </p>
              <p>
                Learn more about what you can do if{" "}
                <a href="#">you don't know your username.</a>
              </p>
              <ul>
                <li>
                  <p>
                    <b>
                      I can’t locate my account or don’t know my username on
                      Delopus.
                    </b>
                  </p>
                  <h6>
                    If you aren’t able to locate your account after entering
                    your username:
                  </h6>
                  <ol type="I">
                    <li>
                      Make sure that you’re entering your username correctly,
                      especially if it contains repeated characters.
                    </li>
                    <li>
                      Don’t include the @ symbol when entering your username.
                    </li>
                  </ol>
                </li>
                <li>
                  <p>
                    <b>
                      If you think your username was changed as a result of your
                      account being compromised:
                    </b>
                  </p>{" "}
                  <ol type="I">
                    <li>
                      Check if you’ve received an email from Delopus to activate
                      your mail or try to reset your password by using your mail
                      address.You can see your username from there.
                    </li>
                    <li>
                      Ask a friend to visit your profile and take a screenshot
                      of your current username.
                    </li>
                  </ol>
                </li>

                <p>
                  Learn more about what you can do if{" "}
                  <a href="#">you think your account was hacked.</a>
                </p>
                <li>
                  <p>
                    <b>I think my Delopus account has been hacked.</b>
                  </p>{" "}
                  <p>To report this please contact us.</p>
                  <p>
                    <b>Will ask Some Question to Verify your identity</b>
                  </p>
                  <p>
                    Once you submit your request, you should receive an
                    auto-response email from the Security Team at Delopus asking
                    you to help us verify your identity. You'll be asked for one
                    or both of the following:
                  </p>
                  <ol type="I">
                    <li>
                      A photo of yourself holding a paper with a handwritten
                      code we've provided you.
                    </li>
                    <li>
                      The email address or Username you signed up with and the
                      type of device you used at the time of sign up (example:
                      iPhone, Android, iPad, other).{" "}
                    </li>
                  </ol>
                  <p>
                    Once you provide information to help us verify your
                    identity, we'll send you specific instructions to find your
                    account at the secure email address you provided.
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <p>
                .I register an account on Delopus, It’s showing an email has
                been sent, but I didn’t get any email.
              </p>
              <p>
                Please check your mail a bit later. If you didn’t receive any
                mail from us then check your spam folder sometime it may be
                there.
              </p>
              <p>
                Still having problems, Please <a href="#">contact us</a> to
                register this issue, will help you.
              </p>
            </li>
          </ol>
          <li>
            <b>Something’s Not Working?</b>
          </li>
          <ol type="1">
            <li>
              <p>
                <b>Known Issue</b>
              </p>
              <ol type="a">
                <li>
                  <p>
                    I register an account on Delopus, It’s showing an email has
                    been sent, but I didn’t get any email.
                  </p>
                  <p>
                    Please check your mail a bit later. If you didn’t receive
                    any mail from us then check your spam folder sometime it may
                    be there.
                  </p>
                  <p>
                    Still having problems, Please <a href="#">contact us</a> to
                    register this issue, will help you.
                  </p>
                </li>
              </ol>
            </li>
            <li>
              <p>
                <b>Why am I getting an error message?</b>
              </p>
              <ol type="a">
                <li>
                  <p>
                    I’m getting the message, “Error: Please create a username
                    with only alphanumeric characters.” on Delopus while
                    registering.
                  </p>
                  <p>Below the some reason, Why are you getting Error</p>
                  <ul>
                    <li>
                      You can’t create your username in less than 5 characters.
                    </li>
                    <li>
                      You can’t create your username with more than 20
                      characters.
                    </li>
                        
                    <li>
                      You can’t create your username using a blank space
                      example:- Test S or Test 4.
                    </li>
                    <li>
                      Last is, Maybe your entered username already exists in our
                      database. Please try again with a new username.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    .I’m getting the message, “Error:Please provide a valid
                    email address..” on Delopus while registering.
                  </p>
                  <p>
                    Your entered email is incorrect. Please check your mail
                    again and try again to register. This error comes when the
                    user enters an email formatted in a manner that does not
                    meet internet email format standard
                  </p>
                  <p>OR</p>
                  <p>
                    if the user enters an email address that is not Linked to
                    his account.
                  </p>
                  <p>
                    Still having problems, Please <a href="#">contact us</a> to
                    register this issue, will help you.
                  </p>
                </li>
                <li>
                  <p>
                    .I’m getting the message, “Error: A user is already
                    registered with this e-mail address.” on Delopus while
                    registering.
                  </p>
                  <p>
                    This error comes if the email entered by the user is already
                    used to make another account either by the same user or some
                    other user. Only One email Delopus profile can be linked
                    with one email ID, one email ID cannot be linked to 2 user
                    profiles.
                  </p>
                  <p>
                  If you think you are the owner of this mail and want to report then Contact us
                  </p>
                </li>
              </ol>
            </li>
          </ol>
        </ol>
      </Container>
    </div>
  );
}
