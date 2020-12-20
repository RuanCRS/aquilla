const jwt = require('jsonwebtoken');

const jwtController = require('./lib/controllers/jwtController');

module.exports = {
  jwt(datas) {
    const jwtControllerSignJWT = jwtController.signJWT(jwt, datas);

    return {
      sign: {
        token: jwtControllerSignJWT,
        error: false,
        message: 'JWT successfully created',
      },
    };
  },
};
