require("dotenv");
const jwt = require("jsonwebtoken");

//generate new token (start)
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "2h",
  });
};
//generate new token (end)

module.exports = { generateToken };
