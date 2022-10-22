const boxes =document.querySelectorAll(".box");
const mole = document.querySelector(".mole");

const score = document.getElementById("score-no");
const timeLeft = document.getElementById("TimeLeft-no");

let result =0;
let hitPos;
let timeNow =5;
let timer =null;

function randomBox(){
    boxes.forEach(box =>{
        box.classList.remove('mole');
    })
    let randPos = boxes[Math.floor(Math.random()*9)];
    randPos.classList.add('mole');
    hitPos =randPos.id;
    
}

boxes.forEach(box =>{
    box.addEventListener('mousedown',()=>{
        if(box.id == hitPos){
            result++;
            score.textContent =result
        }
    })
})



function autoChangeBox(){
    timer = setInterval(randomBox,2000);
    
}
function countDonw(){
    timeNow--
    timeLeft.textContent = timeNow

    if(timeNow ==0)
    {
        clearInterval(countDonwId);
        clearInterval(timer)
        hitPos = -1
        boxes.forEach(box =>{
            box.classList.remove('mole');
        })
        alert("Game Over Your score Is: "+ result);

    }

}

let countDonwId =setInterval(countDonw,1000);


autoChangeBox()