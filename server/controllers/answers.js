var mongoose = require('mongoose');

var Answer = mongoose.model('Answer')
module.exports = {
  create: function(req, res) {
    console.log("***********answer method");
    console.log(req.body);
    var answer = new Answer({
      answer: req.body.answer,
      username: req.body.username,
      description: req.body.description,
      vote1: 0,
      poll_id: req.body.poll_id,


      created_at: new Date()
    });
    answer.save(function(err) {
      if (err) {
        console.log('something went wrong');
        let errors = [];
        for (var key in err.errors) {
          errors.push(err.errors[key].message);
        }
        res.json({
          message: "Error",
          error: errors
        });
      } else {
        res.json({
          message: "Success",
          answer: answer
        });
      }
    })
  },
  dashboard: function(req, res) {
    Answer.find({}, function(err, answers) {
      console.log("pulling answers", answers);
      res.json({
        'answers': answers
      });
    })
  },
  update: function(req, res) {
    Answer.update({
      "_id": ObjectId(req.body.answer_id)
    }, {
      $inc: {
        vote1: 1
      }
    }, function(err) {

    })

  }
}
// This works below
// db.answers.update({"_id" : ObjectId("59f0fd37e696841fcff5a81b")},{$inc:{vote1:1}})
// db.polls.remove({"_id" : ObjectId("59f0f46727e6c11f124883e4")},{},1)
