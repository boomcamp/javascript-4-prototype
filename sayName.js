//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

function Person(name,age){
  this.name = name;
  this.age =  age;
}
  //code here


//Now create three instances of Person with data you make up
const person1 = new Person('Gino',12);
const person2 = new Person('Joven',13);
const person3 = new Person('Vanessa',14);

  //code here


//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.
Person.prototype.sayName = function() {
  alert(this.name);
 };
  //code here
