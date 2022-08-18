const { ProductsDAO } = require("./../database/index");
const { makeProduct } = require("../domain/Product");

async function createProduct({
  title,
  description,
  amount,
  price,
  zip,
  city,
  street,
  name,
  phone,
  filepath,
}) {
  const product = makeProduct({
    title,
    description,
    amount,
    price,
    zip,
    city,
    street,
    name,
    phone,
    filepath,
  });
  const insertResult = await ProductsDAO.addNewProduct(product);
  return makeProduct({ ...product, _id: insertResult.insertedId });
}

module.exports = {
  createProduct,
};
