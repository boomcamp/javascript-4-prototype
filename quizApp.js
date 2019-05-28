//We're going to create the JS for a basic quiz application. 

//Let's think about the nature of this quiz app first. We're going to be creating lots of user objects, and we're
//also going to be creating lots of Question objects. Those would make two perfectly good constructors. 

//Create a QuizUser constructor that accepts name, email, password, and totalScore parameters and set them appropriatly

  //code here
  function QuizUser(name, email, password, totalScore){
    this.name = name;
    this.email = email;
    this.password = password;
    this.totalScore = totalScore;
  
    return this;
  }

//Create a Question constructor that accepts title, answersArray, rightAnswer, and difficulty parameters

  //code here
  function Question(title, answersArray, rightAnswer, difficulty){
    this.title = title;
    this.answersArray = answersArray;
    this.rightAnswer = rightAnswer;
    this.difficulty = difficulty;
  
    return this;
  }

//Create a quizUsers Array which is going to hold all of our users.

  //code here
  var quizUsers = [];

//Let's say three people signed up for our service, create 3 instances of User and add each to the users Array

  //code here
  var user1 = new QuizUser('She', 'she@gmail.com', 'ps1234' 80);
  var user2 = new QuizUser('Seat', 'seat@gmail.com', '9876p', 90);
  var user3 = new QuizUser('Hace', 'hace@gmail.com', 'pass', 100);

//Create a questions Array which is going to hold all of our questions

  //code here
  var questions = [];


//Now, let's say we wanted to create a quiz about JavaScript. Create three instances of Question which contain the following data
//title: 'T/F: Inheritance is achieved in JavaScript through Prototypes?'
//title: 'T/F: JavaScript is just a scripting version of Java'
//title: "T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value"
//Fill in the rest of the required data as you see appropriate.

  //code here
  var qtnA = new Question('title: 'T/F: Inheritance is achieved in JavaScript through Prototypes?'');
  var qtnB = new Question('title: 'T/F: JavaScript is just a scripting version of Java'');
  var qtnC = new Question('title: "T/F: In Javascript, == doesn\'t check 'type' but just the value - where === checks type and value"');

//Now push all of your instances of Question into the questions Array

  //code here
  console.log(questions.push(Question(qtnA, qtnB, qtnC)));

  console.log('My users Array and my questions arrray are ...');
//Now loop console.log your users array and your questions array and verify that they're both holding the right data.

  //code here
  for(let i=0; i < quizUsers.length; i++){
    for(let j=0; j < questions.length; j++){
        console.log(quizUsers[i], questions[j]);
        // console.log(questions[j]);
    }
  }

