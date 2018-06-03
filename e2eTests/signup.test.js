// /* global module */
// const APP_BASE_PATH = 'http://localhost:8000';

// const rand = Math.ceil(Math.random() * 100);

// module.exports = {
//   'sign up to the application': (browser) => {
//     browser
//       .url(`${APP_BASE_PATH}/signup`)
//       .waitForElementVisible('body', 5000)
//       .assert.urlEquals(`${APP_BASE_PATH}/signup`)
//       .pause(2000)
//       .assert.visible('body')

//       // check if all input fields and submit button are visible
//       .assert.visible('#first_name')
//       .assert.visible('#last_name')
//       .assert.visible('#email')
//       .assert.visible('#password')
//       .assert.visible('#confirm_password')
//       .assert
//       .visible('.col.s12.white-text.btn.waves-effect.gradient__bg.waves-light')

//     // set values to them and submit the form
//       .setValue('#first_name', 'david')
//       .setValue('#last_name', 'beckham')
//       .setValue('#email', `beck.ham@my${rand}.com`)
//       .setValue('#password', '123456789')
//       .setValue('#confirm_password', '123456789')
//       .click('.col.s12.white-text.btn.waves-effect.gradient__bg.waves-light')
//       .pause(1000)
//       .assert.visible('.card-panel.teal.lighten-3');
//   },
//   'load sign in page': (browser) => {
//     browser
//       .waitForElementVisible('body', 3000)
//       .pause(6000)
//       .assert.urlEquals(`${APP_BASE_PATH}/signin`)
//       .end();
//   }
// };
