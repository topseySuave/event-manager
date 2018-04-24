import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import models from '../models';
import mailer from '../middleware/mailer';

const userModel = models.User;
const { Events } = models;
const { Op } = models.sequelize;
dotenv.config();

/**
 * @export
 * @class Events
 */
export default class Users {
  /**
   * Signup Users record
   *
   * @param {object} req - HTTP Request
   * @param {object} res - HTTP Response
   * @returns {object} Class instance
   * @memberof Users
   */
  createUser(req, res) {
    /**
     * Encrypt Password** */
    const salt = bcrypt.genSaltSync(Math.floor(Math.random() * 5));

    const {
      firstName, lastName, email, password
    } = req.body;
    const role = req.body.role || false;
    const encryptedPassword = bcrypt.hashSync(password, salt);

    userModel.findOne({
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
            message: 'Email has been taken, Please Choose another'
          });
        }
        return userModel.create({
          firstName,
          lastName,
          email,
          password: encryptedPassword,
          role
        })
          .then(user => res.status(201)
            .send({
              statusCode: 201,
              message: `Account Created for ${user.firstName} ${user.lastName}`
            }));
      });
  }

  /**
   * Signin Users record
   *
   * @param {object} req - HTTP Request
   * @param {object} res - HTTP Response
   * @returns {object} Class instance
   * @memberof Users
   */
  loginUser(req, res) {
    const { email, password } = req.body;
    userModel.findOne({
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
            message: 'Users Not Found! Please Sign Up'
          });
        } else if (bcrypt.compareSync(password, foundUser.password)) {
          return res.status(200).send({
            statusCode: 200,
            message: 'signin successful',
            token: jwt.sign({
              id: foundUser.id,
              role: foundUser.role
            }, process.env.SECRET_KEY, { expiresIn: '24h' })
          });
        }
        return res.status(401).send({
          statusCode: 401,
          message: 'Wrong password',
        });
      });
  }

  /**
   * GETS Current Users record
   *
   * @param {object} req - HTTP Request
   * @param {object} res - HTTP Response
   * @returns {object} Class instance
   * @memberof Users
   */
  currUser(req, res) {
    return res.send({
      id: req.currentUser.id,
      email: req.currentUser.email
    });
  }

  /**
   * Assign a Users as admin
   *
   * @param {object} req - HTTP Request
   * @param {object} res - HTTP Response
   * @returns {object} Class instance
   * @memberof Users
   */
  assignAdmin(req, res) {
    const { email, password } = req.body;
    userModel.findOne({
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
            message: 'Users Not Found! Please Sign Up'
          });
        } else if (bcrypt.compareSync(password, foundUser.password)) {
          // update user role to true...
          userModel.update({ role: true }, {
            where: {
              id: foundUser.id
            }
          })
            .then((updatedUser) => {
              const subject = 'Boots Events Manager: Administrator Assignment';
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
            message: 'Wrong password'
          });
        }
      })
      .catch(error => res.status(500).send(error));
  }

  /**
   * GETS all Users record
   *
   * @param {object} req - HTTP Request
   * @param {object} res - HTTP Response
   * @returns {object} Class instance
   * @memberof Users
   */
  allUsers(req, res) {
    userModel.findAll()
      .then(users => res.status(200).send({
        message: 'all users found',
        statusCode: 200,
        users
      }))
      .catch(error => res.status(500).send(error));
  }

  /**
   * DELETE a Users record
   *
   * @param {object} req - HTTP Request
   * @param {object} res - HTTP Response
   * @returns {object} Class instance
   * @memberof Users
   */
  removeUsers(req, res) {
    const { userId } = req.body;
    userModel.findOne({
      where: {
        id: userId
      }
    })
      .then((foundUser) => {
        if (foundUser) {
          userModel.destroy({
            where: {
              id: foundUser.id
            }
          })
            .then((deletedUser) => {
              if (deletedUser) {
                res.status(200).send({
                  message: 'Users has been deleted successfully',
                  user: foundUser
                });
              } else {
                res.send({
                  message: 'Users was not deleted, please try again'
                });
              }
            })
            .catch(error => res.status(500).send({
              message: 'Houston we have a problem.!! Error deleting Users',
              errorMessage: error
            }));
        } else {
          res.status(404).send({
            message: 'Users was not found',
          });
        }
      });
  }
}
