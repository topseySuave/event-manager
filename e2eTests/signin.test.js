/* global module */
const APP_BASE_PATH = 'http://localhost:8000/signin';

module.exports = {
  'first view to the landing page': (browser) => {
    browser
      .url(APP_BASE_PATH)
      .waitForElementVisible('body', 5000)
      .assert.urlEquals(`${APP_BASE_PATH}`)
      .pause(2000)
      .assert.visible('body')
      .end();
  }
};
