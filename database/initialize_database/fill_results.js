const mongoose = require('./../mongoose.js').mongoose;
const Game = require('./../models/games.js').Game

module.exports.addResults = () => {
  var gameOne = new Game({
    title: 'Arsenal vs Everton',
    competition: 'Premier League',
    opponent: 'Everon',
    date: '7 May 2003',
    arsenalGoals: 6,
    oppositionGoals: 1,
    topScorer: 'Pennant',
    winOrLoss: 'Win',
    seriesStatus: 'Arsenal unbeaten 1-0-0'
  });

  var gameTwo = new Game({
    title: 'Middlesbrough	vs Arsenal',
    competition: 'Premier League',
    opponent: 'Middlesbrough',
    date: '24 August 2003',
    arsenalGoals: 4,
    oppositionGoals: 0,
    topScorer: 'Wiltord',
    winOrLoss: 'Win',
    seriesStatus: 'Arsenal unbeaten 2-0-0'
  });

  var gameThree = new Game({
    title: 'Arsenal	vs Aston Villa',
    competition: 'Aston Villa',
    opponent: 'Aston Villa',
    date: '27 August 2003',
    arsenalGoals: 2,
    oppositionGoals: 0,
    topScorer: 'Henry',
    winOrLoss: 'Win',
    seriesStatus: 'Arsenal unbeaten 3-0-0'
  });
  
  var gameFour = new Game({
    title: 'Manchester City vs Arsenal',
    competition: 'Premier League',
    opponent: 'Manchester City',
    date: '31 August 2003',
    arsenalGoals: 2,
    oppositionGoals: 1,
    topScorer: 'lauren',
    winOrLoss: 'Win',
    seriesStatus: 'Arsenal unbeaten 4-0-0'
  });

  var gameFive = new Game({
    title: 'Arsenal	vs Portsmouth',
    competition: 'Premier League',
    opponent: 'Portsmouth',
    date: '13 September 2003',
    arsenalGoals: 1,
    oppositionPoints: 1,
    topScorer: 'Henry',
    winOrLoss: 'Tie',
    seriesStatus: 'Arsenal unbeaten 4-1-0'
  });

  var gameSix = new Game({
    title: 'Manchester United	vs	Arsenal',
    competition: 'Premier League',
    opponent: 'Manchester United',
    date: '21 September 2003',
    arsenalPoints: 0,
    oppositionPoints: 0,
    topScorer: 'Tie ',
    winOrLoss: 'Win',
    seriesStatus: 'Arsenal unbeaten 4-2-0'
  });

  var gameSeven = new Game({
    title: 'Arsenal	vs	Newcastle United',
    competition: 'Newcastle United',
    opponent: 'Newcastle',
    date: '26 September 2003',
    arsenalPoints: 3,
    oppositionPoints: 2,
    topScorer: 'Henry',
    winOrLoss: 'Win',
    seriesStatus: 'Arsenal unbeaten 5-2-0'
  });

  var gameEight = new Game({
    title: 'Liverpool	vs	Arsenal',
    competition: 'Premier League',
    opponent: 'Liverpool',
    date: '4 October 2003',
    arsenalPoints: 2,
    oppositionPoints: 1,
    topScorer: 'Hyppia',
    winOrLoss: 'Win',
    seriesStatus: 'Arsenal unbeaten 6-2-0'
  });

  var gameNine = new Game({
    title: 'Arsenal vs Chelsea',
    competition: 'Premier League',
    opponent: 'Chelsea',
    date: '18 October 2003',
    arsenalPoints: 6,
    oppositionPoints: 1,
    topScorer: 'Henry',
    winOrLoss: 'Win',
    seriesStatus: 'Arsenal unbeaten 7-2-0'
  });

  var gameTen = new Game({
    title: 'Charlton Athletic	vs	Arsenal',
    competition: 'Premier League',
    opponent: 'Charlton Athletic',
    date: '26 October 2003',
    arsenalPoints: 1,
    oppositionPoints: 1,
    topScorer: 'Henry',
    winOrLoss: 'Tie',
    seriesStatus: 'Arsenal unbeaten 7-3-0'
  });

  var game11 = new Game({
    title: 'Leeds United	vs	Arsenal',
    competition: 'Premier League',
    opponent: 'Leeds United',
    date: '1 November 2003',
    arsenalPoints: 1,
    oppositionPoints: 4,
    topScorer: 'Henry',
    winOrLoss: 'Win',
    seriesStatus: 'Arsenal unbeaten 8-3-0'
  });

  var game12 = new Game({
    title: 'Arsenal vs	Tottenham Hotspur',
    competition: 'Premier League',
    opponent: 'Tottenham Hotspur',
    date: '8 November 2003',
    arsenalPoints: 2,
    oppositionPoints: 1,
    topScorer: 'Pires',
    winOrLoss: 'Win',
    seriesStatus: 'Arsenal unbeaten 9-3-0'
  });

  var game13 = new Game({
   title: 'Birmingham City	vs	Arsenal',
    competition: 'Premier League',
    opponent: 'Birmingham City',
    date: '22 November 2003',
    arsenalPoints: 3,
    oppositionPoints: 0,
    topScorer: 'Edu',
    winOrLoss: 'Win',
    seriesStatus: 'Arsenal unbeaten 10-3-0'
  });

  var game14 = new Game({
    title: 'Arsenal	vs	Fulhamn',
    competition: 'Premier League',
    opponent: 'Fulham',
    date: '30 November 2003',
    arsenalPoints: 0,
    oppositionPoints: 0,
    topScorer: ' ',
    winOrLoss: 'Tie',
    seriesStatus: 'Arsenal unbeaten 10-4-0'
  });

  var game15 = new Game({
    title: 'Leicester City	vs	Arsenal',
    competition: 'Premier League',
    opponent: 'Leicester City',
    date: '6 December 2003',
    arsenalPoints: 1,
    oppositionPoints: 1,
    topScorer: 'Gilberto Silva',
    winOrLoss: 'Tie',
    seriesStatus: 'Arsenal unbeaten 10-5-0'
  });

  var game16 = new Game({
    title: 'Arsenal	vs	Blackburn Rovers',
    competition: 'Premier League',
    opponent: 'Blackburn Rovers',
    date: '14 December 2003',
    arsenalPoints: 1,
    oppositionPoints: 0,
    topScorer: 'Bergkamp',
    winOrLoss: 'Win',
    seriesStatus: 'Arsenal unbeaten 11-5-0'
  });


  var game17 = new Game({
    title: 'Bolton Wanderers	vs	Arsenal',
    competition: 'Premier League',
    opponent: 'Bolton Wanderers',
    date: '20 December 2003',
    arsenalPoints: 1,
    oppositionPoints: 1,
    topScorer: 'Pires',
    winOrLoss: 'Tie',
    seriesStatus: 'Arsenal unbeaten 11-6-0'
  });

  var game18 = new Game({
    title: 'Arsenal vs Wolverhampton Wanderers',
    competition: 'Premier League',
    opponent: 'Wolverhampton Wanderers',
    date: '26 December 2003',
    arsenalPoints: 3,
    oppositionPoints: 0,
    topScorer: 'Henry',
    winOrLoss: 'Win',
    seriesStatus: 'Arsenal unbeaten 12-6-0'
  });

  var game19 = new Game({
    title: 'Southampton	vs	Arsenal',
    competition: 'Premier League',
    opponent: 'Southampton',
    date: '29 December 2003',
    arsenalPoints: 1,
    oppositionPoints: 0,
    topScorer: 'Pires',
    winOrLoss: 'Win',
    seriesStatus: 'Arsenal unbeaten 13-6-0'
  });

  var game20 = new Game({
    title: 'Everton	vs	Arsenal',
    competition: 'Premier League',
    opponent: 'Everton',
    date: '7 January 2004',
    arsenalPoints: 1,
    oppositionPoints: 1,
    topScorer: 'Kanu',
    winOrLoss: 'Tie',
    seriesStatus: 'Arsenal unbeaten 13-7-0'
  });

  var game21 = new Game({
    title: 'Arsenal vs Middlesbrough',
    competition: 'Premier League',
    opponent: 'Middlesbrough',
    date: '10 January 2004',
    arsenalPoints: 4,
    oppositionPoints: 1,
    topScorer: 'Henry',
    winOrLoss: 'Win',
    seriesStatus: 'Arsenal unbeaten 14-7-0'
  });

  var game22 = new Game({
    title: 'Aston Villa	vs	Arsenal',
    competition: 'Premier League',
    opponent: 'Aston Villa',
    date: '18 January 2004',
    arsenalPoints: 2,
    oppositionPoints: 0,
    topScorer: 'Henry',
    winOrLoss: 'Win',
    seriesStatus: 'Arsenal unbeaten 15-7-0'
  });

  var game23 = new Game({
    title: 'Arsenal vs	Manchester City',
    competition: 'Premier League',
    opponent: 'Manchester City',
    date: '1 February 2004',
    arsenalPoints: 2,
    oppositionPoints: 1,
    topScorer: 'Henry',
    winOrLoss: 'Win',
    seriesStatus: 'Arsenal unbeaten 16-7-0'
  });

  var game24 = new Game({
    title: 'Wolverhampton Wanderers	vs	Arsenal',
    competition: 'Premier League',
    opponent: 'Wolverhampton Wanderers',
    date: '7 February 2004',
    arsenalPoints: 3,
    oppositionPoints: 1,
    topScorer: 'Henry',
    winOrLoss: 'Win',
    seriesStatus: 'Arsenal unbeaten 17-7-0'
  });

  var game25 = new Game({
    title: 'Arsenal vs Southampton',
    competition: 'Premier League',
    opponent: 'Southampton',
    date: '10 February 2004',
    arsenalPoints: 2,
    oppositionPoints: 0,
    topScorer: 'Henry',
    winOrLoss: 'Win',
    seriesStatus: 'Arsenal unbeaten 18-7-0'
  });

  var game26 = new Game({
    title: 'Chelsea vs Arsenal',
    competition: 'Premier League',
    opponent: 'Chelsea',
    date: '21 February 2004',
    arsenalPoints: 2,
    oppositionPoints: 1,
    topScorer: 'Viera',
    winOrLoss: 'Win',
    seriesStatus: 'Arsenal unbeaten 19-7-0'
  });

  var game27 = new Game({
    title: 'Arsenal vs Charlton Athletic',
    competition: 'Premier League',
    opponent: 'Charlton Athletic',
    date: '28 February 2004',
    arsenalPoints: 2,
    oppositionPoints: 1,
    topScorer: 'Henry',
    winOrLoss: 'Win',
    seriesStatus: 'Arsenal unbeaten 20-7-0'
  });

  var game28 = new Game({
    title: 'Blackburn Rovers vs Arsenal',
    competition: 'Premier League',
    opponent: 'Blackburn Rovers	',
    date: '13 March 2004',
    arsenalPoints: 2,
    oppositionPoints: 0,
    topScorer: 'Henry',
    winOrLoss: 'Win',
    seriesStatus: 'Arsenal unbeaten 21-7-0'
  });

  var game29 = new Game({
    title: 'Arsenal vs Bolton Wanderers',
    competition: 'Premier League',
    opponent: 'Bolton Wanderers',
    date: '20 March 2004',
    arsenalPoints: 2,
    oppositionPoints: 1,
    topScorer: 'Bergkamp',
    winOrLoss: 'Win',
    seriesStatus: 'Arsenal unbeaten 22-7-0'
  });

  var game30 = new Game({
    title: 'Arsenal vs Manchester United',
    competition: 'Premier League',
    opponent: 'Manchester United',
    date: '28 March 2004',
    arsenalPoints: 1,
    oppositionPoints: 1,
    topScorer: 'Henry',
    winOrLoss: 'Tie',
    seriesStatus: 'Arsenal unbeaten 22-8-0'
  });

  var game31 = new Game({
    title: 'Arsenal vs Liverpool',
    competition: 'Premier League',
    opponent: 'Liverpool',
    date: '9 April 2004',
    arsenalPoints: 4,
    oppositionPoints: 2,
    topScorer: 'Henry',
    winOrLoss: 'Win',
    seriesStatus: 'Arsenal unbeaten 23-8-0'
  });

  var game32 = new Game({
    title: 'Newcastle United vs Arsenal',
    competition: 'Premier League',
    opponent: 'Newcastle United	',
    date: '11 April 2004',
    arsenalPoints: 0,
    oppositionPoints: 0,
    topScorer: ' ',
    winOrLoss: 'Tie',
    seriesStatus: 'Arsenal unbeaten 23-9-0'
  });

  var game33 = new Game({
    title: 'Arsenal vs Leeds United',
    competition: 'Premier League',
    opponent: 'Leeds United',
    date: '16 April 2004',
    arsenalPoints: 6,
    oppositionPoints: 1,
    topScorer: 'Henry',
    winOrLoss: 'Win',
    seriesStatus: 'Arsenal unbeaten 24-9-0'
  });

  var game34 = new Game({
    title: 'Tottenham Hotspur	vs Arsenal',
    competition: 'Premier League',
    opponent: 'Tottenham Hotspur',
    date: '25 April 2004',
    arsenalPoints: 2,
    oppositionPoints: 2,
    topScorer: 'Vieira',
    winOrLoss: 'Tie',
    seriesStatus: 'Arsenal unbeaten 24-10-0'
  });

  var game35 = new Game({
    title: 'Arsenal vs 	Birmingham City',
    competition: 'Premier League',
    opponent: 'Birmingham City',
    date: '1 May 2004',
    arsenalPoints: 0,
    oppositionPoints: 0,
    topScorer: ' ',
    winOrLoss: 'Tie',
    seriesStatus: 'Arsenal unbeaten 24-11-0'
  });

  var game36 = new Game({
    title: 'Portsmouth	vs	Arsenal',
    competition: 'Premier League',
    opponent: 'Portsmouth',
    date: '4 May 2004',
    arsenalPoints: 1,
    oppositionPoints: 1,
    topScorer: 'Reyes',
    winOrLoss: 'Tie',
    seriesStatus: 'Arsenal unbeaten 24-12-0'
  });

  var game37 = new Game({
    title: 'Fulham	vs	Arsenal',
    competition: 'Premier League',
    opponent: 'Fulham',
    date: '9 May 2004',
    arsenalPoints: 1,
    oppositionPoints: 0,
    topScorer: 'Reyes',
    winOrLoss: 'Win',
    seriesStatus: 'Arsenal unbeaten 25-12-0'
  });

  var game38 = new Game({
    title: 'Arsenal vs 	Leicester City',
    competition: 'Premier League',
    opponent: 'Leicester City',
    date: '15 May 2004',
    arsenalPoints: 6,
    oppositionPoints: 1,
    topScorer: 'Henry',
    winOrLoss: 'Win',
    seriesStatus: 'Arsenal unbeaten 26-12-0'
  });



  gameOne.save().then((doc) => {
}).then((doc) => {
  gameTwo.save();
}).then((doc) => {
  gameThree.save();
}).then((doc) => {
  gameFour.save();
}).then((doc) => {
  gameFive.save();
}).then((doc) => {
  gameSix.save();
}).then((doc) => {
  gameSeven.save()
}).then((doc) => {
  gameEight.save();
}).then((doc) => {
  gameNine.save();
}).then((doc) => {
  gameTen.save();
}).then((doc) => {
  game11.save();
}).then((doc) => {
  game12.save();
}).then((doc) => {
  game13.save();
}).then((doc) => {
  game14.save();
}).then((doc) => {
  game15.save()
}).then((doc) => {
  game16.save();
}).then((doc) => {
  game17.save();
}).then((doc) => {
  game18.save();
}).then((doc) => {
  game19.save();
}).then((doc) => {
  game20.save();
}).then((doc) => {
  game21.save();
}).then((doc) => {
  game22.save();
}).then((doc) => {
  game23.save();
}).then((doc) => {
  game24.save();
}).then((doc) => {
  game25.save();
}).then((doc) => {
  game26.save();
}).then((doc) => {
  game27.save();
}).then((doc) => {
  game28.save();
}).then((doc) => {
  game29.save();
}).then((doc) => {
  game30.save();
}).then((doc) => {
  game31.save();
}).then((doc) => {
  game32.save();
}).then((doc) => {
  game33.save();
}).then((doc) => {
  game34.save();
}).then((doc) => {
  game35.save();
}).then((doc) => {
  game36.save();
}).then((doc) => {
  game37.save();
}).then((doc) => {
  game38.save();
});

}
