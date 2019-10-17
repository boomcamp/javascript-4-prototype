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

  //code here
const users = [];

//Now create and push into your users array 3 separate instances of User using the data from above in that exact order

  //code here
  var first= new Array('Aodhan', 'aodhan@boom.camp', 'iLoveJS',);
  users.push(first);
  var second = new Array('Greg', 'greg@boom.camp', 'iLovePython');
  users.push(second);
  var third= new Array('Oscar', 'oscar@boom.camp', 'iLoveSoccer');
  users.push(third);
  var fourth= new Array('Vanessa', 'vanessa.dulva@boom.camp', 'iLoveSoccer');
 users.push(fourth);

console.log('Aodhan\'s information is ');
//Console.log all of Aodhan information

  //code here
console.log(users[0]);
console.log('Oscar\'s information is ');
//Now console.log all of Oscars information

  //code here
  console.log(users[2]);
  
//Now create another instance of User using your own information and then add that to your users array.

  //code here
  console.log(users);
console.log('All my users names are ');
//Now loop through your users Array and console.log every users name.

  //code here
