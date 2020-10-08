// change timeLeft to change how much time is on the starting timer.
var timeLeft = 100;

//change penalty to change how much time is subtracted for a wrong answer.
var penalty = 5;

// The choices key inside the object for the questions should always include the correct answer, as well as putting it with the rightAnswer key.

var questions = [
  {
    question: "What does HTML stand for?",
    choices: ["HyperText Markup Language", "Hollistic Text and Menu Language", "HyperText Menu Language", "Hippocampus, Thyroid, Metacarpals, and Lymphatic systems"],
    rightAnswer: "HyperText Markup Language"
  },
  {
    question: "I want to change the color scheme of my wepage. Which would I most likely need to change?",
    choices: ["The HTML", "The CSS", "The Javascript", "The DOM"],
    rightAnswer: "The HTML"
  },
  {
    question: "In Chrome Dev Tools, I'm able to inspect which of the following?",
    choices: ["The HTML", "The Javascript", "Event Listeners", "All of the above"],
    rightAnswer: "All of the above"
  },
  {
    question: "What is Bootstrap's design model?",
    choices: ["Mobile first", "Rounded corners", "Descending order of importance", "Make it obvious"],
    rightAnswer: "Mobile first"
  }
];

var jumbotronEl = document.querySelector(".jumbotron");
var startButtonEl = document.getElementById("start-button");
var questionContainerEl = document.getElementById("question-container")
var timerEl = document.getElementById("timer")
var highScoreEl = document.getElementById("high-score")
var questionCard = document.createElement("div");
var cardBody = document.createElement("div");
var questionTitle = document.createElement("h5");
var answerTitle = document.createElement("h5");
var questionValue = document.createElement("p");
var answerValue = document.createElement("p");
var timerContainer = document.createElement("h4");

var i = 0;
function nextQuestion() {
  while (answerValue.hasChildNodes()) {
    answerValue.removeChild(answerValue.firstChild)
  }
  if (i<questions.length) {
    var currentQuestion = questions[i]
    questionValue.textContent = currentQuestion.question;
    currentQuestion.choices.forEach(function(choice){
      var button = document.createElement("button");
      button.setAttribute("class", "btn btn-primary btn-large btn-block text-left");
      button.textContent = choice;
     
     // ID set to choice so it's easy to check for the right answer with rightAnswer
      if (choice == questions[i].rightAnswer) {

      button.setAttribute("id", "correct");

      };
      answerValue.appendChild(button);
    });
  };
  i++
};
var interval;
function countdown() {
  if (timeLeft > 0) {
    inverval = setInterval(function() {
      timeLeft--;
      timerContainer.setAttribute("class", "alert alert-warning");
      timerContainer.textContent = "Time Remaining: " + timeLeft
    }, 1000);
  } else {
    interval = timeLeft
    leaderboard()
  }
}

function wrongAnswer() {
timeLeft = timeLeft - penalty
timerContainer.setAttribute("class", "alert alert-danger");
timerContainer.textContent = "Time Remaining: " + timeLeft
}

function leaderboard() {

}

function startQuestions() {
  jumbotronEl.remove();
  alert("You have " + timeLeft + " seconds to complete the quiz. Every wrong answer removes five seconds of time. You'll have to be fast to get the high-score!");
  questionContainerEl.setAttribute("class", "d-flex justify-content-center");
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
  questionContainerEl.appendChild(questionCard);
  timerEl.setAttribute("class", "d-flex justify-content-end");
  timerContainer.setAttribute("style", "width: 15 rem")
  timerEl.appendChild(timerContainer);
  timerContainer.setAttribute("class", "alert alert-warning");
  timerContainer.textContent = "Time Remaining: " + timeLeft
  nextQuestion();
  countdown();
};

startButtonEl.addEventListener("click", startQuestions);
cardBody.addEventListener("click", function(event){
  if (event.target.matches("button")) {
    //for right answers
    if (event.target.matches("#correct")) {
      if (i<questions.length){
        nextQuestion()
        return
        } else {
          leaderboard()
          return
        }
      }
        //for wrong answers      
      wrongAnswer()
      if (i<questions.length){
        nextQuestion()
        } else {
          leaderboard()
        }
  }
});
