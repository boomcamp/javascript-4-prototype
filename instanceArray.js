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
var user = new User('Aodhan', 'aodhan@boom.camp', 'iLoveJS'),
user2 = new User('Greg', 'greg@boom.camp', 'iLovePython'),
user3 = new User('Oscar', 'oscar@boom.camp', 'iLoveSoccer');

  //code here
users.push(user);
users.push(user2);
users.push(user3);

console.log('Aodhan\'s information is ');
//Console.log all of Aodhan information

  //code here
console.log(users[0])
console.log('Oscar\'s information is ');
//Now console.log all of Oscars information

  //code here
console.log(users[1]);

//Now create another instance of User using your own information and then add that to your users array.
var user4 = new User('Vince', 'vince.ludovice@boom.camp', '12345');
users.push(user4);
  //code here
console.log(users[2]);
console.log('All my users names are ');
//Now loop through your users Array and console.log every users name.

  //code here
for(arr in users){
  console.log(user[arr].name);
}