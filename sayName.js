//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

    var Person =function(name, age){
      this.name = name;
      this.age = age;
      this.sayName = function (){
         alert(this.name);
      }
    }


//Now create three instances of Person with data you make up

  var aodhan = new Person('aodhan', 38);
  var omar = new Person('omar', 38);
  var greg = new Person('greg', 38);


//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

    aodhan.sayName();
