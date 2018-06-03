/* global module */
const APP_BASE_PATH = 'http://localhost:8000';

module.exports = {
  'signin in': (browser) => {
    browser
      .url(`${APP_BASE_PATH}/signin`)
      .waitForElementVisible('body', 5000)
      .assert.urlEquals(`${APP_BASE_PATH}/signin`)
      .pause(2000)
      .assert.visible('body')
      // check if all input fields and submit button are visible

      .assert.visible('#email')
      .assert.visible('#password')
      .pause(2000)

    // set values to them and submit the form
      .setValue('#email', 'tope@gmail.com')
      .setValue('#password', '123456789')
      .click('.btn.col.s12.white-text.gradient__bg.btn-register.waves-effect.waves-light');
  },
  'load my events page': (browser) => {
    browser
      .waitForElementVisible('body', 3000)
      .pause(2000)
      .assert.urlEquals(`${APP_BASE_PATH}/my-events`)
      .end();
  },

//   /* *
//    * should sign out when signin is successful so the next
//    * sign in page loads it will be displayed
//    */
//   'should sign out when signin is successful': (browser) => {
//     browser
//       .url(`${APP_BASE_PATH}/signout`)
//       .pause(2000)
//       .assert.urlEquals(`${APP_BASE_PATH}/`)
//       .end();
//   }
};
