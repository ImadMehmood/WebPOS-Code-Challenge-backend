const app = require("./api");

require("dotenv").config();
const helmet = require("helmet");
const isProduction = process.env.NODE_ENV == "production" ? true : false;

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
