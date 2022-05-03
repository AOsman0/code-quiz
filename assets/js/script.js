// store all options due options being the same
const options = ["Yes", "No"];

//store answers in array
const rightAnswer = ["Yes", "No"];

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
    options: options,
    rightAnswer: "Yes",
  },
  {
    questions:
      "is numbers important when giving a name of a variable in JavaScript?",
    options: options,
    rightAnswer: "No",
  },
  {
    questions: "is isNaN() function used to describe a background-color?",
    options: ["Yes", "No"],
    rightAnswer: "No",
  },
];

//target start quiz section
const startSection = document.getElementById("start-section");

//target main page
const mainElement = document.getElementById("main");

//define questions section
const questionsSection = document.getElementById("questions");

//declare in global current question index to keep track of questions
let questionIndex = 0;

let timerValue = 10 * questions.length;
let quizComplete = false;

//function to remove start section
const removeStartSection = () => {
  console.log("remove-start-section");
  startSection.remove();
};

const startTimer = () => {
  // declare function to execute every 1 sec
  const countdown = () => {
    // decrement timer value
    timerNum -= 1;
    // if quizComplete is true then stop timer
    if (quizFinished) {
      clearInterval(timerStop);
    } else {
      const timerClock = document.getElementById("timer-span");
      timerClock.textContent = timerNum;
    }
    // check if timer reaches 0
    if (timerNum === 0) {
      // if true render game over
      clearInterval(timerStop);
      document.getElementById("question-section").remove();
      renderGameOverSection();
    }
  };
};
// setInterval of 1000ms (1s)
const timerStop = setInterval(countdown, 1000);

const renderGameOverSection = () => {
  document.getElementById("timer-section").remove();

  const gameOverSection = document.createElement("section");
  gameOverSection.setAttribute("class");
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
  const timerSection = document.createElement("section");
  timerSection.setAttribute("id", "timer-section");

  const timeRemaining = document.createElement("p");
  timeRemaining.setAttribute("class", "time-left");
  timeRemaining.textContent = "Time-Remaining:";

  const timerSpan = document.createElement("span");
  timerSpan.setAttribute("id", "timer-span");

  // append section to main
};

//event handler function to handle click events in question section
//every event handler function should know what the event is
//declare handleOptionsClicked Function
const handleOptionsClicked = (event) => {
  console.log("question section clicked");

  //get current target
  const currentTarget = event.currentTarget;

  //get target
  const target = event.target;

  console.log(currentTarget);
  console.log(target);

  //check if click originates from list item only
  //the current target is the element the event handler is attached to
  //the element being targeted or the child is the event target
  if (target.tagName === "LI") {
    //get option user clicked
    const value = target.getAttribute("data-value");
    console.log(value);
    //get question user answered
    //use question index from array and then .text to display the question
    const question = [questionIndex].text;
    console.log(question);
    //build an answer object the contains question and answer
    const answer = {
      question,
      value,
    };

    //STILL HAVE TO STORE IN LS???
    // local storage is built into the browser
    //we want to set answers in LS
    storeAnswerInLs(answer);

    console.log(answer);
  }
  //remove question before if branch
  removeQuestion();

  //check questions index if its lesser than questions array
  if (questionIndex < questions.length - 1) {
    //go to next question if not last question
    //need to increment the question index by 1
    questionIndex += 1;

    //then recall same function
    renderQuestionSection();
  } else {
    //if last question then render the results
    renderForm();
  }
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
  questionSection.setAttribute("class", "questions");
  questionSection.setAttribute("id", "questions-container");
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

  //loop over options to create and append the li to ul
  const li1 = document.createElement("ul");
  li1.setAttribute("class", "list-items");
  li1.setAttribute("data-value", question.options[0]);
  li1.textContent = question.options[0];

  const li2 = document.createElement("ul");
  li2.setAttribute("class", "list-items");
  li2.setAttribute("data-value", question.options[1]);
  li2.textContent = question.options[1];

  //append li to ul
  ul.append(li1, li2);

  //create div and append button
  const div = document.createElement("div");
  div.setAttribute("class", "btn-control");

  //creating button
  const btn = document.createElement("btn");
  btn.setAttribute("class", "btn-control");
  //button other attribute
  btn.setAttribute("id", "next-button");

  //append button to div
  div.append(btn);
  //append h2 , ul and div to section
  questionSection.append(h2, ul, div);
  // append question section to main element
  mainElement.append(questionSection);

  // add click event listener on #question-section
  // whenever theres a click inside of this section if the click comes from a list item only then go to next question
  //need to do event bubbling
  questionSection.addEventListener("click", handleOptionsClicked);
};

const removeQuestion = () => {
  console.log("remove-question");
  document.getElementById("questions-container").remove();
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
  console.log("render form");
  // append section to main
  const section = document.createElement("section");
  section.setAttribute("id", "form-selection");
  section.setAttribute("class", "form-selector");

  //use DOM to append
  const h6 = document.createElement("h6");
  h6.setAttribute("class", "form-scores");
  h6.textContent = "Form for your score";

  const form = document.createElement("form");

  const inputDiv = document.createElement("div");
  inputDiv.setAttribute("class", "full-name-input");

  const input = document.createElement("input");
  input.setAttribute("id", "full-name-1");
  input.setAttribute("class", "name");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "full-name");

  inputDiv.append(input);

  const buttonDiv = document.createElement("div");
  buttonDiv.setAttribute("class", "btn-form");

  const button = document.createElement("button");
  button.setAttribute("class", "bnt-2");
  button.setAttribute("type", "submit");
  button.textContent = "Submit";

  //appending button div to button
  buttonDiv.append(button);

  form.append(inputDiv, buttonDiv);
  section.append(h6, form);
  mainElement.append(section);

  // add submit event handler to form
  form.addEventListener("submit", handleFormSubmit);
};

const renderQuizCompleteSection = () => {
  // use HTML as guide and build in JS
  // append section to main
};

const intialiseLocalStorage = () => {
  //get results from local storage
  //local storage interface built in
  //whenever you get something you want to parse the value before it gets to LS
  const quizResultsFromlS = JSON.parse(localStorage.getItem("quizResults"));
  console.log(quizResultsFromlS);

  //check for the falseyness
  if (quizResultsFromlS) {
    //if not exist LS to set LS to have results in an empty array
    //where going to use the set method here
    //we use the the JSON object and use the stringify method and add make sure when i set i stringify the value and key
  }
  localStorage.setItem("quizResultsFromlS", JSON.stringify([]));
};

const startQuiz = () => {
  //linked connected the start button
  console.log("start-btn-clicked");

  //initalise local storage
  intialiseLocalStorage();

  // remove start section

  removeStartSection();
  // render timer section

  renderTimerSection();

  // render question section called
  renderQuestionSection();
};

const storeAnswerInLs = () => {
  //store answer in Local Storage

  //get feedback results from LS
  JSON.parse(localStorage.getItem("quizResultsFromlS"));

  //push answer in to the answer array
  quizResultsFromlS.push(answer);

  //then set feedback Results in LS
  localStorage.setItem("quizResultsFromlS", JSON.stringify(quizResultsFromlS));
};

// // add event listeners
// // add document on load event listener
// add start button click event listener
startButton.addEventListener("click", startQuiz);
