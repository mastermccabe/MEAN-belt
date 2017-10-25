// var users = require('../controllers/my-controllers.js');
var polls = require('../controllers/my-controllers.js');
var answers = require('../controllers/answers.js');
var path = require('path');
module.exports = function(app) {


  app.get('/polls', (req, res, next) => {
    console.log("express get route is working")
    polls.dashboard(req, res)
  });


  app.post('/polls', (req, res, next) => {
    console.log("node route create");
    console.log(req.body)
    polls.create(req, res);
  });
  app.get('/answers', (req, res, next) => {
    console.log("----GETTING ANSWERS------")
    answers.dashboard(req, res)
  });


  app.post('/answers', (req, res, next) => {
    console.log("********** creating answers******************");
    console.log(req.body)
    answers.create(req, res);
  });

  // app.put('/answers', (req, res, next) => {
  //   console.log("****ioncrementing vote**")
  //   answers.update(req, res);
  // });

  app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/index.html"))
  });

}
