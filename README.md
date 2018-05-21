
[![Build Status](https://travis-ci.org/topseySuave/event-manager.svg?branch=develop)](https://travis-ci.org/topseySuave/event-manager)
[![Coverage Status](https://coveralls.io/repos/github/topseySuave/event-manager/badge.svg?branch=develop)](https://coveralls.io/github/topseySuave/event-manager?branch=develop)
[![Maintainability](https://api.codeclimate.com/v1/badges/2219e1701e5995fa3410/maintainability)](https://codeclimate.com/github/topseySuave/event-manager/maintainability)


# Events Manager
Events Manager is a full stack application, that enables users administrate there own centers, An Event registration platform for all of your online and on-site event management needs and handles the entire event lifecycle from start to finish.

## Hosted Application
https://boots-events.herokuapp.com/

## API Documentation
https://boots-events.herokuapp.com/docs


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

STEP 6: Run migration and seed the database with nesseccary data

```
$ sequelize db:migrate && sequelize db:seed:all
```

STEP 7: Start the application

```
$ npm run start:dev
```

STEP 8: Navigate to application on your browser

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

`chai` and `chai-http` are used for backend testing

```
$ npm run test
```

## Limitations


* Authorization tokens are only valid for 24 hours
* Only authenticated users can access key fuetures such as event booking
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
This project is licensed under MIT.
[https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT)

## Contribution
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