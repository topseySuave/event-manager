/* global module */
const APP_BASE_PATH = 'http://localhost:8000';

module.exports = {
  'signin in': (browser) => {
    browser
      .url(`${APP_BASE_PATH}`)
      .waitForElementVisible('body', 2000)
      .pause(2000)
      .assert.visible('.body__holdr')
      .assert.visible('.header')
      .assert
      .visible('.container.popular__events .col.s12.cards-container .card')
      .click('a.btn.waves-effect.red.darken-1')
      .assert.urlEquals(`${APP_BASE_PATH}/centers`)
      .pause(3000)
      .end();
  }
};
