import chai from 'chai';
import uuidv4 from 'uuid/v4';
import dotenv from 'dotenv';
import supertest from 'supertest';
import app from '../app';

chai.should();
const request = supertest(app);
const { expect } = chai;

// Init constants
const host = '/api/v1';

