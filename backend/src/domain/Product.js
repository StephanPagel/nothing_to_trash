function makeProduct({ _id, title, price, description }) {
  return {
    _id,
    title,
    price,
    description,
  };
}

module.exports = {
  makeProduct,
};
