const mongoose = require('mongoose');

var Player = mongoose.model('Player', {

  fullName: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },

  popularName: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },

  nationality: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },

  age: {
    type: Number,
    required: true,
    min: 17,
  },

  dateOfBirth: {
    type: String,
    required: true,
    minLength: 5,
    trim: true,
    validate: {
      validator: function(v) {
        // Validate date format (MM/DD/YYYY)
        return /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}$/.test(v);
      },
      message: props => `${props.value} is not a valid date format! Use format: MM/DD/YYYY`
    }
  },

  height: {
    type: String,
    required: true,
    minLength: 0,
    trim: true
  },

  weight: {
    type: Number,
    required: true,
    min: 50,
  },

  jerseyNumber: {
    type: Number,
    required: true,
    min: 1,
    max: 99
  },

  position: {
    type: String,
    required: true,
    minLength: 1,
    trim: true,
    enum: ['Goalkeeper', 'Defender', 'Midfielder', 'Forward', 'Striker', 'Left Back', 'Right Back', 'Centre Back', 'Defensive Midfielder', 'Center Midfielder', 'Left Wing', 'Right Wing', 'Attacking Midfielder']
  },

  goals: {
    type: Number,
    required: true,
    min: 0,
    default: 0
  },

  penalties: {
    type: Number,
    required: true,
    min: 0,
    default: 0
  },

  assists: {
    type: Number,
    required: true,
    min: 0,
    default: 0
  },

  clearances: {
    type: Number,
    required: true,
    min: 0,
    default: 0
  },
  
  recoveries: {
    type: Number,
    required: true,
    min: 0,
    default: 0
  },

});

module.exports.Player = Player;
