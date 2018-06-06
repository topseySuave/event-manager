/* global module */
const APP_BASE_PATH = 'http://localhost:8000';

let description = 'The Lighthouse Event Centre offers a beautiful, spacious, ';
description += 'and elegant venue, large Multipurpose Hall with seating ';
const rand = Math.ceil(Math.random() * 100);
let signInBtn = '.btn.col.s12.white-text.gradient__bg';
signInBtn += '.btn-register.waves-effect.waves-light';

let rejectBtn = 'li[id="collection-item-0"] button[type="button"]#rejectEvent';

module.exports = {
  SearchAndViewCenter: (browser) => {
    browser
      .url(`${APP_BASE_PATH}/centers`)
      .pause(2000)
      .assert.visible('.center__holdr')
      .assert.visible('.center-align.search-faster-form.full-width')

      // search for center in ikeja with a capacity of 200 and above
      .setValue('#fast_capacity', 200)
      .pause(1000)
      .setValue('#fast_location', 'ikeja')
      .pause(1000)
      .click('button[type="submit"]')
      .pause(1000)

      // nav to that center page
      .click('.col.s12.cards-container .card')
      .pause(1500)
      .assert.visible('.center__details')
      .assert
      .containsText('.center__details > section > h5', 'About this Center');
  },

  /* *
   * TODO: add book center / create event feature later
   * beacuse of startDate and endDate issues
   *
   * 'book this center / create an event': (browser) => {
   *   browser
   *     .pause(1000)
   *     .assert.visible('#openBookCenter')
   *     .click('#openBookCenter')
   *     .pause(800)

   *    // check if all fields are visible
   *    // .assert.visible('#creatEventModal')
   *    .assert.visible('#event_title')
   *    .assert.visible('#eventStartDate')
   *    .assert.visible('#eventEndDate')
   *    .assert.visible('#eventDescription')
   *    .assert.visible('#submitEvent')

   *    // set values to each fields
   *    .setValue('#event_title', `A test event for e2e ${rand}`)
   *    .setValue('input[type="text"]#eventStartDate', Date.now() + 10)
   *    .setValue('input[type="text"]#eventEndDate', Date.now() + 20)
   *    .setValue('#eventDescription', description)
   *    .click('#submitEvent')
   *    .pause(3000)

   *    // log out
   *    .assert.visible('button[id="accountBtn"]')
   *    .click('button[id="accountBtn"]')
   *    .pause(2000)
   *    .url(`${APP_BASE_PATH}/signout`)
   *    .pause(2000);
   *},
   * */
  RejectEvent: (browser) => {
    browser
      .url(`${APP_BASE_PATH}/center/1/cononical-event-center`)
      .pause(3000)
      .execute(() => {
        scrollTo(0, document.body.scrollHeight);
      })
      .pause(1000)
      .moveToElement('li#collection-item-0', 10, 10)
      .pause(1500)
      .assert.visible('button#rejectEvent-0')
      .click('button#rejectEvent-0')
      .pause(3000)

      .assert.visible('#yesRejectEvent')
      .click('#yesRejectEvent')
      .pause(7000);
  },
  EditCenter: (browser) => {
    browser

      // nav to center page to edit
      .url(`${APP_BASE_PATH}/center/1/cononical-event-center`)
      .pause(2000)
      .assert.visible('#editCenterBtn')
      .click('#editCenterBtn')
      .pause(800)
      .clearValue('#center_description')
      .setValue('#center_description', description)
      .pause(1000)
      .assert.visible('button[type="submit"]#submitEditCenterForm')
      .click('button[type="submit"]#submitEditCenterForm')
      .pause(5000);
  },
};
