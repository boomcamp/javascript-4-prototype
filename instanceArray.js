//Note: use var for declaring variables
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
  let users = [];


//Now create and push into your users array 3 separate instances of User using the data from above in that exact order

  //code here

  users.push(new User('Aodhan', 'aodhan@boom.camp', 'iLoveJS'));
  users.push(new User('Greg', 'greg@boom.camp', 'iLovePython'));
  users.push(new User('Oscar', 'oscar@boom.camp', 'iLoveSoccer'));

console.log('Aodhan\'s information is ');
//Console.log all of Aodhan information

  //code here
  users.map(user=>{
    if(user.name === "Aodhan"){
      console.log(" Registered Email: " + user.email + " and Registered Password:" + user.pw);
    }
  });

console.log('Oscar\'s information is ');
//Now console.log all of Oscars information

  //code here
  users.map(user=>{
    if(user.name === "Oscar"){
      console.log(" Registered Email: " + user.email + " and Registered Password:" + user.pw);
    }
  });


//Now create another instance of User using your own information and then add that to your users array.

  //code here
  users.push(new User('Yow','jeffrey.molleno@boom.camp','thirdwheelingmajor'));
console.log('All my users names are ');
//Now loop through your users Array and console.log every users name.

  //code here
  users.map(user=>{
    if(user.name === "Yow"){
      console.log(" Registered Email: " + user.email + " and Registered Password:" + user.pw);
    }
  });  
