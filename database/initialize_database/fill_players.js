const Player = require('./../models/player.js').Player;
const mongoose = require('./../mongoose.js').mongoose;

module.exports.addPlayers = () => {
  var Lehmann = new Player({
    fullName: 'Jens Gerhard Lehmann',
    popularName: 'Lehmann',
    nationality: 'German',
    age: 33,
    dateOfBirth: '10/11/1969',
    weight: 87,
    height: 190,
    shirtNumber: 1,
    position: 'Goalkeeper',
    rating: 95,
    description: `Jens Gerhard Lehmann (pronounced [ˈjɛns ˈleːman]; born 10 November 1969)
     is a retired German footballer who played as a goalkeeper. He was voted UEFA Club Goalkeeper of the Year for the 1996–97 and 2005–06 seasons, and was selected for three World Cup squads.`,
    imageURL: 'https://tmssl.akamaized.net//images/foto/normal/jens-lehmann-1465310144-5540.jpg'
  });

  var Henry = new Player({
    fullName: 'Thierry Daniel Henry',
    popularName: 'henry',
    nationality: 'French',
    age: 25,
    dateOfBirth: '08/17/1977',
    weight: 83,
    height: 188,
    shirtNumber: 14,
    position: 'Striker',
    rating: 98,
    description: `Thierry Henry, in full Thierry Daniel Henry, (born August 17, 1977, Châtillon, France), French football (soccer) player and manager who scored more international goals than any other player in France’s history and who is considered one of the most prolific goal scorers of his time.

    Henry, of French West Indian ancestry, spent his childhood in low-income housing in Les Ulis, south of Paris. He joined FC Versailles in 1992, and, after attracting other club scouts, he was signed by AS Monaco in 1994. Although Henry played as a striker until he was 17, he switched to left wing for Monaco. Monaco won the 1997 French club championship, and Henry’s game noticeably improved. Midway through the 1998–99 season, a contract mix-up almost sent him to Real Madrid; instead, he was transferred to Juventus in Turin, Italy, for £9 million. Seven months later he was on the move again in a £10.5-million deal to join English powerhouse Arsenal.
    
    Arsenal manager Arsène Wenger shifted Henry to striker, giving him more responsibility at the cutting edge of the attack, and the Frenchman soon revealed his true ability. With a deceivingly casual approach, Henry glided past opposing players, initiated and finished moves, and scored goals either with a light touch from short range or fiercely from long distances. In eight seasons with Arsenal he scored a club-record 174 goals, and the team won two league titles (2002, 2004) and two Football Association Cup trophies (2002, 2003). In mid-2004 Henry clinched the 2003–04 Golden Shoe as Europe’s leading association football goal scorer 
    (with 30) and helped Arsenal to another Premier League championship. Henry was honoured as European Footballer of the Year for 2002 and 2003 and finished runner-up as Fédération
     Internationale de Football Association (FIFA) World Player of the Year in 2003 and 2004. In 2006 Arsenal advanced to the Champions League final. Although they lost to FC Barcelona, it was the best Champions League finish in the history of the club. `,
     imageURL: 'https://www.footiecentral.com/wp-content/uploads/2015/05/henry.jpg'
  });

  var Toure = new Player({
    fullName: 'Kolo Toure',
    popularName: 'kolo',
    nationality: 'Ivory Coast',
    age: 22,
    dateOfBirth: '03/19/1981',
    weight: 82,
    height: 181,
    shirtNumber: 28,
    position: 'Centre Back',
    rating: 91,
    description: `Kolo Abib Touré (born 19 March 1981) is an Ivorian football coach and former footballer. He played as a defender for Arsenal, Manchester City, Liverpool, Celtic and the Ivory Coast national team. He is currently a first team coach at Leicester City as well as a member of the coaching staff for the Ivory Coast national team.

    Beginning his career at ASEC Mimosas, Touré moved to Arsenal in 2002, where he made 326 appearances for the club and was a member of the 03–04 'invincibles' side. In 2009, he moved to Manchester City, where he was joined a year later by his younger brother, Yaya Touré, helping City earn its first league title in 44 years. In 2013, Touré was transferred to Liverpool. He is one of the eight players who have won the Premier League with two clubs, having won it with Manchester City and Arsenal. He also won the Scottish Premiership and Scottish League Cup with Celtic. He remains to date the African player with the most Premier League appearances (353 in total). [4]
    
    Touré is the second-most capped player for the Ivory Coast, with 120 appearances from 2000 to 2015. He represented the team at the 2006, 2010 and 2014 FIFA World Cup tournaments. Touré also represented the Ivory Coast at seven Africa Cup of Nations tournaments between 2002 and 2015, helping them finish runner-up in 2006 and 2012, while winning in 2015.`,
    imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Kolo_Toure_8932.JPG/200px-Kolo_Toure_8932.JPG'
  });

  var Campbell = new Player({
    fullName: 'Sulzeer Jeremiah Campbell',
    popularName: 'Campbell',
    nationality: 'English',
    age: 28,
    dateOfBirth: '19/18/1974',
    weight: 92,
    height: 188,
    shirtNumber: 23,
    position: 'Centre Back',
    rating: 89,
    description: `Sulzeer Jeremiah Campbell (born 18 September 1974) is an English professional football manager and former player who is currently the manager of League One club Southend United. He previously managed Macclesfield Town from November 2018 to August 2019. A centre back, he had a 20-year career playing in the Premier League and an 11-year international career with the England national team.

    Born in east London to Jamaican parents, Campbell began his career with Tottenham Hotspur in December 1992. He spent nine years at Spurs, scoring 10 goals in 255 appearances, and captaining the team to victory in the 1999 Football League Cup Final against Leicester City. In 2001, he joined Tottenham's North London rivals Arsenal on a free transfer, and as a result has remained a deeply unpopular figure amongst Spurs supporters. In his five years and 195 appearances at Arsenal, he won two Premier League winners medals and two FA Cup winners medals, encompassing the 2001–02 league and FA Cup double, and being part of the team that became known as The Invincibles for their undefeated 2003–04 Premier League campaign. He scored Arsenal's only goal in their 2–1 defeat to Barcelona in the 2006 UEFA Champions League Final. In August 2006, he joined Portsmouth on a free transfer. His three years with the club included captaining them to victory in the 2008 FA Cup Final. At the end of the 2008–09 season, he made the surprise move of dropping down three levels of the English football pyramid to join League Two side Notts County on a free transfer. He left the club by mutual consent in September 2009, having played just one match for the club. The next year, he made a brief return to Arsenal before ending his career with Newcastle United.
    
    Having already won caps for the England under-21s and England B team, Campbell gained his first of 73 full caps for England aged 21. In May 1998, Campbell became what was then England's second-youngest captain, after Bobby Moore, aged 23 years 248 days. In 2006, he became the only player to have represented England in six consecutive major tournaments, playing in the 1996, 2000 and 2004 UEFA European Championships; and the 1998, 2002 and 2006 FIFA World Cups. He was named in the Teams of the Tournament for the 2002 World Cup and at Euro 2004. Other honours in the game include being in the PFA Team of the Year three times, in 1999, 2003 and 2004.`,
    imageURL: 'https://d3nfwcxd527z59.cloudfront.net/content/uploads/2018/03/15083019/Sol-Campbell-Arsenal-captain.jpg'
  });

  var Pires = new Player({
    fullName: 'Robert Emmanuel Pirès',
    popularName: 'Pires',
    nationality: 'French',
    age: 29,
    dateOfBirth: '10/29/1973',
    weight: 75,
    height: 185,
    shirtNumber: 7,
    position: 'Left Wing',
    rating: 91,
    description: `Robert Emmanuel Pires (born 29 October 1973) is a French football coach and former professional player.[4]

    Pires played for French clubs Metz and Marseille prior to his time with Arsenal, where he won two FA Cups and two Premier League titles including the club's unbeaten season of 2003–04. A former France international, Pires earned 79 caps between 1996 and 2004 for his country, including winning both the 1998 FIFA World Cup and UEFA Euro 2000. He has been included in the PFA Team of the Year for the 2001–02, 2002–03 and 2003–04 seasons, was the Player of the Tournament for the 2001 FIFA Confederations Cup, FWA Player of the Year for the 2001–02 season, Ligue 1 Young Player of the Year for the 1995–96 season, and was included in the FIFA 100 by Pelé. He was also voted by Arsenal fans as the 6th greatest player in the club's history.[5]
    
    Pires played the majority of his career as a left winger, but could also play all across the midfield or in a position to support the forward line. Pires is currently coaching at Arsenal.[4]`,
    imageURL: 'https://d3nfwcxd527z59.cloudfront.net/content/uploads/2017/09/11085439/Robert-Pires.jpg'
  });

  var Cole = new Player({
    fullName: 'Ashley Donovan Cole',
    popularName: 'Ashley Cole',
    nationality: 'English',
    age: 22,
    dateOfBirth: '12/20/1980',
    weight: 66,
    height: 176,
    shirtNumber: 3,
    position: 'Left Back',
    rating: 87,
    description: `Ashley Cole (born 20 December 1980) is an English retired footballer who played as a left back, most notably for Premier League club Chelsea, with whom he presently serves in the coaching staff for the U15 team. Cole is considered by many critics and fellow professional players as one of the best defenders of his generation,[3][4][5][6] and by some, for the better part of his career, as the best left back in the world.[7][8] Born in Stepney, London, Cole began his youth career at Arsenal and made his full debut for the club in November 1999, going on to make 228 appearances and scoring nine goals for the North London club. With Arsenal he won two Premier League titles, three FA Cups, and was an integral member of "The Invincibles" team of the 2003–04 season, who went the entire league season undefeated. Cole also made an appearance in Arsenal's first UEFA Champions League final in 2006; the club lost 2–1 to Barcelona.

    In August 2006, after a protracted transfer saga, Cole completed a move to rival club Chelsea, with whom he won further honours, including the Premier League in the 2009–10 season, four FA Cups, one Football League Cup and one UEFA Champions League. He was released by Chelsea at the end of the 2013–14 season.[9][10] With seven winners' medals, Cole has won the FA Cup more times than any other player in history,[11] and is one of two players to have won the Double with two clubs, along with Nicolas Anelka.[12]
    
    Cole was an England international from 2001 to 2014, playing at the 2002, 2006 and 2010 World Cups, as well as Euro 2004 and Euro 2012. He was voted England Player of the Year in 2010. When he retired from international football in 2014, he had won 107 caps, making him England's most capped full back.[13]`,
    imageURL: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/ACole.JPG'
  });

  var Lauren = new Player({
    fullName: 'Laureano Bisan-Etame Mayer',
    popularName: 'Lauren',
    nationality: 'Cameroon',
    age: 28,
    dateOfBirth: '0`/19/1977',
    weight: 85,
    height: 180,
    shirtNumber: 12,
    position: 'Right Back',
    rating: 87,
    description:` Laureano Bisan Etame-Mayer (born 19 January 1977), commonly known as Lauren, is a retired Cameroonian footballer of Equatoguinean origin, who formerly played as a right back for the Cameroonian national team.[4] As an Arsenal player he won several trophies and is known as one of the 'Invincibles'; a title given to the Arsenal squad in 2004 after they went undefeated in the (2003–04) season and won the Premier League title. He also won an Olympic Gold Medal at the 2000 Sydney Olympics and two African Cup of Nations in 2000 and 2002 with Cameroon. He also holds Spanish citizenship due to being raised in Spain.`,
    imageURL: 'https://1.bp.blogspot.com/-eEnJMymifpc/XQyK4ijlFGI/AAAAAAAABuw/nLD--GmQx2sEFPpRdvAieFSO5zWtKCOLwCLcBGAs/s640/La-1.jpg'
  });

  var Silva = new Player({
    fullName: 'Gilberto Aparecido da Silva',
    popularName: 'Gilberto Silva',
    nationality: 'Brazil',
    age: 26,
    dateOfBirth: '08/07/1976',
    weight: 68,
    height: 184,
    shirtNumber: 18,
    position: 'Defensive Midfielder',
    rating: 90,
    description: `Gilberto Aparecido da Silva (Brazilian Portuguese: [ʒiwˈbɛʁtu ˈsiwvɐ] (About this soundlisten); born 7 October 1976) is a Brazilian former professional footballer.

    Born and raised in poverty in the Brazilian municipality of Lagoa da Prata, Gilberto joined the youth academy at local club América Mineiro, where he made his senior debut as a centre-back in 1998.[3] After starring the following season, where he helped gain the club promotion into the Campeonato Brasileiro Série A, he joined city rivals Atlético Mineiro. During his time at Atlético, Gilberto transitioned into a defensive midfielder under head coach Carlos Alberto Parreira, and flourished in his new role, gaining a call-up to the Brazilian national team for the 2002 FIFA World Cup, where he featured prominently as his country won the tournament.[4]
    
    As a result of his World Cup performances, Gilberto garnered a move to the Premier League to sign for Arsenal that summer for a fee of £4.5 million.[5] During his six years at Arsenal, Gilberto gained a reputation as one of the best defensive midfielders in the world, and starred in a midfield duo alongside Patrick Vieira.[6] He would feature as a member of the Invincibles, where he captured his first top-flight league title as his team went undefeated the whole season, as well as winning two FA Cups. Gilberto also holds distinct records at Arsenal, recording their first goal at the Emirates Stadium,[7] as well as their fastest ever goal, scoring in 21 seconds from kickoff against PSV Eindhoven in the 2002–03 UEFA Champions League.[8] After departing Arsenal, Gilberto relocated to Greece, playing for Panathinaikos, where he won a domestic double. He then returned to Brazil in 2011, signing for Grêmio, where he remained for two years, before returning to Atlético to win the 2013 Copa Libertadores prior to retiring.
    
    Gilberto featured at senior level for much of his international career, representing Brazil over a period of 9 years. He enjoyed a period of sustained success with his country, as he featured prominently in their victorious campaign at the 2002 FIFA World Cup, as well as being a core component as the team also won the 2005 FIFA Confederations Cup, while also featuring as captain in their Copa América win in 2007. After retaining the Confederations Cup in 2009, Gilberto expressed his desire to prolong his club career, which coincided with limited playing time for Brazil, prompting his retirement from international competition prior to the 2010 FIFA World Cup, after amassing 93 appearances for the side.`,
    imageURL: 'https://tmssl.akamaized.net//images/foto/normal/gilberto-silva-arsenal-1584637158-34318.jpg'
  });

  var Vieira = new Player({
    fullName: 'Patrick Vieira',
    popularName: 'Vieira',
    nationality: 'French',
    age: 27,
    dateOfBirth: '06/23/1976',
    weight: 73,
    height: 193,
    shirtNumber: 6,
    position: 'Center Midfielder',
    rating: 94,
    description: `Patrick Vieira (born 23 June 1976) is a French professional football head coach and former player. He is the manager of Nice.

    Considered one of the best players of his generation, Vieira began his career at Cannes in 1994, where several standout performances in his debut season garnered him a move to Serie A club Milan a year later. His single season in Italy was marred due to limited playing time, and he featured mainly for the reserve team. This allowed him to relocate to England, in order to join countryman Arsène Wenger at Arsenal, for a fee of £3.5 million in 1996.
    
    During his nine-year stint in the Premier League, Vieira established himself as a dominating box-to-box midfielder, noted for his aggressive and highly competitive style of play, an attitude that also helped him excel as captain of the club from 2002 until his departure in 2005. He helped Arsenal achieve a sustained period of success during his time at the club, where he lifted three FA Cups and three league titles, including one unbeaten. He then returned to Italy, playing for Juventus, but quickly departed after the club sustained relegation for their part in a match-fixing scandal. He then signed for Inter Milan, where he consecutively won four league titles, before featuring for Manchester City, where he won another FA Cup before retiring in 2011.[4]
    
    Vieira featured at senior level for much of his international career, representing France over a period of 12 years, where he also spent some part as captain. He played in the final in his nation's victorious campaign at the 1998 FIFA World Cup, and featured heavily as the team also won Euro 2000. Despite also playing a key role in the side that finished runners-up in the 2006 World Cup, Vieira was used sparingly by France in the latter stages of his career, and he retired from international competition in 2010, after amassing 107 appearances for the side.
    
    Following retirement, Vieira transitioned into coaching, where he took charge of the academy at Manchester City in 2013. He would depart two years later, after signing for sister club New York City. His arrival in Major League Soccer (MLS) saw the team adopt a free-flowing, attacking, press-based system,[5] which gained him many plaudits, and garnered him a move back to his homeland to manage Ligue 1 club Nice in 2018, marking his first managerial role in Europe.`,
    imageURL: 'https://i1.wp.com/thesefootballtimes.co/wp-content/uploads/2016/12/vieira-arsenal.jpg?fit=1600%2C1019&ssl=1'
  });

  var Freddie = new Player({
    fullName: 'Karl Fredrik Ljungberg',
    popularName: 'Ljunberg',
    nationality: 'Swedush',
    age: 26,
    dateOfBirth: '04/16/1977',
    weight: 85,
    height: 175,
    shirtNumber: 1,
    position: 'Right Wing',
    rating: 84,
    description: `Karl Fredrik Ljungberg (Swedish pronunciation: [ˈfrěːdrɪk ˈjɵ̂ŋːbærj]; born 16 April 1977) is a Swedish former professional footballer who played as a winger and is a football manager. He is currently the assistant coach of Arsenal Football Club after serving as interim head coach in 2019.[4][5]

    He began his career at Halmstad and went on to spend most of his career at Arsenal, where he won honours including two Premier League titles and three FA Cups, scoring in two finals including the victory in 2002. After leaving Arsenal in 2007, he had short spells at a number of clubs in England, Scotland, the United States, Japan and India. An international for a full decade, Ljungberg earned 75 caps and represented Sweden national team at UEFA Euro 2000, 2004 and 2008, as well as at the 2002 and 2006 FIFA World Cups. He was captain of Sweden from 2006 until he announced his international retirement after UEFA Euro 2008.[6]
    
    Ljungberg was a model for Calvin Klein underwear[7] until 2007.[8] He previously represented brands such as Nike, Procter & Gamble, L'Oréal, Puma, Beats, ESPN and Pepsi.`,
    imageURL: 'https://i.pinimg.com/345x/a5/7b/0c/a57b0c2f102708f03a7dc69c77a2a55e.jpg?b=t'
  });


    var Bergkamp = new Player({
      fullName: 'Dennis Bergkamp',
      popularName: 'Bergkamp',
      nationality: 'France',
      age: 34,
      dateOfBirth: '05/10/1969',
      weight: 80,
      height: 188,
      shirtNumber: 10,
      position: 'playmaker',
      rating: 84,
      description: `Dennis Nicolaas Maria Bergkamp (Dutch pronunciation: [ˈdɛnəs ˈbɛrxkɑmp] (About this soundlisten); born 10 May 1969) is a Dutch former professional footballer, who until 21 December 2017 was the assistant manager at Ajax. Originally a wide midfielder, Bergkamp was moved to main striker and then to second striker, where he remained throughout his playing career. Nicknamed the "Non-Flying Dutchman" by Arsenal supporters due to his fear of flying, Bergkamp is widely regarded as one of the greatest players of his generation.

      The son of an electrician, Bergkamp was born in Amsterdam and played as an amateur in the lower leagues. He was spotted by Ajax at age 11 and made his professional debut in 1986. Prolific form led to an international call-up with the Netherlands a year later, attracting the attention of several European clubs. Bergkamp signed for Italian club Inter Milan in 1993, where he had two underwhelming seasons. After joining Arsenal in 1995, he rejuvenated his career, helping the club to win three Premier League titles, four FA Cup trophies, and reach the 2006 UEFA Champions League Final, which marked his last appearance as a player.
      
      With the Netherlands national team, Bergkamp was selected for Euro 1992, where he impressed, scoring three goals in the tournament.[4] At the 1998 FIFA World Cup, he scored a memorable winning goal in the final minute of the quarterfinal against Argentina which has been regarded as one of the greatest FIFA World Cup goals.[5] Bergkamp surpassed Faas Wilkes's record to become the country's top goalscorer of all time in 1998, a record later eclipsed by Patrick Kluivert, Robin van Persie and Klaas-Jan Huntelaar.
      
      Bergkamp has been described by Jan Mulder as having "the finest technique" of any Dutch international[6] and a "dream for a striker" by teammate Thierry Henry.[7] Bergkamp finished third twice in the FIFA World Player of the Year award and was selected by Pelé as one of the FIFA 100 greatest living players. In 2007, he was inducted into the English Football Hall of Fame, the first and so far only Dutch player ever to receive such honour. In 2017, Bergkamp's famous goal against Newcastle United was voted as the best Premier League goal of all-time in the league's 25-year history.[8]`,
      imageURL: 'https://d2x51gyc4ptf2q.cloudfront.net/content/uploads/2015/10/GettyImages-51205958.jpg'
     });

    
//     stegan.save().then((doc) => {
//             console.log(JSON.stringify(doc, undefined, 2));
//           }, (err) => {
//             console.log(err);
//           });

  Lehmann.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
  }, (err) => {
    console.log(err);
  });

  Henry.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
  }, (err) => {
    console.log(err);
  });

  Toure.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
  }, (err) => {
    console.log(err);
  });

  Campbell.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
  }, (err) => {
    console.log(err);
  });

  Pires.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
  }, (err) => {
    console.log(err);
  });

  Cole.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
  }, (err) => {
    console.log(err);
  });

  Lauren.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
  }, (err) => {
    console.log(err);
  });

  Silva.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
  }, (err) => {
    console.log(err);
  });

  Vieira.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
  }, (err) => {
    console.log(err);
  });

  Freddie.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
  }, (err) => {
    console.log(err);
  });

  Bergkamp.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
  }, (err) => {
    console.log(err);
  });

  // Parlour.save().then((doc) => {
  //   console.log(JSON.stringify(doc, undefined, 2));
  // }, (err) => {
  //   console.log(err);
  // });

}