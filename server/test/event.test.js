/* global describe, it */

import chai from 'chai';
import jwtDecode from 'jwt-decode';
import supertest from 'supertest';
import app from '../app';
import testInit from './testInit';

chai.should();
const request = supertest(app);
const { expect } = chai;
const testConstants = new testInit();

// describe('Test event API', () => {
//   describe('Creating a new event', () => {
//     it();
//   });
// });
