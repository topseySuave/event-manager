/* global module */
import faker from 'faker';

const email = faker.internet.email();
const firstName = faker.name.firstName();
const lastName = faker.name.lastName();

const APP_BASE_PATH = 'http://localhost:8000';

const rand = Math.ceil(Math.random() * 100);

module.exports = {
  SignUp: (browser) => {
    browser
      .url(`${APP_BASE_PATH}/signup`)
      .waitForElementVisible('body', 5000)
      .assert.urlEquals(`${APP_BASE_PATH}/signup`)
      .pause(2000)
      .assert.visible('body')

      // check if all input fields and submit button are visible
      .assert.visible('#first_name')
      .assert.visible('#last_name')
      .assert.visible('#email')
      .assert.visible('#password')
      .assert.visible('#confirm_password')
      .assert
      .visible('.col.s12.white-text.btn.waves-effect.gradient__bg.waves-light')

      // set value but check edge cases
      .setValue('#first_name', '')
      .pause(1000)
      .setValue('#last_name', '')
      .pause(1000)
      .setValue('#email', '')
      .pause(1000)
      .setValue('#password', '')
      .pause(1000)
      .setValue('#confirm_password', '')
      .pause(1000)
      .click('.col.s12.white-text.btn.waves-effect.gradient__bg.waves-light')
      .assert.visible('span#first_name')
      .pause(1000)

    // set values to them and submit the form
      .setValue('#first_name', firstName)
      .pause(1000)
      .setValue('#last_name', lastName)
      .pause(1000)
      .setValue('#email', email)
      .pause(1000)
      .setValue('#password', '123456789')
      .pause(1000)
      .setValue('#confirm_password', '123456789')
      .pause(1000)
      .click('.col.s12.white-text.btn.waves-effect.gradient__bg.waves-light')
      .pause(2000)
      .assert.visible('.card-panel.teal.lighten-3');
  },
  LoadSignInPage: (browser) => {
    browser
      .waitForElementVisible('body', 2000)
      .pause(6000)
      .assert.urlEquals(`${APP_BASE_PATH}/signin`);
  }
};
