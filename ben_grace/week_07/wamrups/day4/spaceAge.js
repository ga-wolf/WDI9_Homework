var SpaceAge = function (seconds){

  this.seconds = seconds

  this.yearsOnEarth = seconds / 31557600

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


 this.yearOnPlanet = function( planetName ) {

  var yearsOnPlanet = this.yearsOnEarth;

  var ratio = this.earthToOtherPlanets[ planetName ];

  var yearsOnOtherPlanet = yearsOnPlanet / ratio;

  return yearsOnOtherPlanet.toFixed( 2 )


 }


}


var spaceAge = new SpaceAge( 1000000000 );
console.log("Space age seconds:" + spaceAge.seconds);

var saturnAge = spaceAge.yearOnPlanet( "saturn");

console.log("Saturn age: " + saturnAge)

