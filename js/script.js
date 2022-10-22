const boxes =document.querySelectorAll(".box");
const mole = document.querySelector(".mole");

const score = document.getElementById("score-no");
const timeLeft = document.getElementById("timeLeft-no");

function randomBox(){
    boxes.forEach(box =>{
        box.classList.remove('mole');
    })
    let randPos = boxes[Math.floor(Math.random()*9)];
    return randPos;
    
}

