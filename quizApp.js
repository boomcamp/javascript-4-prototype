//We're going to create the JS for a basic quiz application.

//Let's think about the nature of this quiz app first. We're going to be creating lots of user objects, and we're
//also going to be creating lots of Question objects. Those would make two perfectly good constructors.

//Create a QuizUser constructor that accepts name, email, password, and totalScore parameters and set them appropriatly

//code here
function QuizUser(name, email, password, totalScore) {
  this.name = name;
  this.email = email;
  this.password = password;
  this.totalScore = totalScore;
}
//Create a Question constructor that accepts title, answersArray, rightAnswer, and difficulty parameters

//code here
function Question(title, answersArray, rightAnswer, difficulty) {
  this.title = title;
  this.answersArray = answersArray;
  this.rightAnswer = rightAnswer;
  this.difficulty = difficulty;
}
//Create a quizUsers Array which is going to hold all of our users.

//code here
var quizUsers = [];
//Let's say three people signed up for our service, create 3 instances of User and add each to the users Array

//code here
var firstInfo = new User("Aodhan", "aodhan@boom.camp", "password1", 95);
quizUsers.push(firstInfo);
var secondInfo = new User("Greg", "greg@boom.camp", "password2", 90);
quizUsers.push(secondInfo);
var thirdInfo = new User("Oscar", "oscar@boom.camp", "password3", 85);
quizUsers.push(thirdInfo);
//Create a questions Array which is going to hold all of our questions

//code here
var questions = [];
//Now, let's say we wanted to create a quiz about JavaScript. Create three instances of Question which contain the following data
//title: 'T/F: Inheritance is achieved in JavaScript through Prototypes?'
//title: 'T/F: JavaScript is just a scripting version of Java'
//title: "T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value"
//Fill in the rest of the required data as you see appropriate.

//code here
var firstQst = new Question(
  "T/F",
  "Inheritance is achieved in JavaScript through Prototypes?",
  "T",
  "Easy"
);
var secondQst = new Question(
  "T/F",
  "JavaScript is just a scripting version of Java?",
  "T",
  "Intermediate"
);
var thirdQst = new Question(
  "T/F",
  "In Javascript, == doesn't check 'type' but just the value - where === checks type and value",
  "T",
  "Difficult"
);

//Now push all of your instances of Question into the questions Array

//code here
questions.push(firstQst, secondQst, thirdQst);
console.log(questions);
console.log("My users Array and my questions arrray are ...");
//Now loop console.log your users array and your questions array and verify that they're both holding the right data.

//code here
for (x in quizUsers) {
  console.log(Object.values(quizUsers[x]));
}
for (y in questions) {
  console.log(questions[y]);
}
