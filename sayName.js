//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

var Person = function(name, age){
  this.name = name;
  this.age = age;
  this.sayName = function (){
    alert(this.name);
  }
}
 
//Now create three instances of Person with data you make up

var Aodhan =new Person('Aodhan',30);
var Greg =new Person('Greg',35);
var Oscar =new Person('Oscar', 33);


//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

Aodhan.sayName();
