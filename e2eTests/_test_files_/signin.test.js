/* global module */
const APP_BASE_PATH = 'http://localhost:8000';

let signInBtn = '.btn.col.s12.white-text.gradient__bg';
signInBtn += '.btn-register.waves-effect.waves-light';

module.exports = {
  SignIn: (browser) => {
    browser
      .url(`${APP_BASE_PATH}/signin`)
      .waitForElementVisible('body', 2000)
      .assert.urlEquals(`${APP_BASE_PATH}/signin`)
      .pause(2000)
      .assert.visible('body')

      // check if all input fields and submit button are visible
      .assert.visible('#email')
      .assert.visible('#password')
      .pause(2000)

      // test edge case
      .setValue('#email', '')
      .pause(800)
      .setValue('#password', '')
      .pause(800)
      .click(`${signInBtn}`)
      .assert.visible('span#email')
      .pause(1000)

    // set values to them and submit the form
      .setValue('#email', 'tope@gmail.com')
      .pause(800)
      .setValue('#password', '123456789')
      .pause(800)
      .click(`${signInBtn}`);
  },
  SignInAsNormalUser: (browser) => {
    browser
      .url(`${APP_BASE_PATH}/signin`)
      .waitForElementVisible('body', 2000)
      .assert.urlEquals(`${APP_BASE_PATH}/signin`)
      .pause(2000)
      .assert.visible('body')

      // test edge case
      .setValue('#email', '')
      .pause(800)
      .setValue('#password', '')
      .pause(800)
      .click(`${signInBtn}`)
      .assert.visible('span#email')
      .pause(1000)

      // set values to them and submit the form
      .setValue('#email', 'dan.foster@gmail.com')
      .pause(800)
      .setValue('#password', '123456789')
      .pause(800)
      .click(`${signInBtn}`);
  },
  LoadEventsPage: (browser) => {
    browser
      .waitForElementVisible('body', 3000)
      .pause(2000)
      .assert.urlEquals(`${APP_BASE_PATH}/my-events`);
  },
  SignOut: (browser) => {
    browser
      .url(`${APP_BASE_PATH}/signout`)
      .pause(2000)
      .url(`${APP_BASE_PATH}/`)
      .assert.urlEquals(`${APP_BASE_PATH}/`);
  }
};
