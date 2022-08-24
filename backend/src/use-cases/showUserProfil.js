const { UsersDAO, ProductsDAO } = require("./../database");
const { makeUser } = require("./../domain/User");

async function showUserProfil({ userId }) {
    const foundUser = await UsersDAO.findUserById(userId);
    if (!foundUser) {
        throw new Error("User not found");
    }

    const user = makeUser(foundUser);

    const products = await ProductsDAO.findProductsByUserId(userId);

    return {
        _id: user._id,
        username: user.username,
        email: user.email,
        products: products
    };
}

module.exports = {
    showUserProfil
};