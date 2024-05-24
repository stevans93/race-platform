const jwt = require('jsonwebtoken');
const { tokenExpired } = require('./messages');
const { JWT_KEY, JWT_EXPIRES_IN } = require('../config/config');

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

async function verifyToken(token) {
    try {
        const decode = jwt.verify(token, JWT_KEY);

        return decode
    } catch (error) {
        throw new Error(tokenExpired)
    }
}

module.exports = {
    createToken,
    verifyToken,
}