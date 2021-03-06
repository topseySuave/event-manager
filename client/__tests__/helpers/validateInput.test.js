import { validateSignUpInput, validateSignInInput } from
  '../../src/components/authentication/validateInput';
import { validateEventInput, validateCenterInput } from
  '../../src/components/modals/validateInput';
import * as userMock from '../__mocks__/actions/userMock';

describe('Client form should', () => {
  describe('validate sign in input', () => {
    it('which checks for email and password requirments', () => {
      let inputValues = {
        errors: {},
        email: '',
        password: ''
      };
      let { state: { errors }, isValid } = validateSignInInput(inputValues);
      expect(errors.email).toBe('Email is invalid');
      expect(errors.password).toBe('This field is required');
    });

    it('which checks for wrong email and password when signin in', () => {
      let inputValues = {
        errors: {},
        email: 'thisiswrong',
        password: '53'
      };
      let { state: { errors }, isValid } = validateSignInInput(inputValues);
      expect(errors.email).toBe('Email is invalid');
      expect(errors.password)
        .toBe('Password is too short, Must be more than 6 characters');
    });
  });

  describe('validate sign up input', () => {
    it('which checks for all field requirments', () => {
      let inputValues = {
        errors: {},
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        confirmPassword: ''
      };
      let { state: { errors }, isValid } = validateSignUpInput(inputValues);
      expect(errors.email).toBe('Email is Invalid');
      expect(errors.firstName).toBe('This field is required');
      expect(errors.lastName).toBe('This field is required');
      expect(errors.password).toBe('This field is required');
    });

    it('which checks for wrong email and password when signin up', () => {
      let inputValues = {
        errors: {},
        email: '',
        password: '53',
        firstName: 'j',
        lastName: 'm',
        confirmPassword: '28'
      };
      let { state: { errors }, isValid } = validateSignUpInput(inputValues);
      expect(errors.email).toBe('Email is Invalid');
      expect(errors.firstName)
        .toBe('First Name is too short, Must be more than 2 characters');
      expect(errors.lastName)
        .toBe('Last Name is too short, Must be more than 2 characters');
      expect(errors.password)
        .toBe('Password is too short, Must be more than 6 characters');
    });
  });

  describe('Center Validator', () => {
    it('should check for title', () => {
      let values = {
        title: ''
      };
      let { errors, isValid } = validateCenterInput(values);
      expect(errors.title).toBe('Title field is required');
    });

    it('should check for location', () => {
      let values = {
        location: ''
      };
      let { errors, isValid } = validateCenterInput(values);
      expect(errors.location).toBe('Location field is required');
    });

    it('should check for description', () => {
      let values = {
        description: ''
      };
      let { errors, isValid } = validateCenterInput(values);
      expect(errors.description).toBe('Description field is required');
    });

    it('should check for price', () => {
      let values = {
        price: 1
      };
      let { errors, isValid } = validateCenterInput(values);
      expect(errors.price).toBe('Price should be more than 100');
    });
  });

  describe('Event Validator', () => {
    it('should check for title', () => {
      let values = {
        title: ''
      };
      let { errors, isValid } = validateEventInput(values);
      expect(errors.title).toBe('This field is required');
    });

    it('should check for description', () => {
      let values = {
        description: ''
      };
      let { errors, isValid } = validateEventInput(values);
      expect(errors.description).toBe('This field is required');
    });

    it('should check if endDate is greater Than startDate', () => {
      let values = {
        endDate: '2018-05-29T18:27:40.697Z',
        startDate: '2018-05-31T18:27:40.697Z',
      };

      let { errors, isValid } = validateEventInput(values);
      expect(errors.endDate).toBe('End Date should be after Start Date');
    });
  });
});
