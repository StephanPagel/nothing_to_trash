const { ObjectId } = require("mongodb");
const { injectDB } = require("./getDB");

const productsCollectionName = "products";

async function insertNewProduct(productInfo) {
  const db = await injectDB();
  return db.collection(productsCollectionName).insertOne(productInfo);
}

module.exports = { insertNewProduct };
