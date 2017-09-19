var express = require("express");
var bodyParser = require("body-parser");

// tell node creating express server
var app = express();

// Sets initial port
var PORT = process.env.PORT || 8080;

// BodyParser makes it possible for our server to interpret data that is sent to it
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Listner which starts server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});