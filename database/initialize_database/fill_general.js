var mongoose = require('./../mongoose.js').mongoose;
var General = require('./../models/general.js').General;

module.exports.addGeneral = () => {
  var general = new General({
    teamName: 'Arsenal FC',
    teamImageURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/1200px-Arsenal_FC.svg.png',
    generalManagerName: 'Arsene Wenger',
    ownerName: 'Peter Hill-Wood',
    coachName: 'Arsene Wenger',
    numberOfPlayers: 28,
    teamHistory:` London-based Arsenal Football Club is historically one of the most successful clubs in English football, having won 13 First Division and Premier League titles and 12 FA Cups.

    The club was founded in 1886 by members of the Woolwich Armoury and became the first club from the south of England to join the Football League in 1893.
    
    Much to the chagrin of Tottenham fans, Arsenal moved north across the river in 1913.
    
    The Gunners enjoyed a great period during the 1930s under Herbert Chapman and the club won five League Championship titles and two FA Cups.
    
    In the 1970-71 season, Arsenal won the League and FA Cup double and further successes in the 1990s and early years of the 21st century.
    
    In recent years, under manager Arsene Wenger, the club has achieved world class status and is now one of the best supported clubs in the world and one of most valuable football club in the world.
    
    Arsenal's rise to prominence was the result of highly astute management in tune with an attacking, attractive style of play.`
  });

   general.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
  }, (err) => {
    console.log(err);
  });
}
