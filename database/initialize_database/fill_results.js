const mongoose = require('./../mongoose.js').mongoose;
const Game = require('./../models/games.js').Game

module.exports.addResults = async () => {
  try {
    // 2003-2004 Invincibles Season Games
    const invinciblesGames = [
      {
        title: 'Arsenal vs Everton',
        competition: 'Premier League',
        opponent: 'Everton',
        date: '16 August 2003',
        arsenalGoals: 2,
        oppositionGoals: 1,
        topScorer: 'Henry',
        winOrLoss: 'Win',
        leagueStatus: 'Arsenal unbeaten 1-0-0'
      },
      {
        title: 'Middlesbrough vs Arsenal',
        competition: 'Premier League',
        opponent: 'Middlesbrough',
        date: '24 August 2003',
        arsenalGoals: 4,
        oppositionGoals: 0,
        topScorer: 'Wiltord',
        winOrLoss: 'Win',
        leagueStatus: 'Arsenal unbeaten 2-0-0'
      },
      {
        title: 'Arsenal vs Aston Villa',
        competition: 'Premier League',
        opponent: 'Aston Villa',
        date: '27 August 2003',
        arsenalGoals: 2,
        oppositionGoals: 0,
        topScorer: 'Henry',
        winOrLoss: 'Win',
        leagueStatus: 'Arsenal unbeaten 3-0-0'
      },
      {
        title: 'Manchester City vs Arsenal',
        competition: 'Premier League',
        opponent: 'Manchester City',
        date: '31 August 2003',
        arsenalGoals: 2,
        oppositionGoals: 1,
        topScorer: 'Lauren',
        winOrLoss: 'Win',
        leagueStatus: 'Arsenal unbeaten 4-0-0'
      },
      {
        title: 'Arsenal vs Portsmouth',
        competition: 'Premier League',
        opponent: 'Portsmouth',
        date: '13 September 2003',
        arsenalGoals: 1,
        oppositionGoals: 1,
        topScorer: 'Henry',
        winOrLoss: 'Draw',
        leagueStatus: 'Arsenal unbeaten 4-1-0'
      },
      {
        title: 'Manchester United vs Arsenal',
        competition: 'Premier League',
        opponent: 'Manchester United',
        date: '21 September 2003',
        arsenalGoals: 0,
        oppositionGoals: 0,
        topScorer: 'None',
        winOrLoss: 'Draw',
        leagueStatus: 'Arsenal unbeaten 4-2-0'
      },
      {
        title: 'Arsenal vs Newcastle United',
        competition: 'Premier League',
        opponent: 'Newcastle United',
        date: '26 September 2003',
        arsenalGoals: 3,
        oppositionGoals: 2,
        topScorer: 'Henry',
        winOrLoss: 'Win',
        leagueStatus: 'Arsenal unbeaten 5-2-0'
      },
      {
        title: 'Liverpool vs Arsenal',
        competition: 'Premier League',
        opponent: 'Liverpool',
        date: '4 October 2003',
        arsenalGoals: 2,
        oppositionGoals: 1,
        topScorer: 'Hyypiä',
        winOrLoss: 'Win',
        leagueStatus: 'Arsenal unbeaten 6-2-0'
      },
      {
        title: 'Arsenal vs Chelsea',
        competition: 'Premier League',
        opponent: 'Chelsea',
        date: '18 October 2003',
        arsenalGoals: 2,
        oppositionGoals: 1,
        topScorer: 'Henry',
        winOrLoss: 'Win',
        leagueStatus: 'Arsenal unbeaten 7-2-0'
      },
      {
        title: 'Charlton Athletic vs Arsenal',
        competition: 'Premier League',
        opponent: 'Charlton Athletic',
        date: '26 October 2003',
        arsenalGoals: 1,
        oppositionGoals: 1,
        topScorer: 'Henry',
        winOrLoss: 'Draw',
        leagueStatus: 'Arsenal unbeaten 7-3-0'
      },
      {
        title: 'Leeds United vs Arsenal',
        competition: 'Premier League',
        opponent: 'Leeds United',
        date: '1 November 2003',
        arsenalGoals: 4,
        oppositionGoals: 1,
        topScorer: 'Henry',
        winOrLoss: 'Win',
        leagueStatus: 'Arsenal unbeaten 8-3-0'
      },
      {
        title: 'Arsenal vs Tottenham Hotspur',
        competition: 'Premier League',
        opponent: 'Tottenham Hotspur',
        date: '8 November 2003',
        arsenalGoals: 2,
        oppositionGoals: 1,
        topScorer: 'Pires',
        winOrLoss: 'Win',
        leagueStatus: 'Arsenal unbeaten 9-3-0'
      },
      {
        title: 'Birmingham City vs Arsenal',
        competition: 'Premier League',
        opponent: 'Birmingham City',
        date: '22 November 2003',
        arsenalGoals: 3,
        oppositionGoals: 0,
        topScorer: 'Edu',
        winOrLoss: 'Win',
        leagueStatus: 'Arsenal unbeaten 10-3-0'
      },
      {
        title: 'Arsenal vs Fulham',
        competition: 'Premier League',
        opponent: 'Fulham',
        date: '30 November 2003',
        arsenalGoals: 0,
        oppositionGoals: 0,
        topScorer: 'None',
        winOrLoss: 'Draw',
        leagueStatus: 'Arsenal unbeaten 10-4-0'
      },
      {
        title: 'Leicester City vs Arsenal',
        competition: 'Premier League',
        opponent: 'Leicester City',
        date: '6 December 2003',
        arsenalGoals: 1,
        oppositionGoals: 1,
        topScorer: 'Gilberto Silva',
        winOrLoss: 'Draw',
        leagueStatus: 'Arsenal unbeaten 10-5-0'
      },
      {
        title: 'Arsenal vs Blackburn Rovers',
        competition: 'Premier League',
        opponent: 'Blackburn Rovers',
        date: '14 December 2003',
        arsenalGoals: 1,
        oppositionGoals: 0,
        topScorer: 'Bergkamp',
        winOrLoss: 'Win',
        leagueStatus: 'Arsenal unbeaten 11-5-0'
      },
      {
        title: 'Bolton Wanderers vs Arsenal',
        competition: 'Premier League',
        opponent: 'Bolton Wanderers',
        date: '20 December 2003',
        arsenalGoals: 1,
        oppositionGoals: 1,
        topScorer: 'Henry',
        winOrLoss: 'Draw',
        leagueStatus: 'Arsenal unbeaten 11-6-0'
      },
      {
        title: 'Arsenal vs Wolverhampton Wanderers',
        competition: 'Premier League',
        opponent: 'Wolverhampton Wanderers',
        date: '26 December 2003',
        arsenalGoals: 3,
        oppositionGoals: 0,
        topScorer: 'Henry',
        winOrLoss: 'Win',
        leagueStatus: 'Arsenal unbeaten 12-6-0'
      },
      {
        title: 'Southampton vs Arsenal',
        competition: 'Premier League',
        opponent: 'Southampton',
        date: '29 December 2003',
        arsenalGoals: 1,
        oppositionGoals: 0,
        topScorer: 'Pires',
        winOrLoss: 'Win',
        leagueStatus: 'Arsenal unbeaten 13-6-0'
      },
      {
        title: 'Arsenal vs Charlton Athletic',
        competition: 'Premier League',
        opponent: 'Charlton Athletic',
        date: '7 January 2004',
        arsenalGoals: 4,
        oppositionGoals: 1,
        topScorer: 'Henry',
        winOrLoss: 'Win',
        leagueStatus: 'Arsenal unbeaten 14-6-0'
      },
      {
        title: 'Everton vs Arsenal',
        competition: 'Premier League',
        opponent: 'Everton',
        date: '10 January 2004',
        arsenalGoals: 1,
        oppositionGoals: 1,
        topScorer: 'Kanu',
        winOrLoss: 'Draw',
        leagueStatus: 'Arsenal unbeaten 14-7-0'
      },
      {
        title: 'Arsenal vs Middlesbrough',
        competition: 'Premier League',
        opponent: 'Middlesbrough',
        date: '18 January 2004',
        arsenalGoals: 4,
        oppositionGoals: 1,
        topScorer: 'Henry',
        winOrLoss: 'Win',
        leagueStatus: 'Arsenal unbeaten 15-7-0'
      },
      {
        title: 'Aston Villa vs Arsenal',
        competition: 'Premier League',
        opponent: 'Aston Villa',
        date: '1 February 2004',
        arsenalGoals: 2,
        oppositionGoals: 0,
        topScorer: 'Henry',
        winOrLoss: 'Win',
        leagueStatus: 'Arsenal unbeaten 16-7-0'
      },
      {
        title: 'Arsenal vs Manchester City',
        competition: 'Premier League',
        opponent: 'Manchester City',
        date: '7 February 2004',
        arsenalGoals: 2,
        oppositionGoals: 1,
        topScorer: 'Henry',
        winOrLoss: 'Win',
        leagueStatus: 'Arsenal unbeaten 17-7-0'
      },
      {
        title: 'Wolverhampton Wanderers vs Arsenal',
        competition: 'Premier League',
        opponent: 'Wolverhampton Wanderers',
        date: '10 February 2004',
        arsenalGoals: 3,
        oppositionGoals: 1,
        topScorer: 'Henry',
        winOrLoss: 'Win',
        leagueStatus: 'Arsenal unbeaten 18-7-0'
      },
      {
        title: 'Arsenal vs Southampton',
        competition: 'Premier League',
        opponent: 'Southampton',
        date: '21 February 2004',
        arsenalGoals: 2,
        oppositionGoals: 0,
        topScorer: 'Henry',
        winOrLoss: 'Win',
        leagueStatus: 'Arsenal unbeaten 19-7-0'
      },
      {
        title: 'Chelsea vs Arsenal',
        competition: 'Premier League',
        opponent: 'Chelsea',
        date: '28 February 2004',
        arsenalGoals: 2,
        oppositionGoals: 1,
        topScorer: 'Vieira',
        winOrLoss: 'Win',
        leagueStatus: 'Arsenal unbeaten 20-7-0'
      },
      {
        title: 'Arsenal vs Charlton Athletic',
        competition: 'Premier League',
        opponent: 'Charlton Athletic',
        date: '13 March 2004',
        arsenalGoals: 2,
        oppositionGoals: 1,
        topScorer: 'Henry',
        winOrLoss: 'Win',
        leagueStatus: 'Arsenal unbeaten 21-7-0'
      },
      {
        title: 'Blackburn Rovers vs Arsenal',
        competition: 'Premier League',
        opponent: 'Blackburn Rovers',
        date: '20 March 2004',
        arsenalGoals: 2,
        oppositionGoals: 0,
        topScorer: 'Henry',
        winOrLoss: 'Win',
        leagueStatus: 'Arsenal unbeaten 22-7-0'
      },
      {
        title: 'Arsenal vs Bolton Wanderers',
        competition: 'Premier League',
        opponent: 'Bolton Wanderers',
        date: '28 March 2004',
        arsenalGoals: 2,
        oppositionGoals: 1,
        topScorer: 'Bergkamp',
        winOrLoss: 'Win',
        leagueStatus: 'Arsenal unbeaten 23-7-0'
      },
      {
        title: 'Arsenal vs Manchester United',
        competition: 'Premier League',
        opponent: 'Manchester United',
        date: '9 April 2004',
        arsenalGoals: 1,
        oppositionGoals: 1,
        topScorer: 'Henry',
        winOrLoss: 'Draw',
        leagueStatus: 'Arsenal unbeaten 23-8-0'
      },
      {
        title: 'Arsenal vs Liverpool',
        competition: 'Premier League',
        opponent: 'Liverpool',
        date: '11 April 2004',
        arsenalGoals: 4,
        oppositionGoals: 2,
        topScorer: 'Henry',
        winOrLoss: 'Win',
        leagueStatus: 'Arsenal unbeaten 24-8-0'
      },
      {
        title: 'Newcastle United vs Arsenal',
        competition: 'Premier League',
        opponent: 'Newcastle United',
        date: '16 April 2004',
        arsenalGoals: 0,
        oppositionGoals: 0,
        topScorer: 'None',
        winOrLoss: 'Draw',
        leagueStatus: 'Arsenal unbeaten 24-9-0'
      },
      {
        title: 'Arsenal vs Leeds United',
        competition: 'Premier League',
        opponent: 'Leeds United',
        date: '25 April 2004',
        arsenalGoals: 6,
        oppositionGoals: 1,
        topScorer: 'Henry',
        winOrLoss: 'Win',
        leagueStatus: 'Arsenal unbeaten 25-9-0'
      },
      {
        title: 'Tottenham Hotspur vs Arsenal',
        competition: 'Premier League',
        opponent: 'Tottenham Hotspur',
        date: '1 May 2004',
        arsenalGoals: 2,
        oppositionGoals: 2,
        topScorer: 'Vieira',
        winOrLoss: 'Draw',
        leagueStatus: 'Arsenal unbeaten 25-10-0'
      },
      {
        title: 'Arsenal vs Birmingham City',
        competition: 'Premier League',
        opponent: 'Birmingham City',
        date: '4 May 2004',
        arsenalGoals: 0,
        oppositionGoals: 0,
        topScorer: 'None',
        winOrLoss: 'Draw',
        leagueStatus: 'Arsenal unbeaten 25-11-0'
      },
      {
        title: 'Portsmouth vs Arsenal',
        competition: 'Premier League',
        opponent: 'Portsmouth',
        date: '9 May 2004',
        arsenalGoals: 1,
        oppositionGoals: 1,
        topScorer: 'Reyes',
        winOrLoss: 'Draw',
        leagueStatus: 'Arsenal unbeaten 25-12-0'
      },
      {
        title: 'Fulham vs Arsenal',
        competition: 'Premier League',
        opponent: 'Fulham',
        date: '15 May 2004',
        arsenalGoals: 1,
        oppositionGoals: 0,
        topScorer: 'Reyes',
        winOrLoss: 'Win',
        leagueStatus: 'Arsenal unbeaten 26-12-0'
      }
    ];

    // Save all games using Promise.all for better performance
    const savePromises = invinciblesGames.map(gameData => {
      const game = new Game(gameData);
      return game.save();
    });

    const savedGames = await Promise.all(savePromises);
    console.log(`Successfully saved ${savedGames.length} games`);
    return savedGames;
  } catch (error) {
    console.error('Error saving games:', error);
    throw error;
  }
};
