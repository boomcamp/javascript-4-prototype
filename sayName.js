//Note: use var for declaring variables

//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  function Person(name, age){
    this.name = name;
    this.age = age;
  }


//Now create three instances of Person with data you make up

  var Gay = new Person('Jude', 22);
  var Homo = new Person('Manly', 21);
  var Bading = new Person('Navas', 23);


//Now add a sayName method on your Person class that will log the name of whatever Person instance called it in the console.

  Person.prototype.sayName = function(){
    alert(this.name);
  }
console.log(Person);