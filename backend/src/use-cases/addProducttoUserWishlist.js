const { UsersDAO, ProductsDAO } = require("./../database");
const { makeUser } = require("./../domain/User");

async function addProducttoUsersWishlist({ userId, productId }) {
    const foundUser = await UsersDAO.findUserById(userId);
    if (!foundUser) {
        throw new Error("User not found");
    }

    const user = makeUser(foundUser);

    const product = await ProductsDAO.findProductById(productId);
    const wishlistArray = []

    return {
        _id: user._id,
        wishlist: wishlistArray.push(product)
    };
}


module.exports = {
    addProducttoUsersWishlist
};