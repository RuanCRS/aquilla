module.exports = {
  signJWT(jwt, datas) {
    return jwt.sign(datas.encryptedDatas, datas.secretKey, {
      expiresIn: 60 * datas.timeInMinutes,
    });
  },
};
