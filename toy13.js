var soccerTeam = {

  name: "Da Bears",
  num_fans: 69,
  location: 'South Side',
  wins: 16,
  losses: 0,
  players: ['Jeb', 'Donald', 'Marco', 'Bernie', 'Hillary', 'Rand']

};

soccerTeam.showRoster = function () {

  soccerTeam.players.forEach(function (value) {
    console.log(value);
  })

};

soccerTeam.showRecord = function () {
  console.log(soccerTeam.wins + '/' + soccerTeam.losses);

};


/*soccerTeam.showRoster();
soccerTeam.showRecord();*/


//alternative 2

function SoccerTeam(name, fans, location, wins, losses, players) {
  this.name = name;
  this.fans = fans;
  this.location = location;
  this.wins = wins;
  this.losses = losses;
  this.players = players;

}



var name = "Da Bears";
var numfans = 69;
var where = 'South Side';
var wins = 16;
var losses = 0;
var players = ['Jeb', 'Donald', 'Marco', 'Bernie', 'Hillary', 'Rand'];

SoccerTeam.prototype.showRoster = function () {

  this.players.forEach(function (value) {
    console.log(value);
  })

};

SoccerTeam.prototype.showRecord = function () {
  console.log(this.wins + '/' + this.losses);

};

var babes = new SoccerTeam(name, numfans, where, wins, losses, players);

babes.showRoster();
babes.showRecord();