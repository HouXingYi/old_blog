var express = require("express");
var app = express();
app.use("/",express.static(__dirname + "/blog/_site"));
app.listen(8081);