var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');

var app = express();
var router = express.Router();
require("./app/config/routes")(router);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:"application/vnd.api+json"}));
app.use(express.static("public"))

var databaseUri = "mongodb://localhost/nytreact"
if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI, {});
} else {
    mongoose.connect(databaseUri, {
        useMongoClient: true
    });
};

var db = mongoose.connection;

db.once("error", function(error) {
    console.log("Mongoose error:", error);
});

db.once("open", function() {
    console.log("Mongoose Connection Successful");
});

app.use(router)

var PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
    console.log("Listening on port:", PORT)
})