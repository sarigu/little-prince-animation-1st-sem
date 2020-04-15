var document;
var prince = document.querySelector("#prince");
var fox = document.querySelector("#fox");
var fish1 = document.querySelector("#fish1");
var fish1OtherSide = document.querySelector("#fish1OtherSide");
var fish2 = document.querySelector("#fish2");
var fish2OtherSide = document.querySelector("#fish2OtherSide");
var roses = document.querySelector("#roses");
var moon = document.querySelector("#moon");
var star = document.querySelector("#star img");
var tree = document.querySelector("#tree");
var bird = document.querySelector("#bird");
var sadSong = document.querySelector("#sadsong");
var bubbles = document.querySelector("#bubbles");
var sound1 = document.querySelector("#sound1");
var sound2 = document.querySelector("#sound2"); 
var sound3 = document.querySelector("#sound3");
var sound4 = document.querySelector("#sound4");
var sound5 = document.querySelector("#sound5");
var sound6 = document.querySelector("#sound6");
var sound7 = document.querySelector("#sound7");
var sound8 = document.querySelector("#sound8"); 

//playing the song
sadSong.play();                                                                 ////////Scene starts
sadSong.volume = 0.2;

//fish make a bubble sound when clicked
fish1.addEventListener("click", bubbleSound);
fish1OtherSide.addEventListener("click", bubbleSound);

//Beginning of scene - fish is flying around
fish1.classList.add("flying");                                                  ////////Fish start
fish1.addEventListener("mouseover", selected);

//Fish 1 changes direction(enters frame from the left hand side this time) 
fish1.addEventListener("animationend", flyingFromOtherSide);

function flyingFromOtherSide() {
    fish1.classList.remove("flying");
    fish1OtherSide.classList.add("oppositeDirection");
    fish1OtherSide.addEventListener("mouseover", selected);
}

fish1OtherSide.addEventListener("animationend", startAgain);

function startAgain() {
    fish1OtherSide.classList.remove("oppositeDirection");
    fish1.classList.add("flying");
}

//Fish 2 is flying from side to side; here: Direction change
fish2.classList.add("flying2");
fish2.addEventListener("mouseover", selected);
fish2.addEventListener("click", bubbleSound);
fish2OtherSide.addEventListener("click", bubbleSound);

fish2.addEventListener("animationend", flyingBack);

function flyingBack(){
    fish2.classList.remove("flying2");
    fish2OtherSide.classList.add("oppositeDirection2");
    fish2OtherSide.addEventListener("mouseover", selected);
}

fish2OtherSide.addEventListener("animationend", beginAgain);

function beginAgain(){
    fish2OtherSide.classList.remove("oppositeDirection2");
    fish2.classList.add("flying2");
}

function bubbleSound() {
    bubbles.play();
    bubbles.volume=0.5;
}

//Prince comes in
prince.classList.add("moving");                             /////Prince floats in
sound1.play();

//Roses fade once the princes arrives
roses.classList.add("fading");                                  /////Roses fade

prince.addEventListener("animationend", searching);

//after roses disappear, the prince is looking for them
function searching() {
    sadSong.playbackRate=1.5;
    prince.classList.add("backAndForth");
    prince.removeEventListener("animationend", searching);
    prince.addEventListener("animationend", princePos);                ////Search (extra)
}

//positionning the prince and activating fox
function princePos() {
    sadSong.playbackRate=1.0;
    prince.removeEventListener("animationend", princePos);
    prince.classList.remove("backAndForth");
    prince.classList.remove("moving");
    
    //Fox is saying he is under the tree
    sound2.play();                                                  //Aniamtionend: Fox sound


    //ALL EASTER EGGS
    //Moon drops on mouseclick (stays on the ground) 
    moon.addEventListener("mouseover", selected);
    moon.addEventListener("click", fallsDown);

    //bird flies when tree is clicked
    tree.addEventListener("click", flies);
    tree.addEventListener("mouseover", selected);

    //Star shakes when it is clicked on
    star.addEventListener("mouseover", selected);
    star.addEventListener("click", shakes);
   

    prince.classList.add("princePos", "pointer");
    prince.addEventListener("click", princeShake);

    //display the fox behind the tree
    fox.style.display = "block";
    fox.style.zIndex = "1"; //make the fox in front of the tree and the moon

    fox.addEventListener("mouseover", foxSelected);
    fox.addEventListener("click", moveLeft);                                //fox moves after click
}

function moveLeft() {
    //fox moves
    fox.classList.add("moveLeft");
    
    fox.removeEventListener("mouseover", foxSelected);
    fox.removeEventListener("click", moveLeft);

    fox.addEventListener("animationend", foxPos);
}

//positionnong the fox in the scene
function foxPos() {
    fox.classList.remove("moveLeft")

    //positionnong the fox in the scene
    fox.style.marginLeft = "540px";

    //Beginning of conversation
    sound3.play();  
    
    sound3.addEventListener("ended", dialogPart1); 

    fox.removeEventListener("animationend", foxPos);
}

function dialogPart1(){
    sound3.removeEventListener("end", dialogPart1); 
    //prince.classList.remove("princeShake"); 
    sound4.play(); 
    sound4.addEventListener("ended",dialogPart2); 
}

function dialogPart2(){
    sound4.removeEventListener("end",dialogPart2); 
    sound5.play(); 
    //prince.classList.add("princeShake"); 
    sound5.addEventListener("ended",dialogPart3); 
}

function dialogPart3(){
    sound5.removeEventListener("end",dialogPart3); 
    //prince.classList.remove("princeShake"); 
    sound6.play(); 
    sound6.addEventListener("ended", dialogPart4); 
}

function dialogPart4(){
    sound6.removeEventListener("end", dialogPart4); 
    sound7.play(); 
     //prince.classList.remove("princeShake"); 
    sound7.addEventListener("ended",dialogPart5); 
}

function dialogPart5(){
    sound7.removeEventListener("end", dialogPart5);
     //prince.classList.remove("princeShake"); 
    sound8.play(); 
    sound8.addEventListener("ended", followFox);                      //Sound end: follows fox
}

function followFox(){
    prince.classList.add("moveTogether");
    fox.classList.add("moveTogether");
    prince.addEventListener("animationend", toSunrise)              //when at the edge
}


function toSunrise() {
    //leads to the transition screen with 3 dots
    window.open("transition.html", "_self");                            //new window 
}   

function shakes() {
    star.classList.toggle("shaking");
}

function flies() {
    bird.classList.add("fliesAway");

    tree.removeEventListener("click", flies);
    tree.removeEventListener("mouseover", selected);
}

//element glow when overed
function selected() {
    this.classList.add("pointer", "glow");
    this.addEventListener("mouseout", noSelected);
}

//element stop glowing when not overed
function noSelected() {
    this.classList.remove("pointer", "glow");
}

//roses glows and becomes bigger when overed
function foxSelected() {
    this.classList.add("pointer", "glowFox", "zoom");
    this.addEventListener("mouseout", foxNoSelected);
}

//roses stop glowing when not overed
function foxNoSelected() {
    this.classList.remove("pointer", "glowFox", "zoom");
}

function fallsDown() {
    moon.classList.add("falling");
    moon.removeEventListener("mouseover", selected);
    moon.removeEventListener("click", fallsDown);
}


function princeShake() {
    prince.classList.toggle("princeShake");
}
