//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  //code here
  function Person(name, age){
    this.name = name;
    this.age = age;
  }

//Now create three instances of Person with data you make up

  //code here
  var elijah = new Person('Elijah',20);
  var koji = new Person('Koji',21);
  var jaako = new Person('Jaako',33);

//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  //code here
  Person.prototype.sayName = function(){
    return alert(this.name);
  }
