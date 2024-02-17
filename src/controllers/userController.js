const responseCodeConstants = require("../constants/responseCodeConstants");
const responseHandler = require("../helpers/responseHandler");
const userService = require("../services/userService");

const loginUser = async (req, res, next) => {
  try {
    const data = await userService.login(req.body);
    return responseHandler.okResponse(
      res,
      responseCodeConstants.OK,
      "successfully logged in"
    );
  } catch (error) {
    return responseHandler.responseWithError(
      res,
      responseCodeConstants.INTERNAL_SERVER_ERROR
    );
  }
};

module.exports = { loginUser };
