const { ProductsDAO } = require("./../database/index");
const { makeProduct } = require("../domain/Product");

async function createProduct({
  adType,
  delivery,
  title,
  condition,
  brand,
  descriptionShort,
  descriptionLong,
  amount,
  price,
  priceOptions,
  category,
  zip,
  city,
  street,
  name,
  phone,
  sold,
  userId,
  filename,
}) {
  const product = makeProduct({
    adType,
    delivery,
    title,
    condition,
    brand,
    descriptionShort,
    descriptionLong,
    amount,
    price,
    priceOptions,
    category,
    zip,
    city,
    street,
    name,
    phone,
    sold,
    userId,
    filename,
  });
  const insertResult = await ProductsDAO.addNewProduct(product);
  return makeProduct({ ...product, _id: insertResult.insertedId });
}

module.exports = {
  createProduct,
};
