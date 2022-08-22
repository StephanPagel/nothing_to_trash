function makeUser({ _id, username, email, passwordHash, passwordSalt, products }) {
  if (!email) {
    throw new Error("email must exist");
  }

  return {
    _id,
    username,
    email,
    passwordHash,
    passwordSalt,
    products
  };
}

module.exports = {
  makeUser,
};
