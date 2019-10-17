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
  users =  [{
      name: "Aodhan",
      email:"aodhan@boom.camp",
      pw: "iLoveJS"
  },
  {
      name: "Greg",
      email:"greg@boom.camp",
      pw: "iLovePython",
  },
  {
    name: "Oscar",
    email:"oscar@boom.camp",
    pw: "iLoveSoccer",
  },
]
  
console.log('Aodhan\'s information is ');
//Console.log all of Aodhan information

  //code here
console.log('Oscar\'s information is ');
console.log(users[0]);
//Now console.log all of Oscars information

  //code here
  console.log(users[2]);

//Now create another instance of User using your own information and then add that to your users array.

  //code here
  const myuser = [{
    name: "Clark",
    email:"clark.amor@boom.camp",
    pw: "iloveyou"
  }
  ]
 users.push(myuser);
 
console.log('All my users names are ');
//Now loop through your users Array and console.log every users name.

//code here
for (var i = 0; i < users.length; i++){
   console.log(users[i].name);
}
  