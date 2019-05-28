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

 var users =new Array();

//Now create and push into your users array 3 separate instances of User using the data from above in that exact order

var Aodhan = new Array('Aodhan', 'aodhan@boom.camp', 'iLoveJS');
var Greg = new Array('Greg', 'greg@boom.camp', 'iLovePython');
var Oscar = new Array('Oscar', 'oscar@boom.camp', 'iLoveSoccer');
users.push(Aodhan);
users.push(Greg);
users.push(Oscar);

console.log('Aodhan\'s information is ');
//Console.log all of Aodhan information

console.log(Aodhan);

console.log('Oscar\'s information is ');
//Now console.log all of Oscars information

console.log(Oscar);


//Now create another instance of User using your own information and then add that to your users array.

 var Keanu = new Array('Keanu', 'keanu.manly@boom.camp', 'ilovegames');
 users.push(Keanu);

console.log('All my users names are ');
//Now loop through your users Array and console.log every users name.

console.log(users);
