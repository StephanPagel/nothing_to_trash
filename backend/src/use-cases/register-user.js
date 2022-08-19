const { UsersDAO } = require("../database");
const { makeUser } = require("../domain/User");
const { hash, createRandomHash } = require("../utils/hash");

async function registerUser({ username, email, password }) {
  const passwordSalt = createRandomHash();
  const passwordHash = hash(password + "" + passwordSalt);

  const newUser = makeUser({
    username,
    email,
    emailVerified: false,
    passwordHash,
    passwordSalt,
  });

  const insertResult = await UsersDAO.insertOneUser(newUser);
  const userView = {
    _id: insertResult.insertedId,
    username,
    email,
  };

  return userView;
}

module.exports = {
  registerUser
};

// "password": "max123"

//vielleicht noch email überprüfen?
//bestätigungsmail schicken
