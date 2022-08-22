const { UsersDAO, ProductsDAO } = require("./../database");
const { makeProduct } = require("./../domain/Product");

async function addProducttoUsersWishlist({ userId, productId }) {
    const foundProduct = await ProductsDAO.findProductById(productId);
    if (!foundProduct) {
        throw new Error("Product not found");
    }

    const product = makeProduct(foundProduct);

    const wishlist = await ProductsDAO.findProductsByUserId(userId);
}


module.exports = {
    addProducttoUsersWishlist
};