//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  //code here
  var Person = function(name, age){
    this.name = name;
    this.age = age;
  }


//Now create three instances of Person with data you make up

  //code here
  var name1 = new Person('Aodhan', 25)
  var name2 = new Person('Greg', 20)
  var name3 = new Person('Oscar', 20)


//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  //code here
  Person.prototype.sayName = function() {
    alert(this.name);
  };
