const Router = require("express");
const router = new Router();
const cardController = require("../controllers/card.controllers");

router.get("/", cardController.getCards);
router.post("/", cardController.createCard);

module.exports = router;
