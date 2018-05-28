import { validateSignUpInput, validateSignInInput } from
  '../../src/components/authentication/validateInput';
import * as userMock from '../__mocks__/actions/userMock';

describe('Client Input Validator', () => {
  describe('Sign In Validator', () => {
    it('should check for email and password requirments', () => {
      let inputValues = {
        email: '',
        password: ''
      };
      let { errors, isValid } = validateSignInInput(inputValues);
      expect(errors.email).toBe('Email is invalid');
      expect(errors.password).toBe('This field is required');
    });

    it('should check for wrong email and password', () => {
      let inputValues = {
        email: 'thisiswrong',
        password: '53'
      };
      let { errors, isValid } = validateSignInInput(inputValues);
      expect(errors.email).toBe('Email is invalid');
      expect(errors.password)
        .toBe('Password is too short, Must be more than 6 characters');
    });
  });

  describe('Sign Up Validator', () => {
    it('should check for email and password requirments', () => {
      let inputValues = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        confirmPassword: ''
      };
      let { errors, isValid } = validateSignUpInput(inputValues);
      expect(errors.email).toBe('Email is Invalid');
      expect(errors.firstName).toBe('This field is required');
      expect(errors.lastName).toBe('This field is required');
      expect(errors.password).toBe('This field is required');
    });

    it('should check for wrong email and password', () => {
      let inputValues = {
        email: '',
        password: '53',
        firstName: 'j',
        lastName: 'm',
        confirmPassword: '28'
      };
      let { errors, isValid } = validateSignUpInput(inputValues);
      expect(errors.email).toBe('Email is Invalid');
      expect(errors.firstName)
        .toBe('First Name is too short, Must be more than 2 characters');
      expect(errors.lastName)
        .toBe('Last Name is too short, Must be more than 2 characters');
      expect(errors.password)
        .toBe('Password is too short, Must be more than 6 characters');
    });
  });
});
