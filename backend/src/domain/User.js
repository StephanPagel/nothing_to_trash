function makeUser({
    _id,
    username,
    email,
    passwordHash,
    passwordSalt,
}) {
    if (!email) {
        throw new Error("email must exist")
    }

    return {
        _id,
        username,
        email,
        passwordHash,
        passwordSalt
    }
}

module.exports = {
    makeUser
}