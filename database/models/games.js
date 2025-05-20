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
    trim: true,
    enum: ['Premier League', 'FA Cup', 'League Cup', 'Champions League', 'Europa League']
  },

  opponent: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },

  date: {
    type: String,
    required: true,
    minLength: 1,
    trim: true,
    validate: {
      validator: function(v) {
        // Basic date format validation (DD Month YYYY)
        return /^\d{1,2}\s+[A-Za-z]+\s+\d{4}$/.test(v);
      },
      message: props => `${props.value} is not a valid date format! Use format: DD Month YYYY`
    }
  },

  arsenalGoals: {
    type: Number,
    required: true,
    min: 0,
    max: 20 // Reasonable maximum for a single game
  },

  oppositionGoals: {
    type: Number,
    required: true,
    min: 0,
    max: 20 // Reasonable maximum for a single game
  },

  topScorer: {
    type: String,
    required: true,
    minLength: 1,
    trim: true,
    validate: {
      validator: function(v) {
        return v === 'None' || /^[\p{L}\s]+$/u.test(v);
      },
      message: props => `${props.value} is not a valid player name!`
    }
  },

  winOrLoss: {
    type: String,
    required: true,
    enum: ['Win', 'Draw', 'Loss'],
    trim: true
  },

  leagueStatus: {
    type: String,
    required: true,
    minLength: 1,
    trim: true,
    validate: {
      validator: function(v) {
        return /^Arsenal unbeaten \d+-\d+-\d+$/.test(v);
      },
      message: props => `${props.value} is not a valid league status format!`
    }
  }
});

module.exports.Game = Game;
