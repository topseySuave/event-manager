import dotenv from 'dotenv';
// import Validator from 'validatorjs';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import models from '../models';
import mailer from '../middleware/mailer';

const { User } = models;
const { Events } = models;
const { Op } = models.sequelize;
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
  createUser(req, res) {
    /**
     * Encrypt Password** */
    let salt = bcrypt.genSaltSync(Math.floor(Math.random() * 31));

    let {
      firstName, lastName, email, password
    } = req.body;
    let role = req.body.role || false;
    let encryptedPassword = bcrypt.hashSync(password, salt);

    User.findOne({
      where: {
        email: {
          [Op.iLike]: email
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
          firstName,
          lastName,
          email,
          password: encryptedPassword,
          role
        })
          .then(user => res.status(201)
            .send({
              statusCode: 201,
              message: `Account Created for ${user.firstName} ${user.lastName}`,
              error: false
            }));
      });
  }

  loginUser(req, res) {
    let { email, password } = req.body;
    User.findOne({
      where: {
        email: {
          [Op.iLike]: email
        }
      }
    })
      .then((foundUser) => {
        if (!foundUser) {
          return res.status(404).send({
            statusCode: 404,
            message: 'User Not Found! Please Sign Up',
            error: true,
          });
        } else if (bcrypt.compareSync(password, foundUser.password)) {
          return res.status(200).send({
            statusCode: 200,
            message: 'Here`s your Token',
            token: jwt.sign({
              id: foundUser.id,
              firstName: foundUser.firstName,
              lastName: foundUser.lastName,
              email: foundUser.email,
              role: foundUser.role
            }, process.env.SECRET_KEY, { expiresIn: '24h' }),
            error: false
          });
        }
        return res.status(401).send({
          statusCode: 401,
          message: 'Wrong password',
          error: true
        });
      })
      .catch(error => res.status(400).send(error));
  }

  currUser(req, res) {
    return res.send({
      currentUser: req.currentUser
    });
  }

  assignAdmin(req, res) {
    let { email, password } = req.body;
    User.findOne({
      where: {
        email: {
          [Op.iLike]: email
        }
      }
    })
      .then((foundUser) => {
        if (!foundUser) {
          return res.status(404).send({
            statusCode: 404,
            message: 'User Not Found! Please Sign Up',
            error: true
          });
        } else if (bcrypt.compareSync(password, foundUser.password)) {
          // update user role to true...
          User.update({ role: true }, {
            where: {
              id: foundUser.id
            }
          })
            .then((updatedUser) => {
              let subject = 'Boots Events Manager: Administrator Assignment';
              let htmlOutput = `
                            <h6>Boots Events Manager: Administrator Assignment</h6>
                            <p>Dear, ${foundUser.firstName} ${foundUser.lastName} you have been Assigned as Administrator</p>
                            <br />
                            <ul>
                                <li>First Name: ${foundUser.firstName}</li>
                                <li>Last Name: ${foundUser.lastName}</li>
                                <li>Email: ${foundUser.email}</li>
                            </ul>
                            <br />
                            <h6>Admin Privileges</h6>
                            <ul>
                                <li>Centers: creation, updating, deleting</li>
                            </ul>
                        `;
              mailer(foundUser.email, subject, subject, htmlOutput);
              return res.redirect('/');
            });
        } else {
          return res.status(401).send({
            statusCode: 401,
            message: 'Wrong password',
            error: true
          });
        }
      })
      .catch(error => res.status(500).send(error));
  }

  allUsers(req, res) {
    User.findAll()
      .then(users => res.status(200).send({
        message: 'all users found',
        statusCode: 200,
        users
      }))
      .catch(error => res.status(500).send(error));
  }

  removeUsers(req, res) {
    let { userId } = req.body;
    User.findOne({
      where: {
        id: userId
      }
    })
      .then((foundUser) => {
        if (foundUser) {
          User.destroy({
            where: {
              id: foundUser.id
            }
          })
            .then((deletedUser) => {
              if (deletedUser) {
                res.status(200).send({
                  message: 'User has been deleted successfully',
                  error: false,
                  user: foundUser
                });
              } else {
                res.send({
                  message: 'User was not deleted, please try again',
                  error: true
                });
              }
            })
            .catch(error => res.status(500).send({
              error: true,
              message: 'Houston we have a problem.!! Error deleting User',
              errorMessage: error
            }));
        } else {
          res.status(404).send({
            error: true,
            message: 'User was not found',
          });
        }
      });
  }
}
