//Note: use var for declaring variables
/*
  Your 3 Users will be the following.
    0) Aodhan, aodhan@boom.camp, 'iLoveJS'
    1) Greg, greg@boom.camp, 'iLovePython'
    2) Oscar, oscar@boom.camp, 'iLoveSoccer'
*/

var User = function(name, email, pw) {
    this.name = name;
    this.email = email;
    this.pw = pw;
}

//Create an Array called 'users' that will store all our instances of User.

var users = [];

//Now create and push into your users array 3 separate instances of User using the data from above in that exact order

var aodhan = new User('Aodhan', 'aodhan@boom.camp', 'iLoveJS');
var greg = new User('Greg', 'greg@boom.camp', 'iLovePython');
var oscar = new User('Oscar', 'oscar@boom.camp', 'iLoveSoccer');

users.push(aodhan);
users.push(greg);
users.push(oscar);

console.log('Aodhan\'s information is ');
//Console.log all of Aodhan information

console.log(users.aodhan);

console.log('Oscar\'s information is ');
//Now console.log all of Oscars information

console.log(users.oscar)


//Now create another instance of User using your own information and then add that to your users array.

var koji = new User('Koji', 'rolando.adriano@boom.camp', 'iLoveBoomCamp');
users.push(koji);

console.log('All my users names are ');
//Now loop through your users Array and console.log every users name.

for (var x of users) {
    console.log(x)
}