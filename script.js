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
var submitBtnEl = document.querySelector("#submit")
// var replayBtnEl = document.querySelector("#replay")


// Variables
var time = 60;
var intervalId;
var index = 0;
var currentQuestion = pokemonQuestions[index];


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
choicesBtnEl.innerHTML = ""
questionsEl.textContent = pokemonQuestions[index].question;
for (var i=0; i < pokemonQuestions[index].options.length; i++){
  var choicesBtn = document.createElement("button");
  choicesBtn.textContent = pokemonQuestions[index].options[i];
  choicesBtnEl.appendChild(choicesBtn);
}
}

choicesBtnEl.addEventListener("click",function(event){
if (index === pokemonQuestions.length - 1){
  quit();
  return;
}
if (event.target.textContent === pokemonQuestions[index].correctAnswer) {
  console.log("works")
} else {
  time = time-10;
  // quit()
} 
index++
questionDisplay();
console.log(index)
}) 





function quit() {
clearInterval(intervalId)
questionScreenEl.classList.add("hide");
highScoreScreenEl.classList.remove("hide");
var submitBtn = document.createElement("button");
submitBtn.textContent=("Submit");
submitBtnEl.appendChild(submitBtn)
// var replayBtn = document.createElement("button");
// replayBtn.textContent=("Replay");
// replayBtnEl.appendChild(replayBtn);
}

submitBtnEl.addEventListener("click",function(event){
  highScoreScreenEl.classList.add("hide");
  startScreenEl.classList.remove("hide");
  questionScreenEl.classList.add("hide");
})




// replayBtnEl.addEventListener("click", function(){
//   startScreenEl.classList.add("hide");
//   questionScreenEl.classList.remove("hide");
//   highScoreScreenEl.classList.add("hide");
//   questionDisplay();
// })