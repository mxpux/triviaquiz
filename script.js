
//GIVEN I am taking a code quiz
var countDown;
var timeLeft = 59;
var introScreenEl = document.getElementById("startscreen")
var quizScreenEl = document.getElementById("containerQuiz")
var endScreenEl = document.getElementById("endScreen")
endScreenEl.style.display= "none"
var questionIndex = 0;
var questionsArray = [];
var submitBtn = document.getElementById("submit")

// WHEN I click the start button
// THEN a timer starts and I am presented with a question


document.getElementById("startbutton").addEventListener("click", function startTimer(){
    countDown = setInterval(function startTimer(){
    document.getElementById("timeCounter").innerHTML = "00:"+timeLeft;
    timeLeft -= 1;
    if(timeLeft === 0){
        clearInterval(countDown);
        document.getElementById("timeCounter").innerHTML = "GAME OVER"
    }
    }, 1000);

    });

// When I click on start
// then question 1 appears

    function startGame() {

        if (introScreenEl.style.display === "block") {
            quizScreenEl.style.display = "none";
        } else {
            quizScreenEl.style.display = "block";
            introScreenEl.style.display = "none"
        }}

var questionList = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choices: ["<js>","<javascript>","<script>","<link rel>"],
        answer: "<script>"
    },

    {
        question: "How to write an IF statement in JavaScript?",
        choices: ["if i = 5","if i = 5 then","if (i == 5)","if(i 5)"],
        answer: "if (i == 5)"
    },

    {
        question: "How do you round the number 7.25, to the nearest integer?",
        choices: ["math.floor(7.25)","(7.25)","7","Math.round(7.25)"],
        answer: "Math.round(7.25) "
    },

    {
        question: "Which event occurs when the user clicks on an HTML element?",
        choices: ["onmouseover","onmouseclick","onchange","onclick"],
        answer: "onclick"
    },

    {
        question: "Which operator is used to assign a value to a variable?",
        choices: ["=","()",";","i++"],
        answer: "="
    }

]


// WHEN I answer a question
// THEN I am presented with another question

function showQuestion() {
    const currentQuestion = questionList[questionIndex]
    let titleDiv = document.getElementById("questions");
    titleDiv.textContent = currentQuestion.question;

    let questionZone = document.querySelector(".listBtn");
    questionZone.innerHTML="";
    
    currentQuestion.choices.forEach(function(element){

    let tempBtn = document.createElement("button");
    tempBtn.classList.add("quizBtn");
    tempBtn.setAttribute("value", element);
    tempBtn.textContent = element;
    tempBtn.onclick = clickButton;
    questionZone.appendChild(tempBtn)
    
    });
}


// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock

function clickButton(){
    const selectedAnswer = this.value;
    const correctAnswer =  questionList[questionIndex].answer;
    console.log(selectedAnswer, correctAnswer)
    if ( correctAnswer !== selectedAnswer){
        timeLeft -= 10;
    }
    questionIndex++;
    if (questionIndex === questionList.length){
    endGame ()}
    else {
         showQuestion()
         }

    }
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over


// THEN I can save my initials and my score
