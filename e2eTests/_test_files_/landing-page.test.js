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
  FourOhFour: (browser) => {
    browser
      .url(`${APP_BASE_PATH}/center/ThisIsAPageThatDeosNotExist/title`)
      .pause(2000)
      .assert.urlEquals(`${APP_BASE_PATH}/404`)
      .pause(1000)
      .assert.title('Page not Found | Boots Events Manager')
      .assert.visible('h1.gradient_text')
      .assert.containsText('h1.gradient_text', '404');
  },
  EndE2ETest: (browser) => {
    browser.end();
  }
};
