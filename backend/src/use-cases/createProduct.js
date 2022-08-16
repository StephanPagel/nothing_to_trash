const { ProductsDAO } = require("./../database/index");
const { makeProduct } = require("../domain/Product");

async function createProduct({ title, description, price }) {
  const product = makeProduct({ title, description, price });
  const insertResult = await ProductsDAO.addNewProduct(product);
  return makeProduct({ ...product, _id: insertResult.insertedId });
}

module.exports = {
  createProduct
};
