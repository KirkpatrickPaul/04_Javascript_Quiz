// change timeLeft to change how much time is on the starting timer
var timeLeft = 100;

// The array that holds the questions should always be strings in this order:
//[question, right answer, wrong answer, wrong answer, wrong answer]
// the Javascript checks for "all of the above" answers and moves them to the bottom, but otherwise randomizes answers. 
// Still put the correct answer as object[1] in the array.
var question1 = ["What does HTML stand for?", "HyperText Markup Language", "Hollistic Text and Menu Language", "HyperText Menu Language", "Hippocampus, Thyroid, Metacarpals, and Lymphatic systems"];
var question2 = ["I want to change the color scheme of my wepage. Which would I most likely need to change?", "The CSS", "The HTML", "The Javascript", "The DOM"];
var question3 = ["In Chrome Dev Tools, I'm able to inspect which of the following?", "All of the above", "The HTML", "The Javascript", "Event Listeners"];
var question4 = ["What is Bootstrap's design model?", "Mobile first", "Rounded corners", "Descending order of importance", "Make it obvious"];

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
};

startButtonEl.addEventListener("click", doQuestion1);