
//GIVEN I am taking a code quiz


// WHEN I click the start button
// THEN a timer starts and I am presented with a question

document.getElementById("startbutton").addEventListener("click", function startTimer(){
    var timeleft = 59;
    var countDown = setInterval(function startTimer(){
    document.getElementById("timeCounter").innerHTML = "00:"+timeleft;
    timeleft -= 1;
    if(timeleft === 0){
        clearInterval(countDown);
        document.getElementById("timeCounter").innerHTML = "GAME OVER"
    }
    }, 1000);

    });

// When I click on start
// then question 1 appears

var introscreen = document.getElementById("startscreen")
var quizscreen = document.getElementById("containerQuiz")
var questionsArray = [];

    function startGame() {

        if (introscreen.style.display === "block") {
            quizscreen.style.display = "none";
        } else {
            quizscreen.style.display = "block";
            introscreen.style.display = "none"
        }}

var questionList = {
    q1: "what is one. test how long this container can hold text",
    qChoices: ["one","two","c","d"],
    qAnswer: 0,

}

function showQuestion(q) {
    let titleDiv = document.getElementById("questions");
    titleDiv.textContent = q.q1;

    let ansBtn = document.querySelectorAll(".answerBtn");
    
    i=0
    ansBtn.forEach(function(element){
      element.textContent = q.qChoices[i];
      i++
    
    });
}
 
showQuestion(questionList);


// WHEN I answer a question
// THEN I am presented with another question



// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock


// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over


// THEN I can save my initials and my score
