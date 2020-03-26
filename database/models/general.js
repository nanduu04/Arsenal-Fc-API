const mongoose = require('mongoose');

var General = mongoose.model('General', {

  teamName: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },

   teamImageURL : {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },

   generalManagerName: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },

   ownerName: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },

  coachName: {
   type: String,
   required: true,
   minlength: 1,
   trim: true
 },

   numberOfPlayers: {
    type: Number,
    min: 0,
    required: true
  },

   teamHistory: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

module.exports.General = General;
