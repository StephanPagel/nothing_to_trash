const express = require("express");
const { registerUser } = require("../use-cases/register-user");
const { loginUser } = require("../use-cases/login-user");

const usersRouter = express.Router();

usersRouter.post("/register", async (req, res) => {
  try {
    const user = await registerUser(req.body);
    res.json(user);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: err.toString() || "Internal Server Error." });
  }
});

usersRouter.post("/login", (req, res) => {
  loginUser({
    email: req.body.email,
    password: req.body.password,
  })
    .then((token) => res.json({ token }))
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ message: err.toString() || "Internal Server Error." });
    });
});

module.exports = {
  usersRouter,
};
