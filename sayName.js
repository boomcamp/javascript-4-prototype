//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  //code here
  function Person(name, age){
    this.name = name;
    this.age = age;
  }


//Now create three instances of Person with data you make up

  //code here
  var trizha = new Person('Trizha', 21);
  var joey = new Person('Joey', 30);
  var chandler = new Person('Chandler', 33);

//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  //code here
  Person.prototype.sayName = function(name){
    alert(this.name);
  }
