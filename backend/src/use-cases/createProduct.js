const { ProductsDAO } = require("./../database/index");
const { makeProduct } = require("../domain/Product");

async function createProduct({ title, description, price, filepath }) {
  const product = makeProduct({ title, description, price, filepath });
  const insertResult = await ProductsDAO.addNewProduct(product);
  return makeProduct({ ...product, _id: insertResult.insertedId });
}

module.exports = {
  createProduct,
};
