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

    var person1 = new User('Aodhan', 'aodhan@boom.camp', 'iLoveJS');

    var person2 = new User('Greg', 'greg@boom.camp', 'iLovePython');

    var person3 = new User('Oscar', 'oscar@boom.camp', 'iLoveSoccer');

    users.push(person1);
    users.push(person2)
    users.push(person3);


console.log('Aodhan\'s information is ');
//Console.log all of Aodhan information

  //code here
  console.log('Aodhan\'s information is ', person1);
  

console.log('Oscar\'s information is ');
//Now console.log all of Oscars information

  //code here
  console.log('Aodhan\'s information is ', person3);


//Now create another instance of User using your own information and then add that to your users array.

  //code here

  var person4 = new User('Romeo', 'romeo.lumibao@boom.camp', 'iLoveYou');

  users.push(person4);

console.log('All my users names are ');
//Now loop through your users Array and console.log every users name.

  //code here

  for(let i = 0; i <= users.length-1; i++){
    console.log(users[i]['name']);
  }
