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
  var aodhan = new User("Aodhan","aodhan@boom.camp","iLoveJS");
  var greg = new User("Greg","greg@boom.camp","iLovePython");
  var oscar = new User("Oscar","oscar@boom.camp","iLoveSoccer");

  users.push(aodhan);
  users.push(greg);
  users.push(oscar);

console.log('Aodhan\'s information is ');
//Console.log all of Aodhan information

  //code here
  console.log(aodhan);

console.log('Oscar\'s information is ');
//Now console.log all of Oscars information

  //code here
  console.log(oscar);


//Now create another instance of User using your own information and then add that to your users array.

  //code here
  var sam = new User("Sam","samuel.lopez@boom.camp","IloveMe");
  users.push(sam);

console.log('All my users names are ');
//Now loop through your users Array and console.log every users name.

  //code here
  users.forEach(function(userVal){
    console.log(userVal);
  })
