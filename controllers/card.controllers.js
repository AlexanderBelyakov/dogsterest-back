const db = require("../db");

class CardController {
  async getCards(req, res) {
    const cards = await db.query("SELECT * FROM card");
    res.json(cards.rows);
  }
  async createCard(req, res) {
    const { id, link } = req.body;
    const newCard = await db.query(
      "INSERT INTO savedcard (id, link) values ($1, $2) RETURNING *",
      [id, link]
    );
    res.json(newCard.rows[0]);
  }
}

module.exports = new CardController();
