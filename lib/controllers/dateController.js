const moment = require("moment-timezone");

module.exports = {
  convertToDate(time) {
    return moment.unix(time).format("MM/DD/YYYY HH:mm:ss");
  },
};
