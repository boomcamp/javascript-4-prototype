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
var users = [];

//Now create and push into your users array 3 separate instances of User using the data from above in that exact order

  //code here
var user001 = new User('Aodhan', 'aodhan@boom.camp', 'iLoveJS');
var user002 = new User('Greg', 'greg@boom.camp', 'iLovePython');
var user003 = new User('Oscar', 'oscar@boom.camp', 'iLoveSoccer');

users.push(user001);
users.push(user002);
users.push(user003);

console.log('Aodhan\'s information is ');
//Console.log all of Aodhan information

  //code here
console.log(user001);

console.log('Oscar\'s information is ');
//Now console.log all of Oscars information

  //code here
console.log(user003);

//Now create another instance of User using your own information and then add that to your users array.

  //code here
const user004 = new User('New User', 'new.user@boom.camp', 'ILoveUser');
users.push(user004);
console.log('All my users names are ');
//Now loop through your users Array and console.log every users name.

  //code here
for(x=0;x<users.length;x++){
  console.log(users[x]);
};
// users.forEach(function(x){
//   console.log(x);
// });
