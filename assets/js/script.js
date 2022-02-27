//selectors

var ViewHighScoreEl = document.querySelector("#view-high-score");

var timerEl = document.querySelector("#timer");

var containerPg1El = document.querySelector("#container-pg1");

var containerQuestionEl = document.querySelector("#container-question");

var answerBtnEl = document.querySelector("#answer-buttons");

// var containerScoreEl = document.querySelector("#container-score");

var formEl = document.querySelector("#initials-form");

var containerHighScoreEl = document.querySelector("#container-high-score");

var scoreListEl = document.querySelector("#score-list");

var goBackBtnEl = document.querySelector("#go-back");

var startBtnEl = document.querySelector("#startBtn");

var clearHighScores = document.querySelector("#clear-high-scores");

var quizContainerEl = document.querySelector("#quiz-container");

var score = 0;

var timeLeft = 60;

//  var gameOver 
//      timerEl.innertext = 0;

const myQuestions = [
  { 
      question: "Commonly used data types do NOT include:", 

      choices: ["strings", "booleans", "alerts", "numbers"],

      answer: "alerts"
  },

  { 
      question: "The condition in an if/else statement is enclosed with ____.", 

      choices: ["curly brackets", "parenthesis", "quotes", "commas"],

      answer: "parenthesis"
  },

  { 
      question: "Arrays in Javascript can be used to store ________.", 
      
      choices: ["strings", "booleans", "numbers", "all of them"],

      answer: "all of them"
  },

  { question: "String values must be enclosed within _____ when being assigned to variables.", 
    
    choices: ["quotes", "commas", "curly brackets", "parenthesis"],

    answer: "quotes" 
  },
      
  { question: 'A very useful tool used during development and debugging for printing content to the debugger is:', 
  
    choices: ["JavaScript", "terminal/bash", "for loop", "console.log"],
    
    answer: "console.log" 
  }
];

// this is an accumulator variable that holds the index of the current question
var currentQuestion = 0

// take item from answer choices array and put text on screen
var questionTitle = document.querySelector('#questionTitle')
var answerChoices = document.querySelectorAll('.answerChoices')

function nextQuestion() {
  // setting text content of question title to 'question'
  questionTitle.textContent = myQuestions[currentQuestion]['question']

  //iterate over answerChoices array
  for (var i = 0; i < answerChoices.length; i++) {
    // add index of current answer choice to screen
    answerChoices[i].textContent = myQuestions[currentQuestion]['choices'][i]
  }
}

// add event listener to all of the 'answerChoices' buttons. When button is clicked...
// evaluate if answer choice is correct
// increment currentQuestion by 1
// put next question on screen (execute nextQuestion function to do this)
for (var i = 0; i < answerChoices.length; i++ ) {
  // add event listener to current answer choice
  answerChoices[i].addEventListener("click", function(event) {
    // this is an anonymous callback function. This function is not named and it fires when you click an answer button
    var element = event.target

    //evaluate if the answer choice is right or wrong
    var correctAnswerChoice = myQuestions[currentQuestion]['answer']
    var answerChosen = element.textContent;
    // if correct answer is chosen...
    //evaluate if correctAnswerChoice equals answerChosen
    if (correctAnswerChoice == answerChosen) {
      // add 1 to score
      score += 1
    } else {
      // answer is not correct
      timeLeft -= 1    // lose 1 time
      score -= 1       // lose 1 score
    }

    // increment currentQuestion by 1
    currentQuestion += 1;

    // show next question
    nextQuestion();
  })
}

// put first question on page when 'questions-page.html' loads
nextQuestion();

// if currentQuestion > number of questions. go to results page