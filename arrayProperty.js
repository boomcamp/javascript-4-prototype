//Just like you can add methods to your own constructor, you can also add methods and properties to built in classes in JavaScript like Arrays and Objects.

//Add a reverse method to the String 'class' so that every instance of String can call reverse and reverse itself.
  
  //code here  
  String.prototype.reverse = function(){
    let rev = this.length;

    let reversedStr = '';

    for (let index =  rev - 1; index >= 0; index--) {
        reversedStr += this[index];
    }

    return reversedStr;
  }
