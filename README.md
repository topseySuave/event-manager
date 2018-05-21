
[![Build Status](https://travis-ci.org/topseySuave/event-manager.svg?branch=develop)](https://travis-ci.org/topseySuave/event-manager)
[![Coverage Status](https://coveralls.io/repos/github/topseySuave/event-manager/badge.svg?branch=develop)](https://coveralls.io/github/topseySuave/event-manager?branch=develop)
[![Maintainability](https://api.codeclimate.com/v1/badges/2219e1701e5995fa3410/maintainability)](https://codeclimate.com/github/topseySuave/event-manager/maintainability)


# Events Manager
Events Manager is a full stack application, that enables users administrate there own centers, An Event registration platform for all of your online and on-site event management needs and handles the entire event lifecycle from start to finish.

## Hosted Application
visit the application [Event-manager](https://boots-events.herokuapp.com/) to get started


## Installation guide

STEP 1: Install `node` version 6 or higher

STEP 2: Install `posgresql` database

Step 3: Clone this repo and cd into it

```
$ git clone https://github.com/topseySuave/event-manager.git
$ cd event-manager
```

STEP 4: Install all dependencies

```
$ npm install
```

STEP 5: Set up postgres for the application

```
check ./config/config.json to add nesseccary database credential
I advise storing such credentials as environment variables for security purposes

```
STEP 6: Add a `.env` file in root of project and setup the following:

```
SECRET_KEY=<anyWordsOfYourChoice>
DATABASE_URL=<elephantSqlOnlineDatabaseLink>
CLOUDINARY_URL=<yourCloudinaryUrl>
CLOUDINARY_UPLOAD_PRESET=<yourCloudinaryUploadPreset>
EMAIL=<yourGmailAccount>
PASSWORD=<yourGmailPassword>
```

STEP 7: Run migration and seed the database with nesseccary data

```
$ sequelize db:migrate && sequelize db:seed:all
```

STEP 8: Start the application

```
$ npm run start:dev
```

STEP 9: Navigate to application on your browser

```
localhost:8000
```

## Key Features

* User can an create account with email and password
* Users are then be authenticated with email and password
* Admin can create, modify or delete centers
* Users can create, modify or delete event bookings
* Admin can accept or reject such events
* Mail notifications are sent to users when
  * Admin approves or rejects event
* Users can search for center by name or location, price, facilities and capacity

## Testing
The app uses: 
* `Mocha/Chai` and `Super-Test` for backend testing.
* `Enzyme` and `Jest` for frontend testing
* `NightWatch` for End-2-End testing

> - `npm test` - to run test and display code coverage for back-end
> - `npm run test:client` - to run test for front-end
> - `npm run e2e` - to run end-to-end test


## API Documentation
Click [Here](https://boots-events.herokuapp.com/docs) to view our API documentation



## Limitations


* Authorization tokens are only valid for 24 hours
* Only authenticated users can access key features such as event booking
* User cannot deactivate their account

## Technologies
* [Node](https://www.nodejs.org) - A JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.

* [Express](https://www.expressjs.com) - A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

* [Sequelize](http://www.docs.sequelizejs.com) - Sequelize is a promise-based ORM for Node.js v4 and up. It supports the dialects PostgreSQL and features solid transaction support, relations, read replication and more

* [PosgreSQL](https://www.postgresql.org/) - A powerful, open source object-relational database system.

* [React](https://www.reactjs.com) - A JavaScript library for building user interfaces

* [Redux](https://redux.js.org/) - Redux is a predictable state container for JavaScript apps.

* [Material-ui](https://material-ui.com) - React components that implement Google's Material Design.

* [MaterialCss](https://materialcss.com) - A modern responsive front-end framework based on Material Design

## License
This project is licensed under 
[MIT](https://github.com/topseySuave/event-manager/blob/develop/LICENSE)

## Contribution
If you are interested in contributing to the development of this project,
check the [contributing](contributing.md) file.
When contributing to this repository, please reach out to me or other contributors via email, issue or any other means to discuss the changes you wish to make.

## Author
* Micah Gabriel Ogechukwu (TopseySuave)

## Acknowledgment

* Materialize Css

* Material-ui

* Reactjs

* Reduxjs

* Cloudinary

* Expressjs

* Nodejs


## FAQ

### Is this an Open-Source Application?

```
Yes it is, and contributing to the development of this application is by raising PRs.
```

### Who can contribute?

```
Anyone! This application is open to all those who want to contribute to open-source 
development and are willing to follow set standards for contributing.
```

### Is there a set standard for PRs to this repository?

```
Yes, there are set conventions for PRs to this repository and can be found in the 
project wiki.
```

### What language was used to develop this application?

```
This project is a full stack Javascript application.
```

### Can I clone this application for personal use?

```
Yes! This application is licensed under MIT, and is open for whatever you may choose 
to use it for.
```