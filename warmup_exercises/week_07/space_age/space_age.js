// This is our constructor (think classes in Ruby)
var SpaceAge = function ( seconds ) {
  this.seconds = seconds; // We prefix these things with "this" so that we can access them through the instance variable at the bottom
  this.yearsOnEarth = seconds / 31557600; // Get how many years on Earth
  this.earthToOtherPlanets = { // Store all of the ratios from Earth to other planets
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
    var yearsOnEarth = this.yearsOnEarth; // Retrieve the yearsOnEarth variable
    var ratio = this.earthToOtherPlanets[ planetName ]; // Access an object's value by passing in a string to the square brackets
    var yearsOnOtherPlanet = yearsOnEarth / ratio;
    return yearsOnOtherPlanet.toFixed( 2 ); // Make it decimal points
  }
}

var spaceAge = new SpaceAge( 1000000000 ); // Create an instance of our SpaceAge constructor (class)
var saturnAge = spaceAge.yearOnPlanet( "saturn" ); // We can call yearOnPlanet through the instance defined above because we defined the yearOnPlanet on this!
console.log( "You are " + saturnAge + " years old on Saturn." );