
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

    console.log(timeCounter);
});

// When I click on start
// then question 1 appears
// const startingQuiz = document.getElementById("containerQuiz")
// const introScreen = document.getElementById("startscreen")


    function startGame() {
        var introscreen = document.getElementById("startscreen")
        var quizscreen = document.getElementById("containerQuiz")


        if (introscreen.style.display === "block") {
            quizscreen.style.display = "none";
        } else {
            quizscreen.style.display = "block";
        }
      }
      console.log("started")
    
    
 
  
    

// WHEN I answer a question
// THEN I am presented with another question


// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock


// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over


// THEN I can save my initials and my score
