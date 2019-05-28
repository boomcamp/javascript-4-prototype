//Just like you can add methods to your own constructor, you can also add methods and properties to built in classes in JavaScript like Arrays and Objects.

//Add a reverse method to the String 'class' so that every instance of String can call reverse and reverse itself.
  
  //code here
  function String(word){
  	this.word = word;
  	// console.log(this);
  }

  String.prototype.reverse = function(){
  	return 
  	// console.log();
  }

  var word1 = new String('Hello');
  var word2 = new String('Ciao');

  console.log(word1.word);

  word1.reverse();
  word2.reverse();
  	