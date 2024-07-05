const Router = require("express");
const router = new Router();
const savedCardController = require("../controllers/saved-card.controllers");

router.get("/", savedCardController.getCards);

module.exports = router;
