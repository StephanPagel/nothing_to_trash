const { ProductsDAO } = require("./../database/index");

function updateProduct(productId) {
  return ProductsDAO.updateProductById(productId);
}

module.exports = {
  deleteProduct,
};
