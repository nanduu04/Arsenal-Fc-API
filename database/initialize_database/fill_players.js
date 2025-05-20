const Player = require('./../models/player.js').Player;
const mongoose = require('./../mongoose.js').mongoose;

module.exports.addPlayers = async () => {
  try {
    // Clear existing players to avoid duplicates
    await Player.deleteMany({});

    const players = [
      {
        fullName: 'Jens Gerhard Lehmann',
        popularName: 'Lehmann',
        nationality: 'German',
        age: 33,
        dateOfBirth: '11/10/1969',
        weight: 87,
        height: '190',
        jerseyNumber: 1,
        position: 'Goalkeeper',
        goals: 0,
        penalties: 0,
        assists: 0,
        clearances: 0,
        recoveries: 0
      },
      {
        fullName: 'Thierry Daniel Henry',
        popularName: 'Henry',
        nationality: 'French',
        age: 25,
        dateOfBirth: '08/17/1977',
        weight: 83,
        height: '188',
        jerseyNumber: 14,
        position: 'Striker',
        goals: 30,
        penalties: 3,
        assists: 7,
        clearances: 0,
        recoveries: 0
      },
      {
        fullName: 'Kolo Toure',
        popularName: 'Toure',
        nationality: 'Ivory Coast',
        age: 22,
        dateOfBirth: '03/19/1981',
        weight: 82,
        height: '181',
        jerseyNumber: 28,
        position: 'Centre Back',
        goals: 3,
        penalties: 0,
        assists: 1,
        clearances: 0,
        recoveries: 0
      },
      {
        fullName: 'Sulzeer Jeremiah Campbell',
        popularName: 'Campbell',
        nationality: 'English',
        age: 28,
        dateOfBirth: '09/18/1974',
        weight: 92,
        height: '188',
        jerseyNumber: 23,
        position: 'Centre Back',
        goals: 3,
        penalties: 0,
        assists: 0,
        clearances: 0,
        recoveries: 0
      },
      {
        fullName: 'Robert Emmanuel Pirès',
        popularName: 'Pires',
        nationality: 'French',
        age: 29,
        dateOfBirth: '10/29/1973',
        weight: 75,
        height: '185',
        jerseyNumber: 7,
        position: 'Left Wing',
        goals: 14,
        penalties: 0,
        assists: 7,
        clearances: 0,
        recoveries: 0
      },
      {
        fullName: 'Ashley Donovan Cole',
        popularName: 'Cole',
        nationality: 'English',
        age: 22,
        dateOfBirth: '12/20/1980',
        weight: 66,
        height: '176',
        jerseyNumber: 3,
        position: 'Left Back',
        goals: 1,
        penalties: 0,
        assists: 2,
        clearances: 0,
        recoveries: 0
      },
      {
        fullName: 'Laureano Bisan-Etame Mayer',
        popularName: 'Lauren',
        nationality: 'Cameroon',
        age: 28,
        dateOfBirth: '01/19/1977',
        weight: 85,
        height: '180',
        jerseyNumber: 12,
        position: 'Right Back',
        goals: 2,
        penalties: 1,
        assists: 3,
        clearances: 0,
        recoveries: 0
      },
      {
        fullName: 'Gilberto Aparecido da Silva',
        popularName: 'Gilberto',
        nationality: 'Brazil',
        age: 26,
        dateOfBirth: '08/07/1976',
        weight: 68,
        height: '184',
        jerseyNumber: 18,
        position: 'Defensive Midfielder',
        goals: 4,
        penalties: 0,
        assists: 2,
        clearances: 0,
        recoveries: 0
      },
      {
        fullName: 'Patrick Vieira',
        popularName: 'Vieira',
        nationality: 'French',
        age: 27,
        dateOfBirth: '06/23/1976',
        weight: 73,
        height: '193',
        jerseyNumber: 6,
        position: 'Center Midfielder',
        goals: 3,
        penalties: 0,
        assists: 3,
        clearances: 0,
        recoveries: 0
      },
      {
        fullName: 'Karl Fredrik Ljungberg',
        popularName: 'Ljungberg',
        nationality: 'Swedish',
        age: 26,
        dateOfBirth: '04/16/1977',
        weight: 85,
        height: '175',
        jerseyNumber: 8,
        position: 'Right Wing',
        goals: 4,
        penalties: 0,
        assists: 5,
        clearances: 0,
        recoveries: 0
      },
      {
        fullName: 'Dennis Bergkamp',
        popularName: 'Bergkamp',
        nationality: 'Dutch',
        age: 34,
        dateOfBirth: '05/10/1969',
        weight: 80,
        height: '188',
        jerseyNumber: 10,
        position: 'Attacking Midfielder',
        goals: 4,
        penalties: 0,
        assists: 7,
        clearances: 0,
        recoveries: 0
      }
    ];

    // Save all players using Promise.all for better performance
    const savePromises = players.map(playerData => {
      const player = new Player(playerData);
      return player.save();
    });

    const savedPlayers = await Promise.all(savePromises);
    console.log(`Successfully saved ${savedPlayers.length} players`);
  } catch (error) {
    console.error('Error saving players:', error);
    throw error;
  }
};