const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const { makeDoAuthMiddleware } = require("./auth/doAuthMiddleware");
const { usersRouter } = require("./routes/users-router");
const { productsRouter } = require("./routes/products-router");

const Port = process.env.Port || 9000;
const app = express();

const doAuthMiddleware = makeDoAuthMiddleware("access");
const doRefreshTokenMiddleware = makeDoAuthMiddleware("refresh");

app.use(cors());
app.use(morgan("dev"));
app.use(express.static("uploads"));
app.use(express.json());

app.get("/", (_, res) => {
  res.send("Backend test");
});

app.use("/users", usersRouter);
app.use("/products", productsRouter);

app.use((_, res) => {
  res.status(404).json({ error: "Not found" });
});

app.listen(Port, () => console.log("Server listening on PORT", Port));
