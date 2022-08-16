const { ObjectId } = require("mongodb");
const { getDB } = require("./getDB");

const usersCollectionName = "users"

async function findAllUsers() {
    const db = await getDB()
    const users = await db.collection(usersCollectionName).find().toArray()
    return users
}

async function findUserById(id) {
    const db = await getDB()
    const foundUser = await db.collection(usersCollectionName).findOne({ _id: ObjectId(id) })
    return foundUser
}

async function findUserByEmail(email) {
    const db = await getDB()
    const foundUser = await db.collection(usersCollectionName).findOne({ email: email })
    return foundUser
}

async function insertOneUser(nutzerInfo) {
    const db = await getDB()

    return db.collection(usersCollectionName).insertOne(nutzerInfo)
}

module.exports = {
    findAllUsers,
    findUserById,
    findUserByEmail,
    insertOneUser
}