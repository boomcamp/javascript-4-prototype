//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  //code here

  var Person = function(name, age){
    this.name= name;
    this.age= age;
  }

 
//Now create three instances of Person with data you make up

  //code here
  var barbs = new Person("JuanBarbin","69");
  var pat = new Person("PinkyPat","69");
  var sam = new Person("samsamsam","20");


//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  //code here
  Person.prototype.sayName = function(name){
    alert(this.name);
  }

