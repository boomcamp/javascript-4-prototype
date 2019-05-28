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
  var aodhanInfo = new User('Aodhan', 'aodhan@boom.camp', 'iLoveJS')
  users.push(aodhanInfo);
  var gregInfo = new User('Greg', 'greg@boom.camp', 'iLovePython');
  users.push(gregInfo);
  var oscarInfo = new User('Oscar', 'oscar@boom.camp', 'iLoveSoccer');
  users.push(oscarInfo);


console.log('Aodhan\'s information is ');
//Console.log all of Aodhan information

  //code here
  console.log(aodhanInfo);

console.log('Oscar\'s information is ');
//Now console.log all of Oscars information

  //code here
  console.log(oscarInfo);


//Now create another instance of User using your own information and then add that to your users array.

  //code here
  var martinInfo = new User('Martin', 'martin.raquion@boom.camp', 'iLoveMusic')
  users.push(martinInfo);

console.log('All my users names are ');
//Now loop through your users Array and console.log every users name.

  //code here
  for(let x in users){
    console.log(users[x].name);
}