var express = require("express");
var app = express();
var PORT = 3001;


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

var bodyParser = require("body-parser");