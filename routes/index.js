var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  request('https://newsapi.org/v1/sources?language=en', function (error, response, body) {
    body = JSON.parse(body);
    var sources = body.sources;
    if (error){
      console.log(error);
    }else {
        res.render('index', {
            newsAll: sources,
            logos: sources.urlsToLogos


        });
    }
    })

});

module.exports = router;
