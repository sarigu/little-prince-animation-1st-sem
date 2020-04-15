var startBtn = document.querySelector("#startBtn");
var sadSong = document.querySelector("#sadsong");

sadSong.play();                             //sound start
startBtn.classList.add("fadeout");              
startBtn.addEventListener("animationend", buttonActivate);

function buttonActivate() {
    //add start button 
    startBtn.classList.add("pointer");
    startBtn.addEventListener("click", start);                          //Open new scene
}  


function start() {
    window.open("main.html", "_self"); //lead to the main page             //new scene
}
