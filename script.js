// change timeLeft to change how much time is on the starting timer
var timeLeft = 100

// The array that holds the questions should always be strings in this order:
//[question, right answer, wrong answer, wrong answer, wrong answer]
// the Javascript chest for "all of the above" answers and moves them to the bottom, but otherwise randomizes answers. 
// Still put the correct answer as object[1] in the array.
var question1 = ["What does HTML stand for?", "HyperText Markup Language", "Hollistic Text and Menu Language", "HyperText Menu Language", "Hippocampus, Thyroid, Metacarpals, and Lymphatic systems"]
var question2 = ["I want to change the color scheme of my wepage. Which would I most likely need to change?", "The CSS", "The HTML", "The Javascript", "The DOM"]
var question3 = ["In the DOM, I'm able to inspect which of the following?", "All of the above", "The style of elements", "The HTML of elements", "Event Listeners"]
var question4 = ["What is Bootstrap's design model?", "Mobile first", "Rounded corners", "Descending order of importance", "Make it obvious"]

var jumbotron = document.querySelector(".jumbotron")
var startButton = document.getElementById("start-button")


function createQuestion1() {
  jumbotron.remove

}

startButton.addEventListener("click", question1)