//Just like you can add methods to your own constructor, you can also add methods and properties to built in classes in JavaScript like Arrays and Objects.

//Add a reverse method to the String 'class' so that every instance of String can call reverse and reverse itself.
  
  //code here
  function String(name) {
    this.name = name;
  }
  var name1 = new String('Hazel');

  String.prototype.reverse = function() {
    var splitStr = this.name.split('');
    var reverseStr = splitStr.reverse();
    var joinStr = reverseStr.join('');

    return joinStr;
  }