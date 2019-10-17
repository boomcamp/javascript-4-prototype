//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
}

//Now create three instances of Person with data you make up

var person1 = new Person("Jeromel", "21");
var person2 = new Person("Philip", "22");
var person3 = new Person("Earl", "21");

//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

Person.prototype.sayName = function() {
	alert(this.name);
};
