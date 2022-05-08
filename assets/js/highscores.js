//targetting main page
const mainElement = document.getElementById("high-score-main");
//targeting scores section
const scoresElement = document.getElementById("high-score-id");

//declare the score in global memmory
const scoresData = document.getElementById("table-data-2");
// function for high scores
const showHighScores = () => {
  renderHighScores();
};

const renderHighScores = () => {
  //rendering all elements
  const scoresSection = document.createElement("section");
  scoresSection.setAttribute("class", "high-scores-section");
  scoresSection.setAttribute("id", "high-score-id");

  const h1 = document.createElement("h1");
  h1.setAttribute("class", "table-high-scores");
  h1.textContent = "Table Of Highscores:";

  //the table container
  const tableContainer = document.createElement("div");
  tableContainer.setAttribute("class", "table-container");

  //the table
  const tableScores = document.createElement("table");
  tableScores.setAttribute("class", "table-scores");

  //table row 1
  const tableRow = document.createElement("tr");
  tableRow.setAttribute("class", "table");

  //table headers
  const tableHeaderName = document.createElement("th");
  tableHeaderName.setAttribute("class", "table-heading-1");
  tableHeaderName.textContent = "Name";

  const tableHeaderScore = document.createElement("th");
  tableHeaderScore.setAttribute("class", "table-heading-2");
  tableHeaderScore.textContent = "Score";
  //appended the table header elements to the table row
  tableRow.append(tableHeaderName, tableHeaderScore);
  tableScores.append(tableRow);
  //got highscores from LS
  const highScoreData = JSON.parse(localStorage.getItem("highScores"));
  console.log(highScoreData);

  highScoreData.forEach((score) => {
    //table row 2
    const tableResult = document.createElement("tr");
    tableResult.setAttribute("class", "table-result");

    const tableDataName = document.createElement("td");
    tableDataName.setAttribute("class", "table-data-1");
    tableDataName.textContent = score.userName;
    // set content to be name
    // get name from local storage

    const tableDataScore = document.createElement("td");
    tableDataScore.setAttribute("class", "table-data-2");
    tableDataScore.textContent = score.score;
    //set content to be timer
    // get timer from local storage

    //appended table data to other table row
    tableResult.append(tableDataName, tableDataScore);
    console.log(score);
    //appended table rows to the table
    tableScores.append(tableResult);
  });

  tableContainer.append(tableScores);

  scoresSection.append(h1, tableContainer);

  mainElement.append(scoresSection);
};

//on load show my high scores
window.addEventListener("load", showHighScores);
