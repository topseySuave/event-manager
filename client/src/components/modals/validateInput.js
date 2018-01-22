/* eslint-disable */
import isEmpty from 'lodash/isEmpty';

export function validateEventInput(data) {
    let errors = {};

    if (isEmpty(data.title)) {
        errors.title = 'This field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
}

export function validateCenterInput(data) {
    let errors = {};

    if (isEmpty(data.title)) {
        errors.title = 'Title field is required';
    }

    if (isEmpty(data.location)) {
        errors.location = 'Location field is required';
    }

    if(isEmpty(data.startDate)){
        errors.startDate = 'Start Date is required';
    }
    if(data.startDate < Date().now){
        errors.startDate = 'Date isn\'t correct. Should be a day after today not before';
    }

    if(isEmpty(data.endDate)){
        errors.endDate = 'End Date is required';
    }
    if(data.endDate < Date().now){
        errors.endDate = 'Date isn\'t correct. Should be a day after today not before';
    }

    if(isEmpty(data.description)){
        errors.description = 'Description field is required';
    }

    if(data.price < 100){
        errors.price = 'Price should be more than 100';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
}
