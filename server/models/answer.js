var mongoose = require('mongoose');

var AnswerSchema = new mongoose.Schema({
  //  content: String,
  answer: {
    type: String,
    required: true,
    minlength: 5
  },
  username: {
    type: String
  },
  description: {
    type: String,
    required: true,
    minlength: 2,

  },
  vote1: {
    type: Number
  },
  poll_id: {
    type: String,
    required: true,
  },
  created_at: Date
})
mongoose.model('Answer', AnswerSchema);
