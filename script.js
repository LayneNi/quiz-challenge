```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score
```
var pizzaTrivia = [
    {
    question: "Which pizz topping is best?",
    options: ["pepperoni", "sausage", "mushrooms", "extra cheese"],
    correctAnswer: ["pepperoni"]
},
{
    question: "Which pizz topping is best?",
    options: ["pepperoni", "sausage", "mushrooms", "extra cheese"],
    correctAnswer: ["pepperoni"]
},
{
    question: "Which pizz topping is best?",
    options: ["pepperoni", "sausage", "mushrooms", "extra cheese"],
    correctAnswer: ["pepperoni"]
},
{
    question: "Which pizz topping is best?",
    options: ["pepperoni", "sausage", "mushrooms", "extra cheese"],
    correctAnswer: ["pepperoni"]
},
{
    question: "Which pizz topping is best?",
    options: ["pepperoni", "sausage", "mushrooms", "extra cheese"],
    correctAnswer: ["pepperoni"]
}
]

// var pizzaTrivia = {
//     question: "Which pizz topping is best?",
//     options: ["pepperoni", "sausage", "mushrooms", "extra cheese"],
//     correctAnswer: ["pepperoni"]
//




// myPizzaTrivia.options
// myPizzaTrivia.correctAnswer



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

