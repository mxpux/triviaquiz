const highscoreZone = document.getElementById("highscoreZone");
//pull from local storage
const highscores = JSON.parse(localStorage.getItem("highScores"));
highscores.forEach(function(score){
    let tempLi = document.createElement("li")
    tempLi.textContent = score.initials + " : " + score.score;
    highscoreZone.append(tempLi);

})