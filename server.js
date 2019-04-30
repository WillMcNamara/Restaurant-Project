var express = require("express");
var app = express();
var fs = require("fs");
var PORT = ;



//ROUTES

app.get("/", function(req,res){
    res.send(fs.readFile("/home.html"))
})