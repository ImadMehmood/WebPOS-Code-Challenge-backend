const express = require("express");
const responseCode = require("./src/constants/responseCodeConstants");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const responseHandle = require("./src/helpers/responseHandler");
require("dotenv").config();

//importing routes
const userRoute = require("./src/routes/userRoute");
const itemRoute = require("./src/routes/itemRoute");

app.use(helmet());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "DELETE, PUT, GET, POST");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin",
    "X-Requested-With,Content-Type,Accept"
  );
  next();
});
app.use(bodyParser.urlencoded({ limit: "500mb", extended: true }));
app.use(bodyParser.json({ limit: "500mb", extended: true }));
app.use(cors());

//ROUTES
app.use("/api/user", userRoute);
app.use("/api/items", itemRoute);

app.all("*", (req, res, next) => {
  responseHandle.responseWithError(
    res,
    responseCode.NOT_FOUND,
    "Route not found"
  );
});

module.exports = app;
