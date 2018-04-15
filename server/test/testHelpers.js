import faker from 'faker';

/**
 * Assign test helpers Constants
 * @class
 * @memberof testHelper
 */
export default class testHelper {
  /**
     * Class Constructor
     * @constructor
     * @returns {void} Class instance
     * @memberof testHelper
     */
  constructor() {
    this.host = '/api/v1';
    this.usersApiRoute = `${this.host}/users`;
    this.centersApiRoute = `${this.host}/centers`;
    this.eventsApiRoute = `${this.host}/events`;

    // Init users constants
    this.demoUserEmail = faker.internet.email();
    this.demoUserPassword = faker.internet.password();
    this.adminEmailAddr = 'topse@gmail.com';
    this.constMailAddr = 'gabriel@gmail.com';
    this.constPass = '123456789';

    // Init center constants
    this.democenterTitle = faker.name.title();
    this.demoCenterImg = faker.image.imageUrl();
    this.democenterLocation = faker.address.streetAddress();
    this.demoCenterDescrp = faker.lorem.paragraph();
    this.demoCenterFacilities = ['swimming pool', 'power', 'chairs', 'parking lot', 'stage'];
    this.democenterCapacity = parseInt(Math.ceil(Math.random() * 5000) + 10, 10); // Return a random number between 10 and 5000 for the capacity of the center
    this.demoCenterPrice = parseInt(Math.ceil(Math.random() * 200000) + 10000, 10); // Return a random number between 10000 and 200000 for the price of the center

    // Init Event constants
    this.demoEventTitle = faker.name.title();
    this.demoEventImg = faker.image.imageUrl();
    this.demoEventLocation = faker.address.streetAddress();
    this.demoEventStartDate = faker.date.future();
    this.demoEventEndDate = faker.date.future();
    this.demoEventPastedDate = faker.date.past();
    this.demoEventDescrp = faker.lorem.paragraph();
  }

  /**
     * Sets the token property
     *
     * @param {string} token
     * @returns {string} 'token'
     * @memberof testHelper
     */
  setToken(token) {
    this.token = token;
  }

  /**
     * Gets the token property
     *
     * @returns {string} 'token'
     * @memberof testHelper
     */
  getToken() {
    return this.token;
  }
}
