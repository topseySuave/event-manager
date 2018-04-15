import Validator from 'validatorjs';

/**
 * @export
 * @class Validation
 */
export class Validation {
  /**
     * Validate Center record
     *
     * @param {object} req - HTTP Request
     * @param {object} res - HTTP Response
     * @param {function} next
     * @returns {object} Class instance
     * @memberof Validation
     */
  validateCenter(req, res, next) {
    const centerRules = {
      title: 'required|string',
      location: 'required|string',
      description: 'required|string',
      facilities: 'array',
      capacity: 'required|integer',
      price: 'required|integer'
    };

    let validate = new Validator(req.body, centerRules);
    if (validate.passes()) return next();

    let error = {}, title = validate.errors.first('title'),
      location = validate.errors.first('location'),
      description = validate.errors.first('description'),
      facilities = validate.errors.first('facilities'),
      capacity = validate.errors.first('capacity'),
      price = validate.errors.first('price');

    if(title) {
      error.title = title;
    }
    if(location) {
      error.location = location;
    }
    if(description) {
      error.description = description;
    }
    if(facilities) {
      error.facilities = facilities;
    }
    if(capacity) {
      error.capacity = capacity;
    }
    if(price) {
      error.price = price;
    }

    return res.status(400).send({
      message: 'a required field is missing',
      statusCode: 400,
      error
    });
  }

  /**
     * Validate Event record
     *
     * @param {object} req - HTTP Request
     * @param {object} res - HTTP Response
     * @param {function} next
     * @returns {object} Class instance
     * @memberof Validation
     */
  validateEvent(req, res, next) {
    const eventRules = {
      title: 'required|string',
      description: 'required|string',
      startDate: 'required|date',
      endDate: 'required|date',
      centerId: 'required|integer',
      userId: 'required|integer'
    };

    let validate = new Validator(req.body, eventRules);
    if (validate.passes()) return next();

    let error = {}, title = validate.errors.first('title'),
      description = validate.errors.first('description'),
      startDate = validate.errors.first('startDate'),
      endDate = validate.errors.first('endDate'),
      centerId = validate.errors.first('centerId'),
      userId = validate.errors.first('userId');

    if(title) {
      error.title = title;
    }
    if(description) {
      error.description = description;
    }
    if(startDate) {
      error.startDate = startDate;
    }
    if(endDate) {
      error.password = endDate;
    }
    if(centerId) {
      error.centerId = centerId;
    }
    if(userId) {
      error.userId = userId;
    }

    return res.status(400).send({
      message: 'a required field is missing',
      statusCode: 400,
      error
    });
  }


  /**
     * Validate Login record
     *
     * @param {object} req - HTTP Request
     * @param {object} res - HTTP Response
     * @param {function} next
     * @returns {object} Class instance
     * @memberof Validation
     */
  validateLogin(req, res, next) {
    let validateLogin = {
      email: 'required|email',
      password: 'required|string'
    };

    let validate = new Validator(req.body, validateLogin);
    if (validate.passes()) return next();

    let error, email = validate.errors.first('email'),
      password = validate.errors.first('password');

    if(email && password){
      error = 'The email and password fields are required';
    } else if (email) {
      error = email;
    } else {
      error = password;
    }

    return res.status(400).send({
      message: 'a required field is missing',
      statusCode: 400,
      error
    });
  }

  /**
     * Validate Sign up record
     *
     * @param {object} req - HTTP Request
     * @param {object} res - HTTP Response
     * @param {function} next
     * @returns {object} Class instance
     * @memberof Validation
     */
  validateSignUp(req, res, next) {
    let validation = {
      firstName: 'required|string',
      lastName: 'required|string',
      email: 'required|email',
      password: 'required|string'
    };

    let validate = new Validator(req.body, validation);
    if (validate.passes()) return next();

    let error = {}, firstName = validate.errors.first('firstName'),
      lastName = validate.errors.first('lastName'),
      email = validate.errors.first('email'),
      password = validate.errors.first('password');

    if(firstName) {
      error.firstName = firstName;
    }
    if(lastName) {
      error.lastName = lastName;
    }
    if(email) {
      error.email = email;
    }
    if(password) {
      error.password = password;
    }

    return res.status(400).send({
      message: 'a required field is missing',
      statusCode: 400,
      error
    });
  }
}

export default Validation;
