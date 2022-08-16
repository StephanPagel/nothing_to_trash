const { ObjectId } = require("mongodb");
const { injectDB } = require("./getDB");

const usersCollectionName = "users"

async function findAllUsers() {
    const db = await injectDB()
    const users = await db.collection(usersCollectionName).find().toArray()
    return users
}

async function findUserById(id) {
    const db = await injectDB()
    const foundUser = await db.collection(usersCollectionName).findOne({ _id: ObjectId(id) })
    return foundUser
}

async function findUserByEmail(email) {
    const db = await injectDB()
    const foundUser = await db.collection(usersCollectionName).findOne({ email: email })
    return foundUser
}

async function insertOneUser(userInfo) {
    const db = await injectDB()
    return db.collection(usersCollectionName).insertOne(userInfo)
}

module.exports = {
    findAllUsers,
    findUserById,
    findUserByEmail,
    insertOneUser
}