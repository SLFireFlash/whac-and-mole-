const boxes =document.querySelectorAll(".box");
const mole = document.querySelector(".mole");

const score = document.getElementById("score-no");
const timeLeft = document.getElementById("timeLeft-no");

function randomBox(){
    boxes.forEach(box =>{
        box.classList.remove('mole');
    })
    let randPos = boxes[Math.floor(Math.random()*9)];
    randPos.classList.add('mole');
    
}

function autoChangeBox(){
    let timer =null;
    timer = setInterval(randomBox,500);
    console.log(timer)
    
}

autoChangeBox()