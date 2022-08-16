const express = require("express");
const { createProduct } = require("./../use-cases/createProduct");

const productsRouter = express.Router();

productsRouter.post("/addnewProduct", (req, res) => {
    if (!req.body) {
        res.status(400).json({ error: "Please include a item." });
        return;
    }

    const newItem = {
        title: req.body.title,
        description: req.body.description,
        price: "$" + req.body.price
    };

    createProduct(newItem)
        .then((addedItem) => res.status(201).json(addedItem))
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: "Failed to add item to database." });
        });
});

module.exports = { productsRouter };
