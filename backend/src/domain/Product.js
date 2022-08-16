function makeProduct({ _id, title, description, price }) {
  return {
    _id,
    title,
    description,
    price
  };
}

module.exports = {
  makeProduct
};
