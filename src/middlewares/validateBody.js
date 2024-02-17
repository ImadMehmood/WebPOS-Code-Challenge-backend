const validateBody = (schema) => (req, res, next) => {
  try {
    const { error } = schema.validate(req.body);
    if (!error) {
      next();
    } else {
      res
        .status(422)
        .json({ success: false, data: [], message: [error.message] });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      data: [],
      message: [error.message],
    });
  }
};

module.exports = validateBody;
