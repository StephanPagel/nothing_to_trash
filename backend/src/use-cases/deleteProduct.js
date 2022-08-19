const { ProductsDAO } = require("./../database/index");

function deleteProduct(productId) {
  return ProductsDAO.deleteProductById(productId);
}

module.exports = {
  deleteProduct,
};
