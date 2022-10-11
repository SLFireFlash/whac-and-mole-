const box = document.querySelectorAll('.box');
const mole = document.querySelector('.mole');
const score =document.getElementById('score');
const timeLeft = document.getElementById('.time-left');


let result;
let time;

function RandomBox()
{
    box.forEach(box =>{
        box.classList.remove('.mole');
    })

    let randBox = box[Math.floor(Math.random()*9)];
    return randBox;

}

function setImg()
{
    RandomBox().innerHTML ='<img src="imgs/box.jpg" alt ="Fill Img">';
}
setImg();