const { ProductsDAO } = require("./../database/index");

function showProducts() {
  return ProductsDAO.getAllProducts();
}

module.exports = {
  showProducts,
};
