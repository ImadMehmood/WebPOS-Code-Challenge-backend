const { query, validationResult } = require("express-validator");
const { validateAllowedQueryParams } = require("../validate");

module.exports = [
  query("current")
    .notEmpty()
    .withMessage("please provide current parameter")
    .isInt()
    .withMessage("current should be integer"),

  query("lang")
    .notEmpty()
    .withMessage("please provide lang parameter")
    .isString()
    .withMessage("lang should be string"),

  query("rowCount")
    .notEmpty()
    .withMessage("Please provide rowCount in parameters")
    .isInt()
    .withMessage("RowCount must be an integer")
    .isInt({ min: 1, max: 100 })
    .withMessage("RowCount must be between 1 and 100"),

  validateAllowedQueryParams,

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        errors,
      });
    }
    next();
  },
];
