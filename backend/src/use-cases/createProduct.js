const { productsDAO } = require("../database/products-dao");
const { makeProduct } = require("../domain/Product");

async function createProduct(title, description, price) {
  const newProduct = makeProduct({
    title: title,
    description: description,
    price: price,
  });
  console.log(newProduct);
  return productsDAO.createProduct(newProduct);
}

module.exports = {
  createProduct,
};
