const { ProductsDAO } = require("./../database/index");

function updateProductById(productId, updateProduct) {
  return ProductsDAO.updateProduct(productId, updateProduct);
}

module.exports = {
  updateProductById,
};
