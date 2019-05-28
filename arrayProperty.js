//Just like you can add methods to your own constructor, 
//you can also add methods and properties to built in classes 
//in JavaScript like Arrays and Objects.

//Add a reverse method to the String 'class' so that every 
//instance of String can call reverse and reverse itself.
  
  //code here

  
  function String(toReverse){
    this.toReverse = toReverse;
  }
  
  
  var string1 = new String("dianalyn");
  
  String.prototype.reverse = function(){ 
    var toSplit = this.toReverse.split('');
    var toRev = toSplit.reverse();
    var toJoin = toRev.join('');
  
    return toJoin;
  }
  
  
  