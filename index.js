var tot = document.querySelectorAll("button").length;

var tom_1 = new Audio('sounds/tom-1.mp3');
var tom_2 = new Audio('sounds/tom-2.mp3');
var tom_3 = new Audio('sounds/tom-3.mp3');
var tom_4 = new Audio('sounds/tom-4.mp3');
var snare = new Audio('sounds/snare.mp3');
var crash = new Audio('sounds/crash.mp3');
var kick_bass = new Audio('sounds/kick-bass.mp3');

for(var i = 0; i < tot; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var choice = this.innerHTML;
        playAudio(choice);
        animate(choice);
    })
    document.addEventListener("keydown", function(i){
        playAudio(i.key);
        animate(i.key);
    })
}

function playAudio(event){
    switch(event){
        case "s":
            tom_1.play();
        break;

        case "d": 
            tom_2.play();
        break;

        case "j":
            tom_3.play();
        break;

        case "k":
            tom_4.play();
        break;

        case "a":
            snare.play();
        break;

        case "l":
            kick_bass.play();
        break;

        case "f": 
            crash.play();
        break;
    }
}

function animate(event){
    var activeButton = document.querySelector("." + event);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    }, 1500);
}
