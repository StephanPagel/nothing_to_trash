const express = require("express");
const { registerUser } = require("../use-cases/register-user");
const { loginUser } = require("../use-cases/login-user");
const { makeDoAuthMiddleware } = require("./../auth/doAuthMiddleware");

const doAuthMiddleware = makeDoAuthMiddleware("access");
const doRefreshTokenMiddleware = makeDoAuthMiddleware("refresh");

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

usersRouter.post("/login", async (req, res) => {
  try {
    const { accessToken, refreshToken } = await loginUser({
      email: req.body.email,
      password: req.body.password,
    });
    if (refreshToken) {
      console.log("refresh", refreshToken);
      req.session.refreshToken = refreshToken;
    }
    res.json({ accessToken, refreshToken });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.toString() || "Internal Server Error." });
  };
});

usersRouter.post("/refreshtoken", doRefreshTokenMiddleware, async (req, res) => {
  try {
    const userId = req.userClaims.sub;
    const accessToken = await refreshUserToken({ userId });
    res.json({ token: accessToken });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: err.toString() || "Internal Server Error.",
    });
  }
});

usersRouter.get("/logout", async (req, res) => {
  req.session.token = null;
  res.status(204).end();
});

module.exports = {
  usersRouter,
};
