require("dotenv").config();
const express = require("express"),
  app = express(),
  port = process.env.PORT || 8080,
  bodyParser = require("body-parser");

const postItRoutes = require("./routes/postit");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/images"));

app.use("/api/postit", postItRoutes);

app.get("/", function (req, res) {
  res.sendFile("index.html");
});

app.listen(port, function () {
  console.log("Server started on PORT: " + port);
});
