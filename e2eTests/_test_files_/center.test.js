/* global module */
const APP_BASE_PATH = 'http://localhost:8000';
let signInBtn = '.btn.col.s12.white-text.gradient__bg';
signInBtn += '.btn-register.waves-effect.waves-light';

const rand = Math.ceil(Math.random() * 100);

// let addCenterBtn = '.tooltipped.modal-trigger.btn-large';
// addCenterBtn += '.btn-floating.pulse.green.lighten-1';

let selectField = '#edit-center-form button[type="button"] ';
selectField += 'div[role="presentation"] > div[role="menu"] ';
selectField += '> div > span[role="menuitem"]';

let description = 'The Lighthouse Event Centre offers a beautiful, spacious, ';
description += 'and elegant venue, large Multipurpose Hall with seating ';

module.exports = {
  NoAddCenterButton: (browser) => {
    browser
      .url(`${APP_BASE_PATH}/centers`)
      .waitForElementVisible('body', 2000)
      .pause(2000)

      // can search for a center by location e.g: ikeja
      .setValue('#fast_location', 'ikeja')
      .click('button.btn.gradient__bg')

      // wait for results
      .pause(2000)

      // check if add center button is not visible
      .assert
      .elementNotPresent('a[href="#edit_center_modal"]');
  },
  CreateCenter: (browser) => {
    browser
      .pause(1000)
      // now check if add center button is visible and create a center
      .click('a[href="#edit_center_modal"]')
      .pause(1000)
      // test edge cases
      .setValue('#title', '')
      .pause(800)
      .setValue('#location', '')
      .pause(800)
      .setValue('#price', '')
      .pause(800)
      .setValue('#capacity', '')
      .pause(800)
      .clearValue('.input-field.col.s12 > textarea[type="text"]')
      .setValue('.input-field.col.s12 > textarea[type="text"]', '')
      .pause(800)
      .click('#submitCenterForm')
      .pause(1000)

      // set actual data
      .setValue('#title', `The Lighthouse Event Centre ${rand}`)
      .pause(800)
      .setValue('#location', 'Aja, lagos')
      .pause(800)
      .setValue('#price', '100000')
      .pause(800)
      .setValue('#capacity', '600')
      .pause(800)
      .clearValue('.input-field.col.s12 > textarea[type="text"]')
      .setValue(
        '.input-field.col.s12 > textarea[type="text"]',
        description
      )
      .pause(800)
      .click('#submitCenterForm')
      .pause(5000);
  }
};
