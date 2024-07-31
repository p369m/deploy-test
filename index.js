const express = require("express");
require("dotenv").config();

const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(process.env.PORT, () => {
  console.log("Server listening on port", process.env.PORT);
});
