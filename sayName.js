//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

let Person = function(name,age){
  this.name = name;
  this.age = age;
}
  //code here


//Now create three instances of Person with data you make up
  new Person("Jake",20);
  new Person("Luke",30);
  new Person("Dan",20);
  //code here


//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.
Person.prototype.sayName = function(){
      alert(this.name);
  }
  //code here