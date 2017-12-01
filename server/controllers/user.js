import models from '../models';
import dotenv from 'dotenv';
import Validator from 'validatorjs';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const User = models.User;

dotenv.config();

/**
 * @export
 * @class Events
 */
export default class Users {

    /**
     * Signup User record
     *
     * @param {object} req - HTTP Request
     * @param {object} res - HTTP Response
     * @returns {object} Class instance
     * @memberof Users
     */
    createUser(req, res){

        /***Encrypt Password***/
        let salt = bcrypt.genSaltSync(Math.floor(Math.random() * 31));

        let { firstName, lastName, email, password } = req.body;
        password = bcrypt.hashSync(password, salt);

        User.findOne({
            where: {
                email: {
                    $like: email
                }
            }
        })
        .then((foundUser) => {
            if (foundUser) {
                return res.status(400).json({
                    statusCode: 400,
                    message: 'Email has been taken, Please Choose another',
                    error: true
                });
            }
            return User.create({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            })
            .then((user) => {
                return res.status(201)
                    .json({
                        statusCode: 201,
                        message: `Account Created for ${user.firstName} ${user.lastName}`,
                        User
                    });
            })
            .catch(err => res.status(400).json(err));
        })
        .catch(error => res.status(400).json(error));
    }

    loginUser(req, res){
        let { email, password } = req.body;
            User.findOne({
                where: {
                    email: {
                        $iLike: email
                    }
                }
            })
            .then((foundUser) => {
                if(!foundUser){
                    return res.status(404).send({
                        statusCode: 404,
                        message: 'User Not Found! Please Sign Up',
                        error: true,
                    });
                }
                else if(bcrypt.compareSync(password, foundUser.password))
                {
                    return res.status(200).send({
                        message: 'Here your Token',
                        token: jwt.sign({
                            id: foundUser.id
                        }, process.env.SECRET_KEY, { expiresIn: '24h' })
                    });
                }
            })
            .catch(error => res.status(400).send(error));
    }

    currUser (req, res){
        return res.send({
            currentUser: req.currentUser
        });
    }
}