module.exports = {
  okResponse: (res, message) => {},

  responseWithError: (res, code = 500, message = null) => {
    return res.status(code).json({ message });
  },

  responseWithData: (res, data, token = null, message) => {},
};
