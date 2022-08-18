function makeProduct({
  _id,
  title,
  description,
  amount,
  price,
  zip,
  city,
  street,
  name,
  phone,
  filepath
}) {
  return {
    _id,
    title,
    description,
    amount,
    price,
    zip,
    city,
    street,
    name,
    phone,
    filepath
  };
}

module.exports = {
  makeProduct,
};
