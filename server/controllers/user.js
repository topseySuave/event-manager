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
        let encryptedPassword = bcrypt.hashSync(password, salt);

        User.findOne({
            where: {
                email: {
                    $ilike: email
                }
            }
        })
        .then((foundUser) => {
            if (foundUser) {
                return res.status(401).json({
                    statusCode: 401,
                    message: 'Email has been taken, Please Choose another',
                    error: true
                });
            }
            return User.create({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: encryptedPassword
            })
            .then((user) => {
                return res.status(201)
                    .send({
                        statusCode: 201,
                        message: `Account Created for ${user.firstName} ${user.lastName}`,
                        error: false
                    });
            })
            .catch(err => res.status(500).json(err));
        })
        .catch(error => res.status(500).json(error));
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
                        statusCode: 200,
                        message: 'Here`s your Token',
                        token: jwt.sign({
                            id: foundUser.id,
                            firstName: foundUser.firstName,
                            lastName: foundUser.lastName,
                            email: foundUser.email
                        }, process.env.SECRET_KEY, { expiresIn: '24h' }),
                        error: false
                    });
                }else{
                    return res.status(401).send({
                        statusCode: 401,
                        message: 'Wrong password',
                        error: true
                    });
                }
            })
            .catch(error => res.status(500).send(error));
    }

    currUser (req, res){
        return res.send({
            currentUser: req.currentUser
        });
    }
}