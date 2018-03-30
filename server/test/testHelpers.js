import faker from 'faker';

export const host = '/api/v1';
export const usersApiRoute = `${host}/users`;
export const centersApiRoute = `${host}/centers`;

// Init users constants
export const demoUserEmail = faker.internet.email();
export const demoUserPassword = faker.internet.password();
export const adminEmailAddr = 'topse@gmail.com';
export const constMailAddr = 'gabriel@gmail.com';
export const constPass = '123456789';


// Init center constants
export const democenterTitle = faker.internet.email();
export const demoCenterImg = faker.internet.password();
export const democenterLocation = faker.internet.email();
export const demoCenterDescrp = faker.internet.password();
export const demoCenterFacilities = faker.internet.password();
export const democenterCapacity = parseInt(500, 10);
export const demoCenterPrice = parseInt(200000, 10);
