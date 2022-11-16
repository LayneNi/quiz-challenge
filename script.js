// ```
// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score
// ```

// var startPage = {
//   question: "Would you like to start the quiz",
//   options: [Start],
//   correctAnswer: "Start"
// }


var pokemonQuestions = [
  {
  question: "What is Ash's last name?",
  options: ["Ketchup", "Mustard", "Caught em'", "Ketchum"],
  correctAnswer: "Ketchum"
},
{
  question: "Which short, chubby rodent Pokemon is most often seen with ash?",
  options: ["Picka-who?", "Pika-boo", "Pikachu", "Squirtle"],
  correctAnswer: "Pikachu"
},
{
  question: "What is the name of the main antagonst duo? 'Team ___'",
  options: ["Locket", "Sprocket", "Pocket", "Rocket"],
  correctAnswer: "Rocket"
},
{
  question: "Which Pokemon is 'The First Movie' about?",
  options: ["Mew-Two", "Charmander", "Lapras", "Eevee"],
  correctAnswer: "Mew-Two"
},
{
  question: "Which of the following is NOT a Pokemon?",
  options: ["Bulbasaur", "Diglett", "Psyduck", "Psyd-Effect"],
  correctAnswer: "Psyd-Effect"
}
]

// Selectors
var startScreenEl = document.querySelector(".start-screen");
var questionScreenEl = document.querySelector(".question-screen");
var highScoreScreenEl = document.querySelector(".high-score-screen");
var startBtnEl = document.querySelector("#start");
var timerEl = document.querySelector("#timer");
var questionsEl = document.querySelector("#question");
var choicesBtnEl = document.querySelector("#choices");


// Variables
var time = 60;
var intervalId;
var index = 0;
var currentQuestion;
var firstQuestion = pokemonQuestions[0];


startBtnEl.addEventListener("click", function(){
startScreenEl.classList.add("hide");
questionScreenEl.classList.remove("hide");
questionDisplay();
intervalId = setInterval(function(){
  time--;
  timerEl.textContent = time;

  if (time <= 0) {
    quit();
  }
}, 1000)
})

function questionDisplay() {
questionsEl.textContent = firstQuestion.question;
for (var i=0; i < firstQuestion.options.length; i++){
  var choicesBtn = document.createElement("button");
  choicesBtn.textContent = firstQuestion.options[i];
  choicesBtnEl.appendChild(choicesBtn);
}
}




choicesBtnEl.addEventListener("click",function(event){
if (event.target.textContent === firstQuestion.correctAnswer) {
  console.log("works")
} else {
  time = time-10;
} quit()
})





function quit() {
clearInterval(intervalId)
questionScreenEl.classList.add("hide");
highScoreScreenEl.classList.remove("hide");
// hide questions screen and show score and take initials all goes into card-footer
}