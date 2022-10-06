const colors = ["Green","Red","Aqua","Aquamarine","rgba(132,122,200)","#f15025"];
const btn = document.getElementById('btn'),
color = document.querySelector('.color'),
body = document.querySelector('body'),
container = document.querySelector('.container'),
main = document.querySelector('main');


// adding event listener to the click me button
btn.addEventListener('click',function(){
     const randomNumber = getRandomNumber();
     console.log(randomNumber);
     body.style.backgroundColor = colors[randomNumber];
     container.style.backgroundColor = colors[randomNumber];
     main.style.backgroundColor = colors[randomNumber];
     color.textContent = colors[randomNumber];
     
})
function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}


