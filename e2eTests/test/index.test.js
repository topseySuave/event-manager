import {
  SignUp,
  LoadSignInPage
} from '../_test_files_/signup.test';
import {
  SignIn,
  SignInAsNormalUser,
  LoadEventsPage,
  SignOut
} from '../_test_files_/signin.test';
import { LandingPage, EndE2ETest } from '../_test_files_/landing-page.test';
import {
  SearchAndViewCenter,
  RejectEvent,
  EditCenter
} from '../_test_files_/center-details.test';
import { NoAddCenterButton, CreateCenter } from '../_test_files_/center.test';
import { MyEventsPage } from '../_test_files_/events.test';

module.exports = {
  // Navigate to the landing page from my-events page
  'View and assert if elements are visible on the landing page': browser =>
    LandingPage(browser),

  // sign up a user
  'Sign up to the application': browser => SignUp(browser),

  // assert user is on the signin page once signup is successful
  'Load sign in page': browser => LoadSignInPage(browser),

  // sign in a user
  'Signin in an admin': browser => SignIn(browser),

  // load my events page
  'Load my-events page': browser => LoadEventsPage(browser),

  // check if add center button is visible and create a center
  'check if add center button is visible and create a center': browser =>
    CreateCenter(browser),

  // Edit this center
  'Edit this center': browser => EditCenter(browser),

  // admin should reject an event
  'admin should reject an event': browser => RejectEvent(browser),

  // Sign out of the application
  'Sign out of the application': browser => SignOut(browser),

  // sign in a normal user, view and edit your event
  'signin as a normal user': browser => SignInAsNormalUser(browser),

  // // assert and view my events page
  'load my-events page, edit and delete event': browser =>
    MyEventsPage(browser),

  // search for a center and navigate to that center
  'search/view a center in ikeja with capacity of 200 and above': browser =>
    SearchAndViewCenter(browser),

  'Sign out of the application': browser => SignOut(browser),

  // should not see the add center button not signed in
  'should not see the add center button if not signed in': browser =>
    NoAddCenterButton(browser),

  // end test
  'end tests': browser => EndE2ETest(browser)
};
