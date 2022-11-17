// my pokemonQuestions variable is an array of the different questions along with the possible answers and the correct answer for each
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
var submitBtnEl = document.querySelector("#submit");
var initialsEl = document.querySelector("#initials-input");
// var replayBtnEl = document.querySelector("#replay")


// Variables
var time = 60;
var intervalId;
var index = 0;
var currentQuestion = pokemonQuestions[index];

// this event listener is linked to the start button to begin the timer and begin cycling questions
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

// this function makes the questions and diferent answer buttons show on screen
function questionDisplay() {
choicesBtnEl.innerHTML = ""
questionsEl.textContent = pokemonQuestions[index].question;
for (var i=0; i < pokemonQuestions[index].options.length; i++){
  var choicesBtn = document.createElement("button");
  choicesBtn.textContent = pokemonQuestions[index].options[i];
  choicesBtnEl.appendChild(choicesBtn);
}
}
// this will bring you to the "initial input" screen when the quiz is out of questions
// the second if statement makes it so that if you click the button with the value equal to that of the correct answer, you move on with no time penalty
// the else statement makes it so if you get the question inccorect you are penalized 10 seconds off of your time
choicesBtnEl.addEventListener("click",function(event){
if (index === pokemonQuestions.length - 1){
  quit();
  return;
}
if (event.target.textContent === pokemonQuestions[index].correctAnswer) {
} else {
  time = time-10;
  // quit()
} 
index++
questionDisplay();
console.log(index)
}) 


// the quit function brings you to the final page for "initial input"

function quit() {
clearInterval(intervalId)
questionScreenEl.classList.add("hide");
highScoreScreenEl.classList.remove("hide");
var submitBtn = document.createElement("button");
submitBtn.textContent=("Submit");
submitBtnEl.appendChild(submitBtn)

}
// the submit button will enter your initals and score into local storage and display any saved scores to the scoreboard page
submitBtnEl.addEventListener("click",function(event){
  var scoreboard = JSON.parse(localStorage.getItem("scoreboard")) || [];

  var initials = initialsEl.value;
  var newUser = {
    initials,
    time
  }

  scoreboard.push(newUser)
  localStorage.setItem("scoreboard",JSON.stringify(scoreboard));

  window.location.reload();

})
