//We're going to create the JS for a basic quiz application. 

//Let's think about the nature of this quiz app first. We're going to be creating lots of user objects, and we're
//also going to be creating lots of Question objects. Those would make two perfectly good constructors. 

//Create a QuizUser constructor that accepts name, email, password, and totalScore parameters and set them appropriatly

  //code here

  function QuizUser (name, email, password, totalScore) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.totalScore = totalScore;
  }

//Create a Question constructor that accepts title, answersArray, rightAnswer, and difficulty parameters

  //code here

  function Question (title, answerArray, rightAnswer, difficulty) {
    this.title =  title;
    this.answerArray = answerArray;
    this.rightAnswer = rightAnswer;
    this.difficulty = difficulty;
  }

//Create a quizUsers Array which is going to hold all of our users.

  //code here

	var quizUsers = [];

//Let's say three people signed up for our service, create 3 instances of User and add each to the users Array

  //code here

  quizUsers.push(new QuizUser ('Bruno Bruno', 'bruno@gmail.com', '12345', 10));
  quizUsers.push(new QuizUser ('Melanie Melanie', 'melanie@gmail.com', '67890', 20));
  quizUsers.push(new QuizUser ('Halsey Halsey', 'halsey@gmail.com', '98765', 30));

//Create a questions Array which is going to hold all of our questions

  //code here

	var questions = [];

//Now, let's say we wanted to create a quiz about JavaScript. Create three instances of Question which contain the following data
//title: 'T/F: Inheritance is achieved in JavaScript through Prototypes?'
//title: 'T/F: JavaScript is just a scripting version of Java'
//title: "T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value"
//Fill in the rest of the required data as you see appropriate.

  //code here

  var quizOne = new Question('T/F: Inheritance is achieved in JavaScript through Prototypes?', '123456789', '987654321', 100);
  var quizTwo = new Question('T/F: JavaScript is just a scripting version of Java', '123456789', '987654321', 100);
  var quizThree = new Question('T/F: In Javascript, == does not check "type" but just the value - where === checks type and value', '123456789', '987654321', 100);

//Now push all of your instances of Question into the questions Array

  //code here
  
  questions.push(quizOne);
  questions.push(quizTwo);
  questions.push(quizThree);

console.log('My users Array and my questions arrray are ...');
//Now loop console.log your users array and your questions array and verify that they're both holding the right data.

  //code here

  for(property of quizUsers) {
	console.log(property);
  }
  for(property of questions) {
	console.log(property);
  }