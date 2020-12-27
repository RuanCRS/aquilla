const jwt = require("jsonwebtoken");

const jwtController = require("./lib/controllers/jwtController");

module.exports = {
  jwt(datas) {
    const jwtControllerSignToken = jwtController.signToken(jwt, datas);

    return {
      sign: jwtControllerSignToken,
    };
  },
};
