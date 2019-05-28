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

  var users = [
    {
    name: 'Aodhan',
    email: 'aodhan@boom.camp',
    pw: 'iLoveJS'
  },
  {
    name: 'Greg',
    email: 'greg@boom.camp',
    pw: 'iLovePython'
  },
  {
    name: 'Oscar',
    email: 'oscar@boom.camp',
    pw: 'iLoveSoccer'
  },
  {
    name: 'Vincent',
    email: 'Vincent.navas@boom.camp',
    pw: 'iLoveCSS'
  },
  ];


//Now create and push into your users array 3 separate instances of User using the data from above in that exact order



console.log('Aodhan\'s information is ');
//Console.log all of Aodhan information

    console.log(users[0]);


console.log('Oscar\'s information is ');
//Now console.log all of Oscars information

    console.log(users[1]);


//Now create another instance of User using your own information and then add that to your users array.

console.log(users[2]);

console.log('All my users names are ');
//Now loop through your users Array and console.log every users name.

console.log(users);
