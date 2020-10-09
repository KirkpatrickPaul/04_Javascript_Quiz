// change TOTAL_TIME to change how much time is on the starting timer.
var TOTAL_TIME = 100;

//change PENALTY to change how much time is subtracted for a wrong answer.
var PENALTY = 5;

// The choices key inside the object for the questions should always include the correct answer, as well as putting it with the rightAnswer key.

var questions = [
  {
    question: "What does HTML stand for?",
    choices: [
      "HyperText Markup Language",
      "Hollistic Text and Menu Language",
      "HyperText Menu Language",
      "Hippocampus, Thyroid, Metacarpals, and Lymphatic systems",
    ],
    rightAnswer: "HyperText Markup Language",
  },
  {
    question:
      "I want to change the color scheme of my wepage. Which would I most likely need to change?",
    choices: ["The HTML", "The CSS", "The Javascript", "The DOM"],
    rightAnswer: "The CSS",
  },
  {
    question:
      "In Chrome Dev Tools, I'm able to inspect which of the following?",
    choices: [
      "The HTML",
      "The Javascript",
      "Event Listeners",
      "All of the above",
    ],
    rightAnswer: "All of the above",
  },
  {
    question: "What is Bootstrap's design model?",
    choices: [
      "Mobile first",
      "Rounded corners",
      "Descending order of importance",
      "Make it obvious",
    ],
    rightAnswer: "Mobile first",
  },
];

var timeLeft = 1;
var timerWorking = "idle";
var jumbotronEl = document.querySelector(".jumbotron");
var startButtonEl = document.getElementById("start-button");
var ContainerEl = document.getElementById("container");
var timerEl = document.getElementById("timer");
var questionCard = document.createElement("div");
var cardBody = document.createElement("div");
var questionTitle = document.createElement("h5");
var answerTitle = document.createElement("h5");
var questionValue = document.createElement("p");
var answerValue = document.createElement("p");
var timerContainer = document.createElement("h4");
var leaderboardTitle = document.createElement("h4");
var leaderboardBody = document.createElement("h5");

//I don't like using an iterator outside of the loop, but it's the only way I could get it to work in the time constraints.
var i = 0;
function nextQuestion() {
  while (answerValue.hasChildNodes()) {
    answerValue.removeChild(answerValue.firstChild);
  }
  if (i < questions.length) {
    var currentQuestion = questions[i];
    questionValue.textContent = currentQuestion.question;
    currentQuestion.choices.forEach(function (choice) {
      var button = document.createElement("button");
      button.setAttribute(
        "class",
        "btn btn-primary btn-large btn-block text-left"
      );
      button.textContent = choice;

      // ID set to choice so it's easy to check for the right answer with rightAnswer
      if (choice == questions[i].rightAnswer) {
        button.setAttribute("id", "correct");
      }
      answerValue.appendChild(button);
    });
  }
  i++;
}
var inverval = setInterval(function () {
  if (timerWorking === "working") {
    timeLeft--;
    timerContainer.setAttribute("class", "alert alert-warning");
    timerContainer.textContent = "Time Remaining: " + timeLeft;
    console.log(timeLeft);
  }
  if (timeLeft <= 0) {
    timerWorking = "idle";
    leaderboard();
  }
}, 1000);
// function countdown() {
//   if (timeLeft > 0) {
//     return;
//   } else {
//     leaderboard();
//   }
// }

function wrongAnswer() {
  timeLeft = timeLeft - PENALTY;
  timerContainer.setAttribute("class", "alert alert-danger");
  timerContainer.textContent = "Time Remaining: " + timeLeft;
}

