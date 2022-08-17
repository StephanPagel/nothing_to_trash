const express = require("express");
const { createProduct } = require("./../use-cases/createProduct");
const { showProducts } = require("./../use-cases/showProducts");
const { findProductDetails } = require("./../use-cases/findProductById");

const multer = require("multer");


const productsRouter = express.Router();
const upload = multer({ dest: 'uploads/' })
const uploadFilesMiddleware = upload.single('avatar')


productsRouter.post("/addnewProduct", uploadFilesMiddleware, (req, res) => {
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
    findProductDetails()
        .then((productDetails) => res.json(productDetails))
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: "Failed to find product." });
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

// app.post("/uploadProductImage",
//     uploadFilesMiddleware,
//     (req, res) => {
//         console.log(req.body)
//         console.log(req.file)
//         console.log(req.files)

//         const newUser = {
//             id: nanoid(),
//             username: req.body.username,
//             email: req.body.email,
//             avatarImgSrc: req.file.filename
//         }

//         usersArray.push(newUser)
//         res.json(usersArray)
//     }
// )

module.exports = { productsRouter };


