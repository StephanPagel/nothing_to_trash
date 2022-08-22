const { UsersDAO, ProductsDAO } = require("./../database");
const { makeUser } = require("./../domain/User");

// const {
//     enrichPostsWithUserInfos,
//   } = require("./background-services/enrich-posts-with-userinfos");

async function showUserProfil({ userId }) {
    const foundUser = await UsersDAO.findUserById(userId);
    if (!foundUser) {
        throw new Error("User not found");
    }

    const user = makeUser(foundUser);

    const products = await ProductsDAO.findProductsByUserId(userId);
    // const postsEnriched = await enrichPostsWithUserInfos({ posts });


    return {
        _id: user._id,
        username: user.username,
        email: user.email,
        products: products
        // status: user.status,
        // wishlist: wishlistEnriched
    };
}

module.exports = {
    showUserProfil
};