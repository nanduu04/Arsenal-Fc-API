const mongoose = require('./../mongoose.js').mongoose;
const Player = require('./../models/player.js').Player;
const TeamSeason = require('./../models/team_season.js').TeamSeason;

const invinciblesData = {
  team: "Arsenal FC",
  season: "2003-2004",
  competition: "Premier League",
  team_record: {
    matches_played: 38,
    wins: 26,
    draws: 12,
    losses: 0,
    goals_for: 73,
    goals_against: 26,
    goal_difference: 47,
    points: 90,
    final_position: 1,
    nickname: "The Invincibles"
  },
  notes: "Arsenal became the first team in Premier League history to go unbeaten for an entire season (38 matches). They were nicknamed 'The Invincibles' and received a special gold Premier League trophy to commemorate this achievement."
};

const playerStats = [
  {
    fullName: "Thierry Henry",
    popularName: "Henry",
    nationality: "France",
    position: "Forward",
    goals: 30,
    penalties: 3,
    assists: 7
  },
  {
    fullName: "Robert Pires",
    popularName: "Pires",
    nationality: "France",
    position: "Midfielder",
    goals: 14,
    penalties: 0,
    assists: 7
  },
  {
    fullName: "Freddie Ljungberg",
    popularName: "Ljungberg",
    nationality: "Sweden",
    position: "Midfielder",
    goals: 4,
    penalties: 0,
    assists: 5
  },
  {
    fullName: "Dennis Bergkamp",
    popularName: "Bergkamp",
    nationality: "Netherlands",
    position: "Forward",
    goals: 4,
    penalties: 0,
    assists: 7
  },
  {
    fullName: "Gilberto Silva",
    popularName: "Gilberto",
    nationality: "Brazil",
    position: "Midfielder",
    goals: 4,
    penalties: 0,
    assists: 2
  },
  {
    fullName: "Jose Antonio Reyes",
    popularName: "Reyes",
    nationality: "Spain",
    position: "Forward",
    goals: 2,
    penalties: 0,
    assists: 0
  },
  {
    fullName: "Kolo Toure",
    popularName: "Toure",
    nationality: "Ivory Coast",
    position: "Defender",
    goals: 3,
    penalties: 0,
    assists: 1
  },
  {
    fullName: "Sol Campbell",
    popularName: "Campbell",
    nationality: "England",
    position: "Defender",
    goals: 3,
    penalties: 0,
    assists: 0
  },
  {
    fullName: "Edu",
    popularName: "Edu",
    nationality: "Brazil",
    position: "Midfielder",
    goals: 2,
    penalties: 0,
    assists: 1
  },
  {
    fullName: "Patrick Vieira",
    popularName: "Vieira",
    nationality: "France",
    position: "Midfielder",
    goals: 3,
    penalties: 0,
    assists: 3
  },
  {
    fullName: "Lauren",
    popularName: "Lauren",
    nationality: "Cameroon",
    position: "Defender",
    goals: 2,
    penalties: 1,
    assists: 3
  },
  {
    fullName: "Sylvain Wiltord",
    popularName: "Wiltord",
    nationality: "France",
    position: "Forward",
    goals: 1,
    penalties: 0,
    assists: 1
  },
  {
    fullName: "Ashley Cole",
    popularName: "Cole",
    nationality: "England",
    position: "Defender",
    goals: 1,
    penalties: 0,
    assists: 2
  }
];

const initializeInvincibles = async () => {
  try {
    // Add team season data
    const teamSeason = new TeamSeason(invinciblesData);
    await teamSeason.save();
    console.log('Team season data added successfully');

    // Add player statistics
    for (const player of playerStats) {
      const existingPlayer = await Player.findOne({ fullName: player.fullName });
      if (existingPlayer) {
        existingPlayer.Goals = player.goals;
        existingPlayer.penalties = player.penalties;
        existingPlayer.Assists = player.assists;
        await existingPlayer.save();
        console.log(`Updated stats for ${player.fullName}`);
      } else {
        const newPlayer = new Player({
          ...player,
          age: 25, // Default age since we don't have exact ages
          dateOfBirth: "01/01/1978", // Default DOB since we don't have exact dates
          height: "180", // Default height
          weight: 75, // Default weight
          jerseyNumber: 10, // Default jersey number
          Clearances: 0,
          Recoveries: 0
        });
        await newPlayer.save();
        console.log(`Added new player ${player.fullName}`);
      }
    }
    console.log('Invincibles season data initialized successfully');
  } catch (error) {
    console.error('Error initializing Invincibles data:', error);
  }
};

module.exports = { initializeInvincibles }; 