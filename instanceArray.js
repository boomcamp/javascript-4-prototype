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
var users = [];
  //code here


//Now create and push into your users array 3 separate instances of User using the data from above in that exact order

users[0] = ['Aodhan','aodhan@boom.camp','iLoveJS'];
users[1] = ['Greg','greg@boom.camp','iLovePython'];
users[2] = ['Oscar','oscar@boom.camp','iLoveSoccer'];

  //code here

console.log('Aodhan\'s information is ');
//Console.log all of Aodhan information
console.log(users[0]);
  //code here

console.log('Oscar\'s information is ');
//Now console.log all of Oscars information
console.log(users[2]);
  //code here


//Now create another instance of User using your own information and then add that to your users array.
users[3] = ['Gino','gino.aquino@boom.camp','iLoveYou143'];
  //code here

console.log('All my users names are ');
//Now loop through your users Array and console.log every users name.

for(var a=0;a<users.length;a++){
  console.log(users[a].name);
}
  //code here
