/* eslint-disable */
import isEmpty from 'lodash/isEmpty';
import isEmail from 'validator/lib/isEmail';

const errors = {};
const minLength = 2;
const passMinLength = 6;

export function validateSignUpInput(data) {

    if (isEmpty(data.email)) {
        errors.email = 'This field is required';
    }
    if (!isEmail(data.email)) {
        errors.email = 'Email is Invalid';
    }

    if (isEmpty(data.firstName)) {
        errors.firstName = 'This field is required';
    } else if (data.firstName.length < minLength) {
        errors.firstName = 'First Name is too short, Must be more than ' + minLength + 'Characters';
    }

    if (isEmpty(data.lastName)) {
        errors.lastName = 'This field is required';
    } else if (data.lastName.length < minLength) {
        errors.lastName = 'Last Name is too short, Must be more than ' + minLength + 'Characters';
    }

    if (isEmpty(data.password)) {
        errors.password = 'This field is required';
    } else if (data.password.length < passMinLength) {
        errors.password = 'Password is too short, Must be more than ' + passMinLength + 'characters';
    }

    if (isEmpty(data.confirmPassword)) {
        errors.confirmPassword = 'This field is required';
    }

    if (data.password !== data.confirmPassword) {
        errors.confirmPassword = 'Password must match';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
}

export function validateSignInInput(data) {
    if (isEmpty(data.email)) {
        errors.email = 'This field is required';
    }
    if (!isEmail(data.email)) {
        errors.email = 'Email is Invalid';
    }

    if (isEmpty(data.password)) {
        errors.password = 'This field is required';
    } else if (data.password.length < passMinLength) {
        errors.password = 'Password is too short, Must be more than ' + passMinLength + 'characters';
    }
}

