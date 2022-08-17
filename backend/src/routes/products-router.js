const express = require("express");
const { createProduct } = require("./../use-cases/createProduct");
const { showProducts } = require("./../use-cases/showProducts");

const productsRouter = express.Router();

productsRouter.post("/addnewProduct", (req, res) => {
  if (!req.body) {
    res.status(400).json({ error: "Please include a item." });
    return;
  }

  const newItem = {
    title: req.body.title,
    description: req.body.description,
    price: "$" + req.body.price,
  };

  createProduct(newItem)
    .then((addedItem) => res.status(201).json(addedItem))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to add item to database." });
    });
});

productsRouter.get("/details/:id", (req, res) => {
  try {
    const productDetails = findProductById({ _id: ObjectId(id) });
    res.json(productDetails);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to find product" });
  }
});

productsRouter.get("/allproducts", (_, res) => {
  showProducts()
    .then((products) => res.json(products))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to load products from database." });
    });
});

module.exports = { productsRouter };
