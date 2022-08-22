const { UsersDAO } = require("./../database");
const { makeUser } = require("./../domain/User");
const { createToken } = require("./../utils/createToken");

async function refreshUserToken({ userId }) {
    const foundUser = await UsersDAO.findById(userId)
    if (!foundUser) {
        throw new Error("User not found")
    }

    const user = makeUser(foundUser)
    // erstelle einen neuen access-token
    const accessToken = createToken(user)
    return accessToken
}

module.exports = {
    refreshUserToken
}
