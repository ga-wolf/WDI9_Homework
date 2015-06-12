// Given an age in seconds, calculate how old someone would be on:

// Earth: orbital period 365.25 Earth days, or 31557600 seconds
// Mercury: orbital period 0.2408467 Earth years
// Venus: orbital period 0.61519726 Earth years
// Mars: orbital period 1.8808158 Earth years
// Jupiter: orbital period 11.862615 Earth years
// Saturn: orbital period 29.447498 Earth years
// Uranus: orbital period 84.016846 Earth years
// Neptune: orbital period 164.79132 Earth years
// So if you were told someone were 1,000,000,000 seconds old, you should be able to say that they're 31 Earth-years old.

// There are 31557600 seconds in an Earth year!

var earthYearInSeconds = 31557600;
var planetKeys = {
  'mercury': 0.2408467,
  'venus': 0.61519726,
  'mars': 1.8808158,
  'jupiter': 11.862615,
  'saturn': 29.447498,
  'uranus': 84.016846,
  'neptune': 164.79132
};

var ageCalculator = function(age, planet) {
  var secondsAge = age * earthYearInSeconds;
  var planetAge = secondsAge * planetKeys[planet.toLowerCase()];
  var result = planetAge / earthYearInSeconds;

  console.log('On the planet ' + planet + ', you would be ' + result + ' years old.');
};

var allAgesCalc = function(age) {
  planetAge(age, 'mercury');
  planetAge(age, 'venus');
  planetAge(age, 'mars');
  planetAge(age, 'jupiter');
  planetAge(age, 'saturn');
  planetAge(age, 'uranus');
  planetAge(age, 'neptune');
};

var planetAge = function(age, planet) {
  var planetAge = age / planetKeys[planet.toLowerCase()];
  planetAge = planetAge.toFixed(2)
  var properCasePlanet = planet.split('');
  properCasePlanet[0] = properCasePlanet[0].toUpperCase();
  properCasePlanet = properCasePlanet.join('');

  console.log('On the planet ' + properCasePlanet + ', you would be ' + planetAge + ' years old!');
};


//
//Jacks Solution:
//

var SpaceAge = function ( seconds ) {
  this.seconds = seconds;

  this.yearsOnEarth = seconds / 31557600;

  this.earthToOtherPlanets = {
   mercury : 0.2408467,
   venus   : 0.61519726,
   earth   : 1,
   mars    : 1.8808158,
   jupiter : 11.862615,
   saturn  : 29.447498,
   uranus  : 84.016846,
   neptune : 164.79132
 };

 this.yearOnPlanet = function ( planetName ) {
  var yearsOnPlanet = this.yearsOnEarth;
  var ratio = this.earthToOtherPlanets[ planetName ];
  var yearsOnOtherPlanet = yearsOnPlanet / ratio;
  
  return yearsOnOtherPlanet.toFixed( 2 );
 };

};

var spaceAge = new SpaceAge( 1000000000 );
spaceAge.yearsOnPlanet('saturn')










