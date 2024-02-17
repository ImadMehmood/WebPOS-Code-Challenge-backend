const validateBody = require("../middlewares/validateBody");
const { loginSchema } = require("../validations/user/userLoginValidation");
const userController = require("../controllers/userController");

const router = require("express").Router();

router.post("/login", validateBody(loginSchema), userController.loginUser);

module.exports = router;
