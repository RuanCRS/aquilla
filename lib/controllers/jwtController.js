const dateController = require("./dateController");

module.exports = {
  signJWT(jwt, datas) {
    const token = jwt.sign(datas.encryptedDatas, datas.secretKey, {
      expiresIn: 60 * datas.timeInMinutes,
    });

    return {
      token: token,
      error: false,
      message: "JWT successfully created",
    };
  },

  verifyJWT(jwt, datas) {
    return jwt.verify(datas.sign.token, datas.secretKey, (error, decoded) => {
      if (error === null) {
        return {
          token: datas.sign.token,
          creationDateTime: dateController.convertToDate(decoded.iat),
          expirationDateTime: dateController.convertToDate(decoded.exp),
          error: false,
        };
      } else {
        return { error: true };
      }
    });
  },

  signToken(jwt, datas) {
    datas.sign = this.signJWT(jwt, datas);
    return this.verifyJWT(jwt, datas);
  },
};
