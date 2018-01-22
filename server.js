const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("yay");
});

app.listen(3000, function() {
  console.log("listening on 3000");
});
