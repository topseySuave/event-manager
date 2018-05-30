/* global module */
const APP_BASE_PATH = 'http://localhost:8000';

module.exports = {
  'first view to the landing page': (browser) => {
    browser
      .url(APP_BASE_PATH)
      .waitForElementVisible('body', 5000)
      .assert.urlEquals(`${APP_BASE_PATH}`)
      .pause(10000)
      .assert.visible('body')
      .end();
  }
};
