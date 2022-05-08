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

//declare in global current question index to keep track of questions
let questionIndex = 0;

let timer = 60;
let quizComplete = false;
let highScores = [];

const timerSpan = document.getElementById("timer-span");

//target start quiz section
const startSection = document.getElementById("start-section");

//target main page
const mainElement = document.getElementById("main");

//define questions section
const questionsSection = document.getElementById("questions");

//function to remove start section
const removeStartSection = () => {
  console.log("remove-start-section");
  startSection.remove();
};

const startTimer = () => {
  // declare function to execute every 1 sec
  const timerSpan = document.getElementById("time-span");
  // decrement timer value
  const timerTick = () => {
    timer -= 1;

    timerSpan.textContent = timer > 0 ? timer : 0;

    // if quizComplete is true then stop timer
    timerSpan.textContent = `Time Remaining: ${timer}`;
    // check if timer reaches 0
    if (timer === 0) {
      clearInterval(timerId);
      removeQuestion();
      console.log("RENDER GAME OVER");

      //RENDER GAME OVER
    }
    if (questionIndex === questions.length - 1) {
      clearInterval(timerId);
    }
  };
  // setInterval of 1000ms (1s)
  const timerId = setInterval(timerTick, 1000);
};

const handleFormSubmit = (event) => {
  event.preventDefault();
  // get value from input
  const fullName = document.getElementById("full-name-1").value;

  // if not empty then create the score object
  if (fullName !== "" && fullName !== undefined && fullName !== null) {
    const user = {
      userName: fullName,
      score: timer,
    };
    // push user to highscores
    highScores.push(user);
    console.log(JSON.stringify(highScores));
    //write to to LS
    localStorage.setItem("highScores", JSON.stringify(highScores));
  }
};

const renderTimerSection = () => {
  console.log("render-timer");
  // use HTML as guide and build in JS
  const timerSection = document.createElement("section");
  timerSection.setAttribute("id", "timer-section");

  const timeRemaining = document.createElement("div");
  timeRemaining.setAttribute("class", "timer");

  const timeSpan = document.createElement("span");
  timeSpan.setAttribute("id", "time-span");
  timeSpan.setAttribute("class", "time-span-class");
  timeSpan.textContent = `Time Remaining: ${timer}`;

  //append span to time remaining then time remaining to section
  timeRemaining.appendChild(timeSpan);

  timerSection.append(timeRemaining);

  // append section to main
  mainElement.append(timerSection);

  startTimer();
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

  //check if click originates from list item only
  //the current target is the element the event handler is attached to
  //the element being targeted or the child is the event target
  if (target.tagName === "UL") {
    //get option user clicked
    const value = target.getAttribute("data-value");
    console.log(value);
    //get question user answered
    //use question index from array and then .text to display the question
    const question = [questionIndex].text;
    // console.log(question);
    //build an answer object the contains question and answer
    const answer = {
      question,
      value,
    };

    // get the correct answer for question
    const correctAnswer = questions[questionIndex].rightAnswer;

    // compare the 2 answers
    if (value === correctAnswer) {
      // if correct render success alert with message and status
      // do this in java script and potentially HTML
      console.log("well done");
    }
    // if incorrect subtract 5 seconds from timerValue
    else {
      console.log("incorrect");
      // if incorrect subtract 5 seconds from timerValue
      timer -= 5;
      alert("Answer was wrong please focus!");

      // if incorrect render error alert with message and status
      //have a render alert function in java script and my HTML
    }
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
  h6.textContent = "Please Input Details And Click Submit To View Score:";

  const form = document.createElement("form");
  form.setAttribute("class", "form-1");

  const inputDiv = document.createElement("div");
  inputDiv.setAttribute("class", "full-name-input");

  const input = document.createElement("input");
  input.setAttribute("id", "full-name-1");
  input.setAttribute("class", "name");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "full-name");

  inputDiv.append(input);

  const buttonDiv = document.createElement("div");
  buttonDiv.setAttribute("id", "btn-form");

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

const intialiseLocalStorage = () => {
  //get results from local storage
  highScores = JSON.parse(localStorage.getItem("highScores"));
  console.log("highscores from LS: " + highScores);

  //check for the falseyness
  if (!highScores) {
    //if not exist LS to set LS to have results in an empty array
    localStorage.setItem("highScores", JSON.stringify([]));
    //where going to use the set method here
    //we use the the JSON object and use the stringify method and add make sure when i set i stringify the value and key
  }
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

// add event listeners
// add document on load event listener
startSection.addEventListener("click", startQuiz);
