function makeProduct({
  _id,
  adType,
  delivery,
  title,
  description,
  amount,
  price,
  priceOptions,
  category,
  zip,
  city,
  street,
  name,
  phone,
  filename
}) {
  return {
    _id,
    adType,
    delivery,
    title,
    description,
    amount,
    price,
    priceOptions,
    category,
    zip,
    city,
    street,
    name,
    phone,
    filename
  };
}

module.exports = {
  makeProduct,
};
