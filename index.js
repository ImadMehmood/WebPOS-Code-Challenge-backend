const app = require("./api");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config();
const isProduction = process.env.NODE_ENV == "production" ? true : false;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "DELETE, PUT, GET, POST");
  res.header(
    "Access-Control-Allow=Headers",
    "Origin",
    "X-Requested-With,Content-Type,Accept"
  );
  next();
});
app.use(bodyParser.urlencoded({ limit: "500mb", extended: true }));
app.use(bodyParser.json({ limit: "500mb", extended: true }));
//Error Handler
app.use((err, req, res, next) => {
  return res.status(500).json({
    message: "Internal Server Error",
    error: isProduction ? null : err,
  });
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is running at PORT ${PORT}`);
});
