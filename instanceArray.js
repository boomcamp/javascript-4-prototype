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
  var user1 =['Aodhan', 'aodhan@boom.camp', 'iLoveJS'];
  var user2 =[' Greg', 'greg@boom.camp', 'iLovePython'];
  var user3 =['Oscar',' oscar@boom.camp', 'iLoveSoccer'];
  

  users.push(user1,user2,user3);

//Console.log all of Aodhan information

  //code here
  console.log('Aodhan\'s information is '+ user1);

//Now console.log all of Oscars information

  //code here
  console.log('Oscar\'s information is '+ user2);

//Now create another instance of User using your own information and then add that to your users array.

  //code here
  var user4 =['delfz',' danas.delfin@boom.camp', 'iLovemarlboro'];
  users.push(user4);
console.log('All my users names are ');
//Now loop through your users Array and console.log every users name.

  //code here
  users.forEach(function(name){
    console.log(name)
  });

  