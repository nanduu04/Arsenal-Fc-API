const mongoose = require('mongoose');

const TeamSeason = mongoose.model('TeamSeason', {
  team: {
    type: String,
    required: true,
    trim: true
  },
  season: {
    type: String,
    required: true,
    trim: true
  },
  competition: {
    type: String,
    required: true,
    trim: true
  },
  team_record: {
    matches_played: {
      type: Number,
      required: true,
      min: 0
    },
    wins: {
      type: Number,
      required: true,
      min: 0
    },
    draws: {
      type: Number,
      required: true,
      min: 0
    },
    losses: {
      type: Number,
      required: true,
      min: 0
    },
    goals_for: {
      type: Number,
      required: true,
      min: 0
    },
    goals_against: {
      type: Number,
      required: true,
      min: 0
    },
    goal_difference: {
      type: Number,
      required: true
    },
    points: {
      type: Number,
      required: true,
      min: 0
    },
    final_position: {
      type: Number,
      required: true,
      min: 1
    },
    nickname: {
      type: String,
      trim: true
    }
  },
  notes: {
    type: String,
    trim: true
  }
});

module.exports.TeamSeason = TeamSeason; 