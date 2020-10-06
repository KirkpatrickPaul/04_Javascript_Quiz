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

function doQuestion1() {
  jumbotronEl.remove();
  var questionContainer = document.createElement("div");
  var questionCard = document.createElement("div");
  var cardBody = document.createElement("div");
  var cardTitle = document.createElement("h5");
  var questionValue = document.createElement("p");
  questionContainer.setAttribute("class", "d-flex justify-content-center");
  questionCard.setAttribute("class", "card");
  questionCard.setAttribute("style", "width: 55rem;");
  cardBody.setAttribute("class", "card-body");
  cardTitle.setAttribute("class", "card-title");
  cardTitle.textContent = "Question:";
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(questionValue);
  questionCard.appendChild(cardBody);
  questionContainer.appendChild(questionCard);
  document.body.appendChild(questionContainer);

  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i]
    questionValue.textContent = currentQuestion.question;
    currentQuestion.choices.forEach(function(choice, j){
      var button = document.createElement("button")
      button.setAttribute("class", "btn btn-primary btn-large btn-block justify-content-left");
      button.textContent = choice;
      // value set to choice so it's easy to check for the right answer with rightAnswer
      button.setAttribute("value", choice)
      cardBody.appendChild(button);
    })
  }

};

startButtonEl.addEventListener("click", doQuestion1);