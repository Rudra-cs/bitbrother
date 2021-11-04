const express = require("express");
const dbConn = require("./config/db.conn");
const logger = require("./middlewares/logger");
const userRoutes = require("./routes/user");

const port = process.env.PORT || 3000;
const app = express();

dbConn();

app.use(logger);
app.use(express.json());
app.use("/api/user", userRoutes);

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
