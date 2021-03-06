const express = require('express');
const ObjectID = require('mongodb').ObjectID;
const bodyParser = require('body-parser');

const mongoose = require('./../database/mongoose.js').mongoose;
const Player = require('./../database/models/player.js').Player;
const Game = require('./../database/models/games.js').Game;
const General = require('./../database/models/general.js').General;
const fillPlayers = require('./../database/initialize_database/fill_players.js');
const fillGames = require('./../database/initialize_database/fill_results.js');
const fillGeneral = require('./../database/initialize_database/fill_general.js');

var app = express();
var port = process.env.PORT || 3000;

// fillPlayers.addPlayers();
// 
// fillGames.addResults();

// fillGeneral.addGeneral();

app.use(bodyParser.json());

app.get('/players', (req, res) => {
  Player.find().then((players) => {
    res.send({
      status: 200,
      playersCount: players.length,
      players: players});
  }, (err) => {
    res.status(400).send({
      status: 400,
      errorMessage: 'Unable to return data',
      errorDetail: `Error: ${err}`
    });
  });
});

app.get('/players/:name', (req, res) => {
  var playerName = req.params.name.toLowerCase();

  Player.findOne({popularName: playerName}).then((player) => {
    if(!player)
    {
      res.status(404).send({
        status: 404,
        errorMessage: 'Could not find specified player in database',
        errorDetail: 'No player in the databse matches with the name you provided. Please make sure you are passing in the player\'s popular name as the argument'
      });

      return;
    }
    res.send({
      status: 200,
      player: player
    });
  },(err) => {
    res.status(400).send({
      status: 400,
      errorMessage: 'Unable to return data',
      errorDetail: `Errro: ${err}`
    });
  });
});

app.get('/results', (req, res) => {
  Game.find().then((games) => {
    res.send({
      status: 200,
      resultsCount: games.length,
      results: games
    });
  }, (err) => {
    res.status(400).send({
      status: 400,
      errorMessage: 'Unable to return data',
      errorDetail: `Error: ${err}`
    });
  });
});

app.get('/results/:competition', (req, res) => {
  var competition = req.params.competition.toLowerCase();

  Game.find({competition: `${competition}`}).then((Games) => {
    if(!Games || Games.length === 0)
    {
      res.status(404).send({
        status: 404,
        errorMessage: 'Could not find speicifed result(s) in database',
        errorDetail: `No games in the database with speicifed search ${competition}`
      });

      return;
    }res.send({
      status: 200,
      resultsCount: Games.length,
      results: Games
    });

  }, (err) => {
    res.status(400).send({
      status: 400,
      errorMessage: 'Unable to return data',
      errorDetail: `Error: ${err}`
    });
  });
});

app.get('/general', (req, res) => {
  General.find().then((doc) => {
    res.send({
      status: 200,
      clubInfo: doc
    });
  }, (err) => {
    res.status(400).send({
      status: 400,
      errorMessage: 'Unable to retrieve general information',
      errorDetail: `Error: ${err}`
    });
  });
 });

// //Use this route to delete duplicates in players collection

  // Player.remove({}).then((result) => {
  //   console.log(result);
  // });
//
// Game.remove({}).then((result) => {
//   console.log(result);
// });


 app.listen(port,() => {
  console.log(`Server started up on port: ${port}`);
});
