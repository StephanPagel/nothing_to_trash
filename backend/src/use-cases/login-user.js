const { UsersDAO } = require("../database");
const { makeUser } = require("../domain/User");
const jwt = require("jsonwebtoken");
const { hash } = require("../utils/hash");

function loginUser({ email, password }) {
  return UsersDAO.findUserByEmail(email).then((foundUser) => {
    if (!foundUser) {
      throw new Error("Problem logging in");
    }

    const user = makeUser(foundUser);
    const passwordHash = hash(password + "" + user.passwordSalt);

    const correctPassword = user.passwordHash === passwordHash;
    if (!correctPassword) {
      throw new Error("Problem logging in");
    }

    const token = createToken(user);
    return token;
  });
}

function createToken(user) {
  const initatedAtTimestamp = Math.floor(Date.now() / 1000);
  const TEN_DAYS_IN_SECONDS = 60 * 60 * 24 * 10;
  const expiresAtTimestamp = initatedAtTimestamp + TEN_DAYS_IN_SECONDS;

  const tokenPayload = {
    sub: user._id,
    iat: initatedAtTimestamp,
    exp: expiresAtTimestamp,
    role: user.role || "user",
  };

  const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, {
    algorithm: "HS256",
  });
  return token;
}

module.exports = {
  loginUser,
};
