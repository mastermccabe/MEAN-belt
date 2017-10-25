var mongoose = require('mongoose');

var PollSchema = new mongoose.Schema({
  //  content: String,
  question: {
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

  created_at: Date
})
mongoose.model('Poll', PollSchema);
