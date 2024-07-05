const db = require("../db");

class SavedCardController {
  async getCards(req, res) {
    const cards = await db.query("SELECT * FROM savedCard");
    res.json(cards.rows);
  }
}

module.exports = new SavedCardController();
