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


var questionText = document.querySelector("h2");
console.log(document.querySelector("h2"));
var answerButtons = document.querySelector(".btn");
var optionSelected = [];
var correctAnswerSelection = [];
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



//  timer

var timeEl = document.querySelector("#time");
var secondsLeft = 60;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
}

function setCounterText(){
  timeEl.textContent = "Time Remaining: " + secondsLeft;
}
setCounterText()
setTime()
// for setting the buttons with the text for each possible option


function setOptionText(){
for (var i = 0; i < options.length; i++) {
  var choiceButtons = document.querySelectorAll(".choice-buttons li")
  console.log(document.querySelectorAll(".choice-buttons li"))
  choiceButtons.textContent = options;
 }
}
setOptionText()

// setting h2 to have the question present
function setQuestionText(){
  questionText.textContent = question;
}
setQuestionText()



// setting the buttons to run through array
var answerButtons = document.querySelector("pokemonQuestions");

// Write password to the #password input
function nextQuestion(pokemonQuestions) {
  var i=0; i<pokemonQuestions ; i++ ;
  questionText = question
}
// Add event listener to generate button
answerButtons.addEventListener("click", nextQuestion)
if (optionSelected === correctAnswer ){
  nextQuestion()
} 
else {
  nextQuestion()
  seconds--;
}



