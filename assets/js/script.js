//Body
const onLoadElement = document.getElementById("body-of-page");

//Button
const startButton = document.getElementById("start-quiz");

// global declarations
const questions = [
  //adding my 4 questions
  //question 1
  "Which one of these is a semantic HTML element?",
  "What does HTML stand for?",
  "which one of the options is not a Keyword?",
  "What's and important rule to remember when giving variable names?",
  "What does the Cd command stand for in terminal?",
  "Which is not an example of a type of viewport?",
  "What is the right github command to clone from a repo?",
];
let questionIndex = 0;
let timerValue = 10 * questions.length;
let quizComplete = false;

const onLoad = () => {
  // initialise local storage
  //need the key for local storage
  localStorage.key("trackHighScores");

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
  // use HTML as guide and build in JS
  // append section to main
};

//function to render question to page
const renderQuestionSection = () => {
  console.log("render-question");
  // use HTML as guide and build in JS

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
  console.log("start-button-clicked");
  // remove start section

  // call start timer
  removeStartSection();

  // render timer section

  // render question section called
  renderQuestionSection();
};

// add event listeners
// add document on load event listener
onLoadElement.addEventListener("click", onLoad);
// add start button click event listener
startButton.addEventListener("click", startQuiz);
