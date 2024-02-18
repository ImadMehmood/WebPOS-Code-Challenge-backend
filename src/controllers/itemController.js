const responseCodeConstants = require("../constants/responseCodeConstants");
const responseHandler = require("../helpers/responseHandler");
const itemService = require("../services/itemService");

const getItems = async (req, res) => {
  try {
    const items = await itemService.getItems(req.query, req.method);
    return res.status(200).json({ items });
  } catch (error) {
    responseHandler.responseWithError(
      res,
      responseCodeConstants.INTERNAL_SERVER_ERROR,
      error
    );
  }
};

module.exports = { getItems };
