//We're going to create the JS for a basic quiz application. 

//Let's think about the nature of this quiz app first. We're going to be creating lots of user objects, and we're
//also going to be creating lots of Question objects. Those would make two perfectly good constructors. 

//Create a QuizUser constructor that accepts name, email, password, and totalScore parameters and set them appropriatly
let QuizUser = function(name,email,password,totalScore) {
  return {
     name,
     email,
     password,
     totalScore
  }
}
//code here


//Create a Question constructor that accepts title, answersArray, rightAnswer, and difficulty parameters
let Question =  function(title,answersArray,rightAnswer,difficulty) {
return {
 title,
 answersArray,
 rightAnswer,
 difficulty
}
}
//code here


//Create a quizUsers Array which is going to hold all of our users.
let quizUsers = [];
//code here


//Let's say three people signed up for our service, create 3 instances of User and add each to the users Array
quizUsers.push(
 new QuizUser("Jake","jake@boom.camp","j4k3",0),
 new QuizUser("Anna","anna@boom.camp","4nn4",0),
 new QuizUser("Luke","luke@boom.camp","7uk3",0)
)
//code here


//Create a questions Array which is going to hold all of our questions
let questions = [];
let answersArray = [];
//code here


//Now, let's say we wanted to create a quiz about JavaScript. Create three instances of Question which contain the following data
//title: 'T/F: Inheritance is achieved in JavaScript through Prototypes?'
//title: 'T/F: JavaScript is just a scripting version of Java'
//title: "T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value"
//Fill in the rest of the required data as you see appropriate.
 questions.push(
 new Question("T/F: Inheritance is achieved in JavaScript through Prototypes?",answersArray,"true",'hard'),
 new Question("T/F: JavaScript is just a scripting version of Java",answersArray,"true",'hard'),
 new Question("T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value",answersArray,"true",'hard')
 );
//code here


//Now push all of your instances of Question into the questions Array

//code here

console.log('My users Array and my questions arrray are ...');
//Now loop console.log your users array and your questions array and verify that they're both holding the right data.
quizUsers.forEach(key => {
 console.log(key);
})

questions.forEach(key => {
 console.log(key);
})
//code here
