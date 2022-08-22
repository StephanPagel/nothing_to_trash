function makeUser({ _id, username, email, passwordHash, passwordSalt, products, wishlist }) {
  if (!email) {
    throw new Error("email must exist");
  }

  return {
    _id,
    username,
    email,
    passwordHash,
    passwordSalt,
    products,
    wishlist
  };
}

module.exports = {
  makeUser,
};
