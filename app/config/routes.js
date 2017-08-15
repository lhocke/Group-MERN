var express = require('express');
var router = express.Router();
var Article = require('../models/Article');
//render the index.html file when this route is hit
router.get('/', function(req,res) {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});
//this will get all the saved articles from the db
router.get('/api/saved', function(req,res) {
    Article.findAll({}).exec(function(err, doc) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(doc);
        }
    });
});
router.post('/api/saved', function(req,res) {
    var savedArticle = new Article(req.body);
    Article.save(function(err,doc) {
        if(err) {
            res.send(err);
        }
        else {
            res.send(doc);
        }
    });
});
router.delete('/api/saved/:id', function(req,res) {
    Article.remove(req.params.id, function(err,doc) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(doc);
        }
    });
});
router.get("*", function(req, res) {
  res.redirect("/");
});
//export these routes so server.js can use them
module.exports = router;
