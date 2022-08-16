const express = require("express");

const { getAllProducts } = require("./database/db-access-test.js");

const Port = process.env.Port || 9000;
const app = express();

app.get("/", (req, res) => {
  res.send("Backend test");
});

app.get("/products", (_, res) => {
  getAllProducts().then((userArray) => res.json(userArray));
});

app.listen(Port, () => console.log("Server listening on PORT", Port));
