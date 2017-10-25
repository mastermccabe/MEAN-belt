var mongoose = require('mongoose');

var Poll = mongoose.model('Poll')
module.exports = {
  create: function(req, res) {
    console.log("express create method");
    console.log(req.body);
    var poll = new Poll({
      question: req.body.question,
      username: req.body.username,
      description: req.body.description,
      vote1: 0,

      created_at: new Date()
    });
    poll.save(function(err) {
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
          poll: poll
        });
      }
    })
  },
  dashboard: function(req, res) {
    Poll.find({}, function(err, polls) {
      console.log("pulling polls", polls);
      res.json({
        'polls': polls
      });
    })
  },
}

// create: function(req, res) {
//   console.log("express create method");
//   console.log(req.body);
//   var note = new Note({
//     content: req.body.content,
//     // content: 5, //error
//     created_at: new Date()
//   });
//   note.save(function(err) {
//     if(err) {
//       console.log('something went wrong');
//       let errors = [];
//       for(var key in err.errors){
//         errors.push(err.errors[key].message);
//       }
//       res.json({message: "Error", error: errors});
//     } else {
//       res.json({message: "Success", note: note});
//     }
//   })
// }
