/*
  Your 3 Users will be the following.
    0) Aodhan, aodhan@boom.camp, 'iLoveJS'
    1) Greg, greg@boom.camp, 'iLovePython'
    2) Oscar, oscar@boom.camp, 'iLoveSoccer'
*/

var User = function(name, email, pw){
  this.name = name;
  this.email = email;
  this.pw = pw;
}

//Create an Array called 'users' that will store all our instances of User.
  let users = [];
  //code here


//Now create and push into your users array 3 separate instances of User using the data from above in that exact order
   users.push(new User('John','john.garcia@boom.camp','i'),new User('Aodhan','aodhan@boom.camp','iLoveJS'),new User('Greg','greg@boom.camp','iLovePython'),new User('Oscar','oscar@boom.camp','iLoveSoccer'));
  //code here

console.log('Aodhan\'s information is ');
//Console.log all of Aodhan information
console.log(users.filter(user => user.name === "Aodhan"));
  //code here

console.log('Oscar\'s information is ');
//Now console.log all of Oscars information
console.log(users.filter(user => user.name === "Oscar"));
  //code here


//Now create another instance of User using your own information and then add that to your users array.
 let user = new User('John','john.garcia@boom.camp','i');
  //code here

console.log('All my users names are ');
//Now loop through your users Array and console.log every users name.
  users.forEach(name => console.log(name.name));
  //code here