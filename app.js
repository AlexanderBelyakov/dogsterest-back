const express = require("express");
const cardRouter = require("./routes/card.routes");
const savedCardRouter = require("./routes/saved-card.routes");
const cors = require("cors");
const helmet = require("helmet");

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());

app.use(cors());
app.use(helmet());

app.use("/", cardRouter);
app.use("/saved", savedCardRouter);

app.listen(PORT, console.log(`listen ${PORT}`));
