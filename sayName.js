//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  //code here
function Person(name, age){
  this.name = name;
  this.age  = age;
}

//Now create three instances of Person with data you make up

  //code here
let person1 = new Person(['Micko',26]);
let person2 = new Person(['John',22]);
let person3 = new Person(['Jude',22]);

//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  //code here
Person.prototype.sayName = function(){
  alert(this.name);
}