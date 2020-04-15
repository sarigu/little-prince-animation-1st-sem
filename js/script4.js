var sun = document.querySelector("img");
var hendrixSong = document.querySelector("#hendrix");
var end = document.querySelector("#end");
var texts = document.querySelector("#texts");
var sound9 = document.querySelector("#sound9");

hendrixSong.play();                     //start song
hendrixSong.volume = 0.5;
sun.classList.add("pointer", "glow");


//to make the fox speak on mouseclick on the sun
sun.addEventListener("click", brighter);

//change sun color
function brighter() {
    sun.classList.remove("pointer");
    sun.classList.add("brighter");
    sun.addEventListener("animationend", foxTalks); 
}

function foxTalks(){                        //fox talks after sun has been clicked
    sun.removeEventListener("click", foxTalks); 
    hendrixSong.volume=0.15;
    sound9.play(); 
    sound9.addEventListener("ended", final); 
}

function final() {                      // outro when soundends, but no new window
    end.classList.add("fadeIn");
    hendrixSong.volume=0.9;
    end.addEventListener("animationend", credits);
}

function credits() {
    end.classList.remove("fadeIn");
    texts.classList.add("roll");
}
