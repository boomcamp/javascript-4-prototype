//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

var Person = function (name, age){
  this.name = name;
  this.age = age;
}


//Now create three instances of Person with data you make up

var person1 = new Person ('Lyza Mirabete', 21);
var person2 = new Person ('Vince Ludovice', 19);
var person3 = new Person ('Dansyle Marbella', 21);


//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.
//console.log(this)//
Person.prototype.sayName = function(){
  alert(this.name)
}


