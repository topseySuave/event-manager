/* eslint-disable */
import isEmpty from "lodash/isEmpty";
import isEmail from "validator/lib/isEmail";

// const errors = {};
const minLength = 2;
const passMinLength = 6;

export function validateSignUpInput(stateInput) {
  let { errors } = stateInput;
  errors = {};
  if (isEmpty(stateInput.email)) {
    errors.email = "This field is required";
  }
  if (!isEmail(stateInput.email)) {
    errors.email = "Email is Invalid";
  }

  if (isEmpty(stateInput.firstName)) {
    errors.firstName = "This field is required";
  } else if (stateInput.firstName.length < 2) {
    errors.firstName = 'First Name is too short, Must be more than 2 characters';
  }

  if (isEmpty(stateInput.lastName)) {
    errors.lastName = "This field is required";
  } else if (stateInput.lastName.length < 2) {
    errors.lastName = 'Last Name is too short, Must be more than 2 characters';
  }

  if (isEmpty(stateInput.password)) {
    errors.password = "This field is required";
  } else if (stateInput.password.length < passMinLength) {
    errors.password =
      "Password is too short, Must be more than " +
      passMinLength +
      " characters";
  }

  if (isEmpty(stateInput.confirmPassword)) {
    errors.confirmPassword = "This field is required";
  }

  if (stateInput.password !== stateInput.confirmPassword) {
    errors.confirmPassword = "Password must match";
  }
  stateInput.errors = errors;

  return {
    state: stateInput,
    isValid: isEmpty(stateInput.errors)
  };
}

export function validateSignInInput(stateInput) {
  let { errors } = stateInput;
  errors = {};
  if (isEmpty(stateInput.email)) {
    errors.email = "This field is required";
  }

  if (!isEmail(stateInput.email)) {
    errors.email = "Email is invalid";
  }

  if (isEmpty(stateInput.password)) {
    errors.password = "This field is required";
  } else if (stateInput.password.length < passMinLength) {
    errors.password =
      "Password is too short, Must be more than " +
      passMinLength +
      " characters";
  }
  stateInput.errors = errors;

  return {
    state: stateInput,
    isValid: isEmpty(stateInput.errors)
  };
}
