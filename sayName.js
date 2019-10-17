//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  //code here

var Person = function(name, age){
  this.name = name;
  this.age = age;
  this.sayName = sayName;
}
//Now create three instances of Person with data you make up

  //code here

var p1  = new Person('Noe', 21)
var p2  = new Person('Philip', 22)
var p3  = new Person('Gabriel', 23)
//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  //code here
  function sayName()
  {
    alert(this.name)
  }
