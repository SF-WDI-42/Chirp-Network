const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  let potato = ["bird1.png",
    "bird2.png",
    "bird3.png",
    "bird4.png",
    "bird5.png",
  ];
  res.render("index", {sources: potato,});
});

app.listen(3000, function() {
  console.log("listening on 3000");
});
