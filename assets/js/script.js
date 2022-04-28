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

// global declarations of questions
const questions = [
  {
    questions: "What does HTML stand for?",
    options: [
      "HyperText Markup Language",
      "HyperTerminology Markup Language",
      "HypeTurn Marble Language",
      "HyperText Markup Linguistics",
    ],
    rightAnswer: "HyperText Markup Language",
  },
  {
    questions: "Which one the following is not a  HTML Semantic Element?",
    options: ["aside", "li", "header", "footer"],
    rightAnswer: "li",
  },
  {
    questions: "What does CSS stand for?",
    options: [
      "Creating Styling Sheets",
      "Cascading Style Sheet",
      "Cascading Styling Shorts",
      "Creating Styles Sheet",
    ],
    rightAnswer: "Cascading Style Sheet",
  },
  {
    questions:
      "What is something important to remember when giving a name of a variable in JavaScript?",
    options: ["camelcasing", "parenthesis", "numbers", "string"],
    rightAnswer: "camelcasing",
  },
  {
    questions: "what does is isNaN() function do?",
    options: [
      "determines whether a value is NaN or not",
      "used to describe a background-color",
      "a mathematics operator",
      "all of the above",
    ],
    rightAnswer: "determines whether a value is NaN or not",
  },
];

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
  console.log("render-question");
  // use HTML as guide and build in JS
  // DOM tree and appending
  //create section
  //appended section
  const questionSection = document.createElement("section");
  questionSection.setAttribute("class", questions);
  //create h2
  //h2 appending
  const h2 = document.createElement("h2");
  h2.setAttribute("class", "question-head");
  h2.textContent = "";

  //TODO:Make this a dynamic question
  //create ul and 4 list
  //appending unordered list
  const ul = document.createElement("ul");
  ul.setAttribute("class", "options");

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
// bodyElement.addEventListener("click", onLoad);
// add start button click event listener
startButton.addEventListener("click", startQuiz);
