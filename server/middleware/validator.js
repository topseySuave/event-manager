import Validator from 'validatorjs';

export class Validation {

    validateCenter (req, res, next) {
        const centerRules = {
            title: 'required|string',
            img_url: 'required|string',
            location: 'required|string',
            description: 'required|string',
            facilities: 'required|string',
            capacity: 'required|integer',
            price: 'required|integer'
        };

        let validate = new Validator(req.body, centerRules);
        if(validate.passes()) {
            next();
        } else {
            return res.status(400).send(validate.errors);
        }
    }

    validateEvent(req, res, next){

        const eventRules = {
            title: 'required|string',
            img_url: 'required|string',
            description: 'required|string',
            startDate: 'required|date',
            endDate: 'required|date',
            centerId: 'required|integer',
            userId: 'required|integer'
        };

        let validate = new Validator(req.body, eventRules);
        if(validate.passes()) {
            next();
        } else {
            return res.status(400).send(validate.errors);
        }
    }

    validateLogin(req, res, next){
        let validateLogin = {
            email: 'required|email',
            password: 'required|string'
        };
        let validate = new Validator(req.body, validateLogin);

        if(validate.passes()){
           next();
        }else{
            return res.send(validate.errors);
        }
    }

    validateSignUp(req, res, next){

        let validation = {
            firstName: 'required|string',
            lastName: 'required|string',
            email: 'required|email',
            password: 'required|string'
        };

        let validate = new Validator(req.body, validation);

        if(validate.passes()){
            next();
        }else{
            return res.send(validate.errors);
        }
    }
}

export default Validation