//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  //code here
  var Person = function(name,age){
    this.name = name;
    this.age = age;
  }


//Now create three instances of Person with data you make up

  //code here

  var Ice = new Person('Icecream','21');
  var Noy = new Person('Nonoy', '22');
  var Neg = new Person('Neg', '20');

//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  //code here
  Person.prototype.sayName = function(){
    alert(this.name); 
  }
