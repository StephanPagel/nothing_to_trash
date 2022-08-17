const { ObjectId } = require("mongodb");
const { injectDB } = require("./getDB");

const productsCollectionName = "products";

function addNewProduct(productInfo) {

  return new Promise((resolve, reject) => {
    injectDB()
      .then(db => db.collection(productsCollectionName).insertOne(productInfo))
      .then(result => {
        if (result.acknowledged === true && result.insertedId) {
          return resolve({
            _id: result.insertedId,
            ...productInfo,
          })
        } else {
          return reject(result)
        }
      }).catch((err) => reject(err))
  })
}

function getAllProducts() {
  return injectDB()
    .then(db => db.collection(productsCollectionName).find().toArray())
}

module.exports = {
  addNewProduct,
  getAllProducts
};
