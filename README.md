ARSENAL-FC-API

 RESTful API that returns rich data about Arsenal Football 2003-04 Invinvibles premier league team such as game results, fixtures, player details, and more information (Information in returned in JSON format).

 ###Get all players In order to get information about all players make a call too:

base_url/players

###Get player by name In order to get information about a certain player make a call too:

base_url/players/playerShortName //playerShortName in lowercase characters

List of player short names:

Lehmann
Henry
Begrkamp
Vieria
Lauren
Cole
Campbell
Toure
Silva
Pieres

###Get all results In order to get all of FC Barcelona results this season, no matter what the competition, make a call to:

base_url/results

###Get results by competition type In order to get all of FC Barcelona results this season, by competition type, make a call to:

base_url/results/competitionName //competitionName in all lowercase characters

Compitition type:
- 2003/04 Invincibles premier league campaign

##General Information Arsenal Fc API also returns general infromation about the football club such as club name, manager, image, history, number of players etc.

###Get general information about Arsenal Fc In order to get general information about the football club make a call to:

base_url/general

#Author Nandu-Pokhrel