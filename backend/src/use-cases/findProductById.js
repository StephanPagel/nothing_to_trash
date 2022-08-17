const { ProductsDAO } = require("./../database/index");

function findProductDetails() {
  return ProductsDAO.findProductById();
}

module.exports = {
  findProductDetails,
};
