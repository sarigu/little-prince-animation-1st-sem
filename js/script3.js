var dotThree = document.querySelector("#dot3");

dotThree.addEventListener("animationend", nextPage);      //load new window on animationend

function nextPage(){
    window.open("sunrise.html", "_self");
}