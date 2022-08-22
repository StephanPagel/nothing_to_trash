const { UsersDAO } = require("../database");
const { makeUser } = require("../domain/User");
const jwt = require("jsonwebtoken");
const { hash } = require("../utils/hash");
const { createToken } = require("./../utils/createToken");


function loginUser({ email, password }) {
  return UsersDAO.findUserByEmail(email).then(
    (foundUser) => {
      if (!foundUser) {
        throw new Error("Problem logging in");
      }

      const user = makeUser(foundUser);
      const passwordHash = hash(password + "" + user.passwordSalt);

      const correctPassword = user.passwordHash === passwordHash;
      if (!correctPassword) {
        throw new Error("Problem logging in");
      }

      const ONE_DAY = 24 * 60 * 60
      const accessToken = createToken(user)
      const refreshToken = createToken(user, ONE_DAY, "refresh")
      return { accessToken, refreshToken }
    });
}

module.exports = {
  loginUser
};
