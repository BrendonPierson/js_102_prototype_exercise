/*
  .....  YOUR MISSION  .....
  1. Author functions that define the Make
      and Model of a Car and the Car itself.
  2. Create three instances of your Car that
      each have a different color.
  3. Each Car you create should inherit the
      make and model name.
*/


/*
  Create a function, Make, that has a property
   of makeName and give it the value of your
   vehicle's make.
 */
Car.prototype.makeName = "Ford";


/*
Create a function, Model, to hold the 
corresponding property and value
*/
Car.prototype.Model = "Model T";


// What is the prototype of a Model?
  //Model T

// Define a Car
function Car(color) {
  this.color = color;
}

// What is the prototype of a Car?
  //Ford, Model T, color

// Create the first car
var firstCar = new Car("red");

// Create the second car
var secondCar = new Car("green");

// Create the third car
var thirdCar = new Car("blue");



console.log(firstCar, secondCar, thirdCar);



