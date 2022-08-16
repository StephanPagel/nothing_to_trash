const { ObjectId } = require("mongodb");
const { injectDB } = require("./getDB");

function getAllProducts() {
  return injectDB().then((db) => db.collection("products").find().toArray());
}

module.exports = {
  getAllProducts,
};
