// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
let PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
  res.send("This is Working");
});

app.get("/favicon.ico", function(req, res) {
  res.end();
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });