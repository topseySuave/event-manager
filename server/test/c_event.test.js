/* global describe, it */

import chai from 'chai';
import jwtDecode from 'jwt-decode';
import supertest from 'supertest';
import app from '../app';
import testHelper from './testHelpers';

chai.should();
const request = supertest(app);
const { expect } = chai;
const testHelpers = new testHelper();

// describe('Test event API', () => {
//   describe('Creating a new event', () => {
//     it();
//   });
// });