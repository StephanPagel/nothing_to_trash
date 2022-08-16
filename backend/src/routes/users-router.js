const express = require("express")
const { registerUser } = require("../use-cases/register-user")

const usersRouter = express.Router()

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
})

module.exports = {
    usersRouter
}