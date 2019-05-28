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

  let users = []


//Now create and push into your users array 3 separate instances of User using the data from above in that exact order

  var user1 = new User('Aodhan', 'aodhan@boom.camp', 'iLoveJS')
      user2 = new User('Greg', 'greg@boom.camp', 'iLovePython')
      user3 = new User('Oscar', 'oscar@boom.camp', 'iLoveSoccer')

  users.push(user1, user2, user3)
  console.log(users)

console.log('Aodhan\'s information is ');
//Console.log all of Aodhan information

  console.log(user1)

console.log('Oscar\'s information is ');
//Now console.log all of Oscars information

  console.log(user3)


//Now create another instance of User using your own information and then add that to your users array.

  var user4 = new User('Jericho', 'jericho.aldemo@boom.camp', '12345')
  users.push(user4)

console.log('All my users names are ');
//Now loop through your users Array and console.log every users name.
  users.forEach(function (element) {
    console.log(element.name)
  })
  
