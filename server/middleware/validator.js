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
    if (validate.passes()) {
      next();
    } else {
      return res.status(400).send({
        message: 'a required field is missing',
        statusCode: 400,
        error: validate.errors
      });
    }
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
      userId: 'required|integer'
    };

    let validate = new Validator(req.body, eventRules);
    if (validate.passes()) {
      next();
    } else {
      return res.status(400).send({
        message: 'a required field is missing',
        statusCode: 400,
        error: validate.errors
      });
    }
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

    if (validate.passes()) {
      return next();
    }
    return res.status(400).send({
      message: 'a required field is missing',
      statusCode: 400,
      error: validate.errors
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

    if (validate.passes()) {
      next();
    } else {
      return res.status(400).send({
        message: 'a required field is missing',
        statusCode: 400,
        error: validate.errors
      });
    }
  }
}

export default Validation;
