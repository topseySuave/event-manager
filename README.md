
[![Build Status](https://travis-ci.org/topseySuave/event-manager.svg?branch=develop)](https://travis-ci.org/topseySuave/event-manager)
[![Coverage Status](https://coveralls.io/repos/github/topseySuave/event-manager/badge.svg?branch=develop)](https://coveralls.io/github/topseySuave/event-manager?branch=develop)


## Boots Events Manager
    A Event Manager Application that enables users administrate there own events

 ## Application Features
   - Sign in and Sign up
   - Create Events
   - Create Center
   - View Center details

 ### Why this App is Useful
   - Enables user Manager and Easily Attend Events.

 ### Get Started
  #### Clone the Application by running
    $ git clone https://github.com/topseySuave/event-manager.git

## Setup guide
 - Change your directory ``cd`` into the newly created folder ``cd event-manager``
 - Install Dependencies by running 
 ```
 npm install
 ```
 - To Start the server run 
 ```
 npm start
 ```
 - Open the browser and Navigate to 
 ```
 localhost:3000
 ```
 - Run test 
 ```
 npm test
 ```
## For api documentation
 ```/doc```

## Possible API routes Endpoints
<ol>
   <li>POST  `/api/v1/centers` to create a new center </li>
   <li>GET  `/api/v1/centers` to get all centers.</li>
   <li>PUT  `/api/v1/centers/:id` to modify a center</li>
   <li>DELETE  `/api/v1/centers/:id` to delete a center</li>
   <li>GET `/api/v1/centers/:id` to get a single center</li>
   <li>POST  `/api/v1/events` to create a new event </li>
   <li>GET  `/api/v1/events` to get all events.</li>
   <li>PUT  `/api/v1/events/:id` to modify an event</li>
   <li>DELETE  `/api/v1/events/:id` to delete an event</li>
   <li>GET `/api/v1/events/:id` to get a single event</li>
</ol>

### License
    ISC
