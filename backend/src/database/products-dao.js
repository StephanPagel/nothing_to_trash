const { ObjectId } = require("mongodb");
const { injectDB } = require("./getDB");

const productsCollectionName = "products";

function addNewProduct(productInfo) {
  return new Promise((resolve, reject) => {
    injectDB()
      .then((db) =>
        db.collection(productsCollectionName).insertOne(productInfo)
      )
      .then((result) => {
        if (result.acknowledged === true && result.insertedId) {
          return resolve({
            _id: result.insertedId,
            ...productInfo,
          });
        } else {
          // result könnte ein error sein, daher reject...
          return reject(result);
        }
      })
      .catch((err) => reject(err));
  });
  // const db = await injectDB();
  // return db.collection(productsCollectionName).insertOne(productInfo);
}

function updateProduct(id, updateProduct) {
  return new Promise((resolve, reject) => {
    injectDB()
      .then((db) =>
        db.collection(productsCollectionName).updateOne(
          { _id: ObjectId(id) },
          {
            $set: {
              adType: updateProduct.adType,
              delivery: updateProduct.delivery,
              title: updateProduct.title,
              description: updateProduct.description,
              amount: updateProduct.amount,
              price: updateProduct.price,
              priceOptions: updateProduct.priceOptions,
              category: updateProduct.category,
              zip: updateProduct.zip,
              city: updateProduct.city,
              street: updateProduct.street,
              name: updateProduct.name,
              phone: updateProduct.phone,
              filename: updateProduct.filename,
            },
          }
        )
      )
      .then((result) => {
        console.log(result);
        // if()
        resolve(result);
      });
  });
}

function findProductById(id) {
  return injectDB().then((db) =>
    db.collection(productsCollectionName).findOne({ _id: ObjectId(id) })
  );
}

function getAllProducts() {
  return injectDB().then((db) =>
    db.collection(productsCollectionName).find().toArray()
  );
}

function deleteProductById(id) {
  return injectDB().then((db) =>
    db.collection(productsCollectionName).deleteOne({ _id: ObjectId(id) })
  );
}

module.exports = {
  addNewProduct,
  getAllProducts,
  findProductById,
  deleteProductById,
  updateProduct,
};
