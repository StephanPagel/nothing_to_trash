const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieSession = require("cookie-session");

const { usersRouter } = require("./routes/users-router");
const { productsRouter } = require("./routes/products-router");

const Port = process.env.Port || 9000;
const app = express();

app.use('*', cors({ origin: [process.env.FRONTEND_URL], credentials: true }));

const oneDayInMs = 24 * 60 * 60 * 1000;
const isLocalHost = process.env.FRONTEND_URL === "https://nothingtotrash-frontend.herokuapp.com";
app.set("trust proxy", 1); // trust first proxy
// cookie session parser
const cookieSessionSecret = process.env.COOKIE_SESSION_SECRET;
if (!cookieSessionSecret) {
  throw new Error("COOKIE_SESSION_SECRET env variable is required");
}
app.use(
  cookieSession({
    name: "session",
    secret: cookieSessionSecret,
    httpOnly: true,
    expires: new Date(Date.now() + oneDayInMs),
    sameSite: isLocalHost ? "lax" : "none",
    secure: isLocalHost ? false : true,
  })
);

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
