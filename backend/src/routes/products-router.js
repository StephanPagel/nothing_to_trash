const express = require("express");
const { createProduct } = require("./../use-cases/createProduct");
const { showProducts } = require("./../use-cases/showProducts");
const { findProductDetails } = require("./../use-cases/findProductById");
const { deleteProduct } = require("./../use-cases/deleteProduct");
const { updateProductById } = require("./../use-cases/updateProduct");
const { makeDoAuthMiddleware } = require("./../auth/doAuthMiddleware");
const { changeSoldStatus } = require("./../use-cases/changeSoldStatus");
const multer = require("multer");
const doAuthMiddleware = makeDoAuthMiddleware("access");

const productsRouter = express.Router();

const storage = multer.diskStorage({
  destination: function (_, _, cb) {
    cb(null, "uploads");
  },
  filename: function (_, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  },
});
const uploadMiddleware = multer({ storage }).single("imageFile");

productsRouter.post("/addnewProduct", doAuthMiddleware, uploadMiddleware, (req, res) => {

  const userId = req.userClaims.sub;
  if (!req.body) {
    res.status(400).json({ error: "Please include a item." });
    return;
  }

  const newItem = {
    adType: req.body.adType,
    delivery: req.body.delivery,
    title: req.body.title,
    condition: req.body.condition,
    brand: req.body.brand,
    descriptionShort: req.body.descriptionShort,
    descriptionLong: req.body.descriptionLong,
    amount: req.body.amount,
    price: req.body.price,
    priceOptions: req.body.priceOptions,
    category: req.body.category,
    zip: req.body.zip,
    city: req.body.city,
    street: req.body.street,
    name: req.body.name,
    phone: req.body.phone,
    sold: false,
    userId: userId,
    // HIER MUSS DER PATH, aber wie??????
    filename: req.file.filename,
  };

  console.log(newItem);

  createProduct(newItem)
    .then((addedItem) => res.status(201).json(addedItem))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to add item to database." });
    });
});

productsRouter.get("/allproducts/:id", (req, res) => {
  const productId = req.params.id;
  findProductDetails(productId)
    .then((products) => res.json(products))
    .catch((err) => {
      res.status(500).json({ error: "Failed to load products from database." });
    });
});

productsRouter.get("/allproducts", (_, res) => {
  showProducts()
    .then((products) => res.json(products))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to load products from database." });
    });
});

productsRouter.delete("/deletedProduct/:id", (req, res) => {
  const productId = req.params.id;
  deleteProduct(productId)
    .then((products) => res.json(products))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to delete product" });
    });
});

productsRouter.put("/edit/:id", uploadMiddleware, (req, res) => {
  const productId = req.params.id;
  const updateProduct = req.body; // req body ist stellvertretend für alles key/value Paare im Object

  updateProductById(productId, updateProduct)
    .then((updatedElement) => res.json(updatedElement))
    .catch((err) => console.log(err));
  console.log(req.body);
});

productsRouter.put("/changestatus", doAuthMiddleware, async (req, res) => {
  try {
    const productId = req.body.id;
    const sold = req.body.sold;
    const response = await changeSoldStatus({ productId, sold });
    res.json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: err.toString() || "Error changing status to sold",
    });
  }
});

module.exports = { productsRouter };