function leaderboard() {
  timerEl.remove();
  questionCard.remove();
  ContainerEl.setAttribute("class", "container");
  leaderboardTitle.setAttribute("class", "card-title text-center");
  var leaderboardEmpty = document.createElement("br");
  leaderboardEmpty.setAttribute("class", "container-fluid");
  // leaderboardEmpty.textContent = "  ";
  leaderboardBody.setAttribute("class", "d-flex row justify-content-center");
  leaderboardTitle.textContent = "Leaderboard!";
  ContainerEl.appendChild(leaderboardTitle);
  ContainerEl.appendChild(leaderboardEmpty);
  ContainerEl.appendChild(leaderboardBody);
  var theLeaders = window.localStorage.getItem("leaderboard");
  if (!theLeaders || theLeaders === "[]") {
    var userName = prompt(
      "Congratulations! Your score is " +
        timeLeft +
        "! And you are the first entry on the leaderboard! Please enter your name!"
    );
    if (userName !== false) {
      theLeaders = [{ name: userName, score: timeLeft }];
      theLeaders.forEach(function (object) {
        var nameEntry = document.createElement("h5");
        nameEntry.setAttribute("class", "float-beginning text-right");
        nameEntry.textContent = object.name;
        var scoreEntry = document.createElement("h5");
        scoreEntry.setAttribute("class", "float-end text-left");
        scoreEntry.textContent = object.score;
        leaderboardBody.appendChild(nameEntry);
        leaderboardBody.appendChild(scoreEntry);
      });
      theLeaders = JSON.stringify(theLeaders);
      window.localStorage.setItem("leaderboard", theLeaders);
    } else {
      theLeaders = [];
      theLeaders = JSON.stringify(theLeaders);
      window.localStorage.setItem("leaderboard", theLeaders);
    }
  } else {
    theLeaders = JSON.parse(theLeaders);
    var userName = prompt(
      "Congratulations! Your score is " +
        timeLeft +
        "! Please enter your name and check out the other players!"
    );
    if (userName !== false) {
      theLeaders.unshift({ name: userName, score: timeLeft });
      theLeaders.forEach(function (object) {
        var nameEntry = document.createElement("h5");
        nameEntry.setAttribute("class", "text-right mr-5");
        nameEntry.textContent = object.name + ":";
        var scoreEntry = document.createElement("h5");
        scoreEntry.setAttribute("class", "text-left");
        scoreEntry.textContent = object.score;
        var emptySpace = document.createElement("div");
        emptySpace.setAttribute("class", "container-fluid");
        emptySpace.textContent = "     ";
        leaderboardBody.appendChild(nameEntry);
        leaderboardBody.appendChild(scoreEntry);
        leaderboardBody.appendChild(emptySpace);
      });
      theLeaders = JSON.stringify(theLeaders);
      window.localStorage.setItem("leaderboard", theLeaders);
    }
  }
}

function startQuestions() {
  jumbotronEl.remove();
  alert(
    "You have " +
      TOTAL_TIME +
      " seconds to complete the quiz. Every wrong answer removes five seconds of time. You'll have to be fast to get the high-score!"
  );
  ContainerEl.setAttribute("class", "d-flex container justify-content-center");
  questionCard.setAttribute("class", "card");
  questionCard.setAttribute("style", "width: 55rem;");
  cardBody.setAttribute("class", "card-body");
  questionTitle.setAttribute("class", "card-title");
  answerTitle.setAttribute("class", "card-title");
  questionTitle.textContent = "Question:";
  answerTitle.textContent = "Answer:";
  cardBody.appendChild(questionTitle);
  cardBody.appendChild(questionValue);
  cardBody.appendChild(answerTitle);
  cardBody.appendChild(answerValue);
  questionCard.appendChild(cardBody);
  ContainerEl.appendChild(questionCard);
  timerEl.setAttribute("class", "d-flex justify-content-end");
  timerContainer.setAttribute("style", "width: 15 rem");
  timerEl.appendChild(timerContainer);
  timerContainer.setAttribute("class", "alert alert-warning");
  timerContainer.textContent = "Time Remaining: " + TOTAL_TIME;
  timeLeft = TOTAL_TIME;
  timerWorking = "working";
  nextQuestion();
}

startButtonEl.addEventListener("click", startQuestions);
cardBody.addEventListener("click", function (event) {
  if (event.target.matches("button")) {
    //for right answers
    if (event.target.matches("#correct")) {
      if (i < questions.length) {
        nextQuestion();
        return;
      } else {
        timerWorking = "idle";
        leaderboard();
        return;
      }
    }
    //for wrong answers
    wrongAnswer();
    if (i < questions.length) {
      nextQuestion();
    } else {
      timerWorking = "idle";
      leaderboard();
    }
  }
});
