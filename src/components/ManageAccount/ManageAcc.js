import React from "react";
import { Container } from "react-bootstrap";
import "../../assets/css/SiteAgora.css";

export default function Manages() {
  return (
    <div>
      <Container>
        <h1 className="mg">Managing Your Account</h1>
        <ol type="A">
          <li>
            <b>Privacy Settings and Information</b>
          </li>
          <ol type="a">
            <li>
              <p>Who can like my project on delopus?</p>
              <p>
                {" "}
                Your delopus account is public, anyone can like your projects.
              </p>
            </li>
            <li>
              <p>
                Who can see my delopus profile dashboard and projects on the
                web?
              </p>
              <p>
                Your delopus account is a public, anyone can see your delopus
                profile dashboard and projects on the web
              </p>
            </li>
            <li>
              <p>How can I remove or delete my projects from delopus ?</p>
              <p>
                Go to my project and in my project you can choose those projects
                that you want to remove or delete from the top right corner menu
                of the project.
              </p>
            </li>
            <li>
              <p>How can I save Others Projects on my profile?</p>
              <p>Save the projects/posts of other user:-</p>
              <ol type="i">
                <li> Go to the project/feed page.</li>
                <li> Find the project which you want to save </li>
                <li> Click on that project</li>
                <li> The project will open in big screen</li>
                <li> Go to save button on right bottom</li>
                <li> Click on Save Icon</li>
              </ol>
            </li>
            <div className="mg">
              <a href="#">
                See Rules and Regulations to save others projects/posts
              </a>
            </div>
            <li>
              <p>How can I report Others Post on Delopus?</p>
              <p>Report the user’s projects/posts:-</p>
              <ol type="a">
                <li> Go to the project/feed page.</li>
                <li> Find the project which you want to report </li>
                <li> Go to menu icon on right top corner</li>
                <li> Click on Report.</li>
                <li> Select the reason for reporting a post.</li>
                <li> Click on Submit</li>
              </ol>
            </li>
            <div className="mg">
              <a href="#">
                See Rules and Regulations to report others projects/posts
              </a>
            </div>
            <li>
              <p>.How can I share my projects to another social network?</p>
              <p>
                Go to my project and in my project you can choose those projects
                that you want to share and click on that project, pop up will
                come from there you can see the share button is in the right
                bottom, click on and the link will copy then you can post your
                copied link on your social media(like Twitter, Facebook,
                Instagram and so on).
              </p>
            </li>
            <li>
              <p>
                What happens if I share my delopus project post to another
                social network?
              </p>
              <p>
                If someone shares a project to a social network (like Twitter,
                Facebook and so on) using Delopus, the project will be visible
                on that network . In other words, the project will be publicly
                accessible by anyone who has access to its direct link/URL.
              </p>
            </li>
          </ol>
          <li>
            <b>Delete Your Account</b>
          </li>
          <ol type="a">
            <li>
              <p>How can I delete my Delopus account?</p>
              <p>
                If you want to delete your account from Delopus then Contact Us
                to delete your accounts. If you delete your account, your
                profile, projects, likes and Saved Projects will be permanently
                removed.
              </p>
              <p>
                After your account is deleted, you may not be able to sign up
                again with the same username or not be able to add that username
                to another account.
              </p>
              <p>
                After 30 days of your account deletion request, your account and
                all your information will be permanently deleted, and you won't
                be able to retrieve your information.
              </p>
              <p>
                It may take up to 90 days from the beginning of the deletion
                process to delete all the things you've posted. While we're
                deleting this information, it's not accessible to other people
                using Delopus
              </p>
              <p>
                Copies of your information may remain after the 90 days in
                backup storage that we use to recover in the event of a
                disaster, software error, or other data loss event. We may also
                keep your information for things like legal issues, terms
                violations, or harm prevention efforts. Learn more about this in
                our{" "}
                <span>
                  <a href="#">Data Policy.</a>
                </span>
              </p>
            </li>
            <li>
              <p>What can I do if my Delopus account has been deleted?</p>
              <p>
                If your Delopus account was deleted, you’ll see a message
                telling you when you try to log in. Invalid Username or
                Password.. We suggest that you review the Community Guidelines
                carefully along with the posts on all accounts you've created.
                Keep in mind, we may permanently remove an account that
                repeatedly violates the Community Guidelines or Terms of Use.
              </p>
              <p>
                If you think your account was deleted by mistake, you can
                contact us.
              </p>
              <p>
                If your account was deleted by you or someone with your
                password, there's no way to restore it. You can create a new
                account with the same email address you used before, but you may
                not be able to get the same username.
              </p>
            </li>
          </ol>
          <li>
            <b>Account and settings</b>
          </li>
          <ol type="a">
            <li>
              <p>How do I log out of Delopus?</p>
              <p>To logout of delopus</p>
              <ol type="i">
                <li>Click your profile picture in the top right corner.</li>
                <li>Go to the bottom to find Log Out.</li>
                <li>Click on Log Out.</li>
              </ol>
            </li>
            <li>
              <p>Where can I find my Delopus edit profile page?</p>

              <ol type="i">
                <li>Click your profile picture in the top right corner.</li>
                <li> Click on the edit profile.</li>
                <li>The edit profile page will open</li>
              </ol>
            </li>
            <li>
              <p>Where can I find my Delopus edit password page?
</p>

              <ol type="i">
                <li>Click your profile picture in the top right corner.</li>
                <li> Click on the edit password.</li>
                <li>The edit password page will open</li>
              </ol>
            </li>
          </ol>
        </ol>
      </Container>
    </div>
  );
}
