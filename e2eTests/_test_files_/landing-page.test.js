/* global module */
const APP_BASE_PATH = 'http://localhost:8000';

module.exports = {
  LandingPage: (browser) => {
    browser
      .url(`${APP_BASE_PATH}`)
      .waitForElementVisible('body', 2000)
      .pause(3000)
      .assert.visible('.body__holdr')
      .assert.visible('.header')
      .assert
      .visible('.container.popular__events .col.s12.cards-container .card')
      .end();
  },
  EndE2ETest: (browser) => {
    browser.end();
  }
};
