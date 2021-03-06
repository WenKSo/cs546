//Name: Wenkang Su
//I pledge my honor that I have abided by the Stevens Honor System.
// We first require our express package
const express = require("express");
const exphbs =  require('express-handlebars');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const configRoutes = require('./routes');
var Guid = require("Guid");
//const userData = require("./users.js");

// We create our express isntance:
const app = express();
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/json
app.use(cookieParser());
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));
configRoutes(app);



app.listen(3000, function() {
    console.log("Your server is now listening on port 3000! Navigate to http://localhost:3000 to access it");

    if (process && process.send) process.send({done: true}); // ADD THIS LINE
});