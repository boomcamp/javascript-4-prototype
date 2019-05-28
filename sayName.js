//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  //code here
  function Person(name, age){
    this.name = name;
    this.age = age;
    // this.sayName = function(){
    //   alert(this.name);
    // }

  }

//Now create three instances of Person with data you make up

  //code here
  var p1 = new Person('Joe', 23);
  var p2 = new Person('James', 21);
  var p3 = new Person('Gin', 19);

//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  //code here
  Person.prototype.sayName = function(){alert(this.name)};