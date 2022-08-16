const { productsDAO } = require("../database");
const { makeProduct } = require("../domain/Product");

async function createProduct(title, description, price) {
  const newProduct = makeProduct({ title, description, price });
}

module.exports = {
  createProduct,
};
