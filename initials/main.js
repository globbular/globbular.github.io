const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'W'];
const letter_length = 20;
const letterElem = document.getElementById("roundLetter");
const fadeGroup = document.getElementById("fade");
const startButton = document.getElementById("roundStarter");
var firstPlay = true;

function startRound() {
    resetRound();
    if (firstPlay) {
        firstPlay = false;
        startButton.innerText = "▶ Play again";
    }
    
    let first_letter_to_use = letters[Math.floor(Math.random() * letter_length)];
    let second_letter_to_use = letters[Math.floor(Math.random() * letter_length)];

    letterElem.innerText = ""+ first_letter_to_use + second_letter_to_use;

    fadeGroup.classList.add("fadein");

    setTimeout(function() {
        startButton.style.display = "inline-block";
    },5000);
}
function resetRound() {
    startButton.style.display = "none";
    fadeGroup.classList.remove("fadein");
    void fadeGroup.offsetWidth;

    letterElem.innerText = "";

}