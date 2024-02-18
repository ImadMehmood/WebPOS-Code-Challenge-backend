const router = require("express").Router();
const itemController = require("../controllers/itemController");
const getItemSchema = require("../validations/items/getItemValidation");

router.get("/", getItemSchema, itemController.getItems);

module.exports = router;
