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
    trim: true
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
    min: 120,
  },

  jerseyNumber: {
    type: Number,
    required: true,
    minLength: 0,
  },

  position: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },

  Goals: {
    type: Number,
    required: true,
    min: 0,
  },

  Assists: {
    type: Number,
    required: true,
    min: 0,
  },

  Clearances: {
    type: Number,
    required: true,
    min: 0,
  },
  
  Recoveries: {
    type: Number,
    required: true,
    min: 0,
  },

});

module.exports.Player = Player;
