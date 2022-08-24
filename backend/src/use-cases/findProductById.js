const { ProductsDAO } = require("./../database/index");

function findProductDetails(productId) {
  return ProductsDAO.findProductById(productId);
}

module.exports = {
  findProductDetails,
};
