const express = require("express");
const { createProduct } = require("./../use-cases/createProduct");
const { showProducts } = require("./../use-cases/showProducts");

const multer = require("multer");

const { findProductDetails } = require("./../use-cases/findProductById");

const productsRouter = express.Router();

const storage = multer.diskStorage({
  destination: function (_, _, cb) {
    cb(null, "uploads");
  },
  filename: function (_, file, cb) {
    cb(null, Date.now() + "_" + file.originalname); //Appending extension
  },
});
const uploadMiddleware = multer({ storage }).single("image");

productsRouter.post("/addnewProduct", uploadMiddleware, (req, res) => {
  if (!req.body) {
    res.status(400).json({ error: "Please include a item." });
    return;
  }

  const newItem = {
    title: req.body.title,
    description: req.body.description,
    price: "$" + req.body.price,
    filepath: req.body.filename,
  };

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

// app.post("/uploadProductImage", uploadFilesMiddleware, (req, res) => {
//   console.log(req.body);
//   console.log(req.file);
//   console.log(req.files);

//   const newUser = {
//     id: nanoid(),
//     username: req.body.username,
//     email: req.body.email,
//     avatarImgSrc: req.file.filename,
//   };

//   usersArray.push(newUser);
//   res.json(usersArray);
// });

module.exports = { productsRouter };
