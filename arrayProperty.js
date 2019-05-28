//Just like you can add methods to your own constructor, you can also add methods and properties to built in classes in JavaScript like Arrays and Objects.

//Add a reverse method to the String 'class' so that every instance of String can call reverse and reverse itself.
  
  //code here
  class String{
    constructor(str){
    this.str = str;
    }
  }

  String.prototype.reverse = function() {
    var org = this.str;
    var rev = org.split('').reverse().join('');
    return rev;
  }

  var string1 = new String("BTS");
