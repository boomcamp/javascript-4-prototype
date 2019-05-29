//Just like you can add methods to your own constructor, 
//you can also add methods and properties to built in classes 
//in JavaScript like Arrays and Objects.

//Add a reverse method to the String 'class' so that every 
//instance of String can call reverse and reverse itself.
  
  //code here

  
    //code here
 
  function StringtoReverse(toReverse){
    this.toReverse = toReverse;
  }
  
  var string1 = new StringtoReverse("dianalyn");
  
  StringtoReverse.prototype.reverse = function(){ 
    var toSplit = this.toReverse.split('');
  
    let temp = [];

    for (let c=toSplit.length-1; c>=0; c--){
      temp.push(toSplit[c]);
    }
    
    var reverseString = '';
    reverseString = temp.join('');
    return reverseString;
  }
  //console.log(string1.reverse());
  
  
