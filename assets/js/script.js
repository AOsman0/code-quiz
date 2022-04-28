// global declarations of questions
const questions = [
  {
    questions: "Does HTML stand for HyperText Markup Language?",
    options: ["Yes", "No"],
    rightAnswer: "Yes",
  },
  {
    questions: "Is aside a HTML semantic element?",
    options: ["Yes", "No"],
    rightAnswer: "Yes",
  },
  {
    questions: "Does CSS stand for Cascading Style Sheet?",
    options: ["Yes", "No"],
    rightAnswer: "Yes",
  },
  {
    questions:
      "is numbers important when giving a name of a variable in JavaScript?",
    options: ["Yes", "No"],
    rightAnswer: "No",
  },
  {
    questions: "is isNaN() function used to describe a background-color?",
    options: ["Yes", "No"],
    rightAnswer: "No",
  },
];

//target start button
const startButton = document.getElementById("start-btn");

//target start quiz section
const startSection = document.getElementById("start-section");

//target main page
const mainElement = document.getElementById("main");

let questionIndex = 0;
let timerValue = 10 * questions.length;
let quizComplete = false;

//store answers in array
const rightAnswer = [];

// store all options
const options = [];

const onLoad = () => {
  // initialise local storage
  //need the key for local storage
  //key track of an array called high scores
  // check if highscores exists in LS
  // if false then set highscores to empty array in LS
};

//function to remove start section
const removeStartSection = () => {
  console.log("remove-start-section");
  startSection.remove();
};

const startTimer = () => {
  // declare function to execute every 1 sec
  const countdown = () => {
    // decrement timer value
    // if quizComplete is true then stop timer
    // check if timer reaches 0
    // if true render game over
  };

  // setInterval of 1000ms (1s)
};

const validateAnswer = () => {
  // get answer clicked from user
  // get the correct answer for question
  // compare the 2 answers
  // if incorrect subtract 5 seconds from timerValue
  // if incorrect render error alert with message and status
  // if correct render success alert with message and status
  // set timeout for 500ms and then go to next question
  // if question is last question set quizComplete to true and then render form
  // if question is not last question then increment question index and render next question
};

const handleFormSubmit = () => {
  // get value from input
  // check if empty then render error alert with message and status
  // if not empty then create the score object
  // {
  //   fullName: "Bob Smith",
  //   score: 25
  // }
  // push score object to LS
  // render quizCompleteSection
};

const renderTimerSection = () => {
  console.log("render-timer");
  // use HTML as guide and build in JS
  // append section to main
};

//function to render question to page
const renderQuestionSection = () => {
  //get the question
  //in the questions array use the index number to get the question
  //store that in variable
  const question = questions[questionIndex];
  console.log("render-question");
  // use HTML as guide and build in JS
  // DOM tree and appending
  //create section
  //appended section
  const questionSection = document.createElement("section");
  questionSection.setAttribute("class", questions);
  //create h2
  //h2 appending
  //dynamic title
  const h2 = document.createElement("h2");
  h2.setAttribute("class", "question-head");
  h2.textContent = question.questions;
  //create ul and 4 list
  //appending unordered list
  const ul = document.createElement("ul");
  ul.setAttribute("class", "list of options");

  //create div and append button
  const div = document.createElement("div");
  div.setAttribute("class", "btn-control");
  // append section to main

  // add click event listener on #question-section
};

const renderGameOver = () => {
  // use HTML as guide and build in JS
  // append section to main
};

const renderAlert = (message, status) => {
  // use HTML as guide and build in JS
  // append div to #question-section
};

const renderForm = () => {
  // use HTML as guide and build in JS
  // append section to main
  // add submit event handler to form
};

const renderQuizCompleteSection = () => {
  // use HTML as guide and build in JS
  // append section to main
};

const startQuiz = () => {
  //linked connected the start button
  console.log("start-btn-clicked");
  // remove start section

  removeStartSection();
  // render timer section

  renderTimerSection();

  // render question section called
  renderQuestionSection();
};

// // add event listeners
// // add document on load event listener
// add start button click event listener
startButton.addEventListener("click", startQuiz);
