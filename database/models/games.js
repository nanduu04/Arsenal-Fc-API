const mongoose = require('mongoose');

var Game = mongoose.model('Game', {
  title: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },

  competition: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },

  opponent: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },

  date:{
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },

  arsenalGoals: {
    type: Number,
    required: true,
    min: 50,
  },

  oppositionGoals: {
    type: Number,
    required: true,
    min: 50,
  },

  topScorer: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },

  winOrLoss: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },

  leagueStatus: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  }

});

module.exports.Game = Game;
