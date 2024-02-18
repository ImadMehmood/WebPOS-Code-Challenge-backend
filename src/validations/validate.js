const stoplightsConstants = require("../constants/stoplights/stoplightsConstants");
const allowedQueryParams = Object.keys(stoplightsConstants.getQuery);

stoplightsConstants;
module.exports = {
  validateAllowedQueryParams: (req, res, next) => {
    const notAllowedParams = Object.keys(req.query).filter(
      (param) => !allowedQueryParams.includes(param)
    );
    if (notAllowedParams.length > 0) {
      return res.status(400).json({
        errors: `Invalid query parameters: ${notAllowedParams.join(", ")}`,
      });
    }
    next();
  },
};
