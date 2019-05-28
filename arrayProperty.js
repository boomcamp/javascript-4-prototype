//Just like you can add methods to your own constructor, you can also add methods and properties to built in classes in JavaScript like Arrays and Objects.

//Add a reverse method to the String 'class' so that every instance of String can call reverse and reverse itself.
  
  //code here
function String(name){
  this.name = name;
}

var name1 = new String('bangtansonyeondan');

  String.prototype.reverse = function(){
    var splitstr = this.name.split('');
    var reversestr = splitstr.reverse();
    var joinstr = reversestr.join('');

    return joinstr;
  }

  