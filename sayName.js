//Note: use var for declaring variables

//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  //code here
var Person = function(name, age){
  this.name = name;
  this.age = age;
}

//Now create three instances of Person with data you make up

  //code here
p1 = new Person("franco", 21);
p2 = new Person("Jake", 20);
p3 = new Person("Jeff", 21);

//Now add a sayName method on your Person class that will log the name of whatever Person instance called it in the console.

  //code here
Person.prototype.sayName = function(){
  alert(this.name);
}