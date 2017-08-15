var Article = require("../../models/Article");

module.exports = function(router) {

  router.get("/", function(req, res) {
    res.sendFile(_dirname + "/public/index.html")
  });

  router.get("/api/saved", function(req, res) {
    Article.find({saved:true}).sort({id: -1})
    .exec(function(err, doc) {
      res.json(doc)
    });
  });

  router.post("/api/saved", function(req, res) {
    console.log("saving")
    article = new Article({
      title: req.headline,
      date: req.pub_date,
      url: req.web.url
    })
    article.save(function(err, res) {
      if err throw err;
      else {console.log(res)}
    });
  });

  router.delete("/api/saved", function(res, req) {
      Article.remove(({_id: req.body._id}))
  });

};
