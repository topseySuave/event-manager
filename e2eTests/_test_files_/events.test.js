/* global module */
const APP_BASE_PATH = 'http://localhost:8000';

const rand = Math.ceil(Math.random() * 100);
let signInBtn = '.btn.col.s12.white-text.gradient__bg';
signInBtn += '.btn-register.waves-effect.waves-light';

module.exports = {
  MyEventsPage: (browser) => {
    browser
      .waitForElementVisible('body', 3000)
      .pause(2000)
      .assert.urlEquals(`${APP_BASE_PATH}/my-events`)
      .pause(2000)
      .assert.visible('div.right-align > button#accountModBtn')
      .click('div.right-align > button#accountModBtn')
      .waitForElementVisible(
        'div[role="presentation"] > div[role="menu"]',
        2000
      )
      .click(`div[role="presentation"] > div[role="menu"] 
      > div > span[id="editBtnItem"]`)
      .pause(2000)

      // set values to text fields
      .assert.visible('#event_field')
      .clearValue('#event_field')
      .pause(800)
      .setValue('#event_field', `FAMESTAR NAIJA ${rand}`)
      .pause(800)
      .assert.visible('textarea#description')
      .clearValue('textarea#description')
      .setValue('textarea#description', `FAMESTAR is a Transmedia reality show
       and creative programme rolled into one. It is a programme that seeks to
       discover and empower young Africans (and Nigerians) who possesses
       exceptional talents in key entertainment and creative sectors.`)
      .pause(800)
      .assert.visible('#editEventForm')
      .click('#editEventForm')
      .pause(3000)

      // try to delete an event
      .click('div.right-align > button#accountModBtn')
      .pause(1000)
      .waitForElementVisible(
        'div[role="presentation"] > div[role="menu"]',
        2000
      )
      .pause(800)
      .click(`div[role="presentation"] > div[role="menu"] 
      > div > span[id="deleteBtnItem"]`)
      .waitForElementVisible('div.alertModal', 2000)
      .pause(1000)
      .assert.visible('button[type="button"]#yesDelete')
      .click('button[type="button"]#yesDelete')
      .pause(1000);
  }
};
