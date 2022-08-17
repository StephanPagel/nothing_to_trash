function makeProduct({ _id, title, description, price, filepath }) {
  return {
    _id,
    title,
    description,
    price,
    filepath,
  };
}

module.exports = {
  makeProduct,
};
