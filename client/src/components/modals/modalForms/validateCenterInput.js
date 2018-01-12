/* eslint-disable */
import isEmpty from 'lodash/isEmpty';

// const errors = {
//     center_title: '',
//     location: '',
//     description: '',
//     price: ''
// };

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

