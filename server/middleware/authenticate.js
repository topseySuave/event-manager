import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import model from '../models';

dotenv.config();
const { User } = model;

const authenticate = (req, res, next) => {
  /* * *
     * Check if token is provided in request body or query param or request Headers
     ** */
  const token = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers.authorization;

  if (!token) {
    return res.status(401).send({
      success: false,
      statusCode: 401,
      message: 'Unauthorized user, You need to sign in'
    });
  }

  /**
     * verify secret and checks expiry time* */
  return jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        success: false,
        statusCode: 401,
        message: 'Failed to authenticate token, please sign in'
      });
    }
    User.findById(decoded.id).then((user) => {
      if (!user) {
        return res.send({
          error: 'User Not Found..!!!'
        });
      }
      req.currentUser = user;
      next();
    });
  });
};

export default authenticate;
