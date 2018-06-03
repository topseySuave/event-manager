/* global module */
const APP_BASE_PATH = 'http://localhost:8000';

module.exports = {
  'should not see the add center button not signed in': (browser) => {
    browser
      .url(`${APP_BASE_PATH}/centers`)
      .waitForElementVisible('body', 2000)
      .pause(2000)

      // can search for a center by location e.g: ikeja
      .setValue('#fast_location', 'ikeja')
      .click('button.btn.gradient__bg')

      // wait for results
      .pause(2000)

      // check if add center button is visible
      .assert
      .elementNotPresent('.tooltipped.modal-trigger.btn-large.btn-floating.pulse.green.lighten-1')
      .end();
  }
};
