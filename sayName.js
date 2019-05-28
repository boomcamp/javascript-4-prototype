//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  function Person(name , age){
    this.name = name;
    this.age = age;

  }  

//Now create three instances of Person with data you make up

  //code here
  var person1 = new Person('Jude' , 20);
  var person2 = new Person('Chika' , 16);
  var person3 = new Person('Luffy' , 19);
  

//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  //code here

  Person.prototype.sayName = function(){
    alert(this.name);
  }

  console.log(Person);