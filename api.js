const express = require("express");
const { responseCode } = require("./src/constants/responseCodeConstants");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const { responseHandle } = require("./src/helpers/responseHandler");
const userRoute = require("./src/routes/userRoute");

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
app.use("/api/user", userRoute);

app.all("*", (req, res, next) => {
  return responseHandle.responseWithError(
    res,
    responseCode.NOT_FOUND,
    "Route not found"
  );
});

module.exports = app;
