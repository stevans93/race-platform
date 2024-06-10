const jwt = require('jsonwebtoken');
const { tokenExpired, tokenNotProvided, invalidToken } = require('./messages');
const { JWT_KEY, JWT_EXPIRES_IN } = require('../config/config');
const UsersModel = require("../models/users");
const { BadRequest } = require('./errors');

function createToken(payload) {
    return new Promise((resolve, reject) => {
      jwt.sign(payload, JWT_KEY, { expiresIn: JWT_EXPIRES_IN }, (err, token) => {
        if (err) {
          reject(err)
        }

        resolve(token)
      })
    })
}

const verifyToken = async (req, res, next) => {
  try {
      const token = req.header('Authorization');
      
      if (!token) {
          throw new BadRequest(tokenNotProvided);
      }
      
      const decoded = jwt.verify(token, JWT_KEY);
      
      const user = await UsersModel.findById(decoded._id);
      
      if (!user) {
          throw new BadRequest(invalidToken);
      }
      
      req.user = user;
      
      next();
  } catch (error) {
      return res.status(401).json({ message: tokenExpired });
  }
};

module.exports = {
    createToken,
    verifyToken,
}