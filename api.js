const express = require("express");
const { responseCode } = require("./src/constants/responseCodeConstants");
const app = express();
const { responseHandle } = require("./src/helpers/responseHandler");

app.all("*", (req, res, next) => {
  return responseHandle.responseWithError(
    res,
    responseCode.NOT_FOUND,
    "Route not found"
  );
});

module.exports = app;
