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

var tables = [
{
  name: "Tony Soprano",
  phone: "7126497478",
  email: "bigtone380@gmail.com"
},
{
  name: "Danny Greene",
  phone: "2082762727",
  email: "irisheyes@icloud.com"
},
{
  name: " ‎Wo Shing Wo",
  phone: "8179745731",
  email: "yazukaOne@comcast.net"
}
];
var waitlist = [];

//gets for the 3 different pages
app.get("/home", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reservations", function(req, res) {
  res.sendFile(path.join(__dirname, "reservations.html"));
});

app.get("/table", function(req, res) {
  res.sendFile(path.join(__dirname, "table.html"));
});

// api information
app.get("/api/tables", function(req, res){
  res.json(tables);
})

app.get("/api/waitlist", function(req, res){
  res.json(waitlist);
})


//working post option with postman
app.post("/api/tables", function(req, res){
  var newTable = req.body;

  console.log(newTable);

  if (tables.length < 5){
    tables.push(newTable);
  }
  else {
    waitlist.push(newTable);
  }
  res.json(newTable);
});


//listen function to make sure its working
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
