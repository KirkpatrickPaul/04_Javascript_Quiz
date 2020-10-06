// change timeLeft to change how much time is on the starting timer
var timeLeft = 100;

// The choices key inside the object for the questions should always include the correct answer, as well as putting it with the rightAnswer key.

var questions = [
  {
    question: "What does HTML stand for?",
    choices: ["HyperText Markup Language", "Hollistic Text and Menu Language", "HyperText Menu Language", "Hippocampus, Thyroid, Metacarpals, and Lymphatic systems"],
    rightAnswer: "HyperText Markup Language"
  },
  {
    question: "I want to change the color scheme of my wepage. Which would I most likely need to change?",
    choices: ["The CSS", "The HTML", "The Javascript", "The DOM"],
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

function wrongAnswer() {

}

function doQuestions() {
  jumbotronEl.remove();
  var questionCard = document.createElement("div");
  var cardBody = document.createElement("div");
  var questionTitle = document.createElement("h5");
  var answerTitle = document.createElement("h5");
  var questionValue = document.createElement("p");
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
  cardBody.appendChild(answerTitle)
  questionCard.appendChild(cardBody);
  questionContainerEl.appendChild(questionCard);

  var i = 0
  function nextQuestion() {
    if (i<questions.length) {
      var currentQuestion = questions[i]
      questionValue.textContent = currentQuestion.question;
      currentQuestion.choices.forEach(function(choice){
        var button = document.createElement("button");
        button.setAttribute("class", "btn btn-primary btn-large btn-block justify-content-left");
        button.textContent = choice;
        // value set to choice so it's easy to check for the right answer with rightAnswer
        button.setAttribute("value", choice);
        cardBody.appendChild(button);
      });
    };
  };
  nextQuestion()
  cardBody.addEventListener("click", function(event){
    if (event.target.matches("button")) {
      for (var j=0; j<cardBody.childElementCount; j++) {
        cardBody.removeChild[j+2];
      }
      nextQuestion()
    }
  });
};

startButtonEl.addEventListener("click", doQuestions);
// cardBody.addEventListener("click", function(){
//   if (target.matches("btn")) {
//     console.log("click")
//   }
// });