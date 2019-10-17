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
  var aodhan = new User("Aodhan", "aodhan@boom.camp", 'iLoveJS');
  var greg = new User("Greg", "greg@boom.camp", 'iLovePython');
  var oscar = new User("Oscar", "oscar@boom.camp", 'iLoveSoccer');

  var users = [aodhan, greg, oscar];


//Now create and push into your users array 3 separate instances of User using the data from above in that exact order

  //code here

console.log(`Aodhan\'s information is ${users[0]["name"]}, ${users[0]["email"]}, ${users[0]["pw"]}`);
//Console.log all of Aodhan information

  //code here

console.log(`Oscar\'s information is ${users[2]["name"]}, ${users[2]["email"]}, ${users[2]["pw"]}`);
//Now console.log all of Oscars information

  //code here


//Now create another instance of User using your own information and then add that to your users array.

  //code here
  users.push(jake = new User("Jake", "jake@boom.camp", 'iLovePh'));


console.log('All my users names are ');
//Now loop through your users Array and console.log every users name.

  //code here
  for(i in users){
    console.log(users[i]["name"])
  }
  