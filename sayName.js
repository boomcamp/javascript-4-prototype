//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  //code here
class Person{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  sayName(){
    alert(this.name);
  }
}

//Now create three instances of Person with data you make up

  //code here
var john = new Person('John', 54);

//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  //code here
