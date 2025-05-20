const express = require('express');
const ObjectID = require('mongodb').ObjectID;
const bodyParser = require('body-parser');

const { mongoose, connectDB } = require('./../database/mongoose.js');
const Player = require('./../database/models/player.js').Player;
const Game = require('./../database/models/games.js').Game;
const General = require('./../database/models/general.js').General;
const TeamSeason = require('./../database/models/team_season.js').TeamSeason;
const fillPlayers = require('./../database/initialize_database/fill_players.js');
const fillGames = require('./../database/initialize_database/fill_results.js');
const fillGeneral = require('./../database/initialize_database/fill_general.js');
const { initializeInvincibles } = require('./../database/initialize_database/fill_invincibles.js');

// Response helper functions
const sendSuccess = (res, data, message = 'Success') => {
  res.send({
    status: 200,
    message,
    data
  });
};

const sendError = (res, status, message, error = null) => {
  res.status(status).send({
    status,
    message,
    error: error ? error.toString() : null
  });
};

// Database initialization function
const initializeDatabase = async () => {
  try {
    await fillPlayers.addPlayers();
    await fillGames.addResults();
    await fillGeneral.addGeneral();
    await initializeInvincibles();
    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
    throw error;
  }
};

var app = express();
var port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Input validation middleware
const validatePlayerName = (req, res, next) => {
  const { name } = req.params;
  if (!name || typeof name !== 'string') {
    return sendError(res, 400, 'Invalid player name provided');
  }
  next();
};

const validateCompetition = (req, res, next) => {
  const { competition } = req.params;
  if (!competition || typeof competition !== 'string') {
    return sendError(res, 400, 'Invalid competition provided');
  }
  next();
};

// Routes
app.get('/players', async (req, res) => {
  try {
    const players = await Player.find();
    sendSuccess(res, {
      playersCount: players.length,
      players
    });
  } catch (err) {
    sendError(res, 400, 'Unable to return data', err);
  }
});

app.get('/players/:name', validatePlayerName, async (req, res) => {
  try {
    const playerName = req.params.name.toLowerCase();
    const player = await Player.findOne({ popularName: playerName });

    if (!player) {
      return sendError(res, 404, 'Player not found', 'No player in the database matches the provided name');
    }

    sendSuccess(res, { player });
  } catch (err) {
    sendError(res, 400, 'Unable to return data', err);
  }
});

app.get('/results', async (req, res) => {
  try {
    const games = await Game.find();
    sendSuccess(res, {
      resultsCount: games.length,
      results: games
    });
  } catch (err) {
    sendError(res, 400, 'Unable to return data', err);
  }
});

app.get('/results/:competition', validateCompetition, async (req, res) => {
  try {
    const competition = req.params.competition.toLowerCase();
    const games = await Game.find({ competition });

    if (!games || games.length === 0) {
      return sendError(res, 404, 'No results found', `No games found for competition: ${competition}`);
    }

    sendSuccess(res, {
      resultsCount: games.length,
      results: games
    });
  } catch (err) {
    sendError(res, 400, 'Unable to return data', err);
  }
});

app.get('/general', async (req, res) => {
  try {
    const clubInfo = await General.find();
    sendSuccess(res, { clubInfo });
  } catch (err) {
    sendError(res, 400, 'Unable to retrieve general information', err);
  }
});

app.get('/seasons', async (req, res) => {
  try {
    const seasons = await TeamSeason.find();
    sendSuccess(res, {
      seasonsCount: seasons.length,
      seasons
    });
  } catch (err) {
    sendError(res, 400, 'Unable to return data', err);
  }
});

app.get('/seasons/:season', async (req, res) => {
  try {
    const season = req.params.season;
    const seasonData = await TeamSeason.findOne({ season });

    if (!seasonData) {
      return sendError(res, 404, 'Season not found', `No data found for season: ${season}`);
    }

    sendSuccess(res, { seasonData });
  } catch (err) {
    sendError(res, 400, 'Unable to return data', err);
  }
});

// Database connection and server startup
const startServer = async () => {
  try {
    await connectDB();
    await initializeDatabase();
    app.listen(port, () => {
      console.log(`Server started up on port: ${port}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
