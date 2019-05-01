// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
let PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var tables = [];
var waitlist = [];

//gets for the 3 different pages
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reservations", function(req, res) {
  res.sendFile(path.join(__dirname, "reservations.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "table.html"));
});

//api information
app.get("/api/tables", function(req, res){
  res.json(tables);
})

app.get("/api/waitlist", function(req, res){
  res.json(waitlist);
})

//listen function to make sure its working
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
