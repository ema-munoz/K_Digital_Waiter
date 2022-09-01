var CryptoJS = require("crypto-js");

const helpers = {};

helpers.encryptPassword = async (password) => {
  const hash = CryptoJS.AES.encrypt(password, 'secret').toString()
  return hash;
};

module.exports = helpers;
