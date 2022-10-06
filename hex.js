const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const btn = document.getElementById('btn'),
color = document.querySelector('.color'),
body = document.querySelector('body'),
container = document.querySelector('.container'),
main = document.querySelector('main');


// adding event listener on click me
btn.addEventListener('click',function(){
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor+= hex[getRandomNumber()];

        
    }
    body.style.backgroundColor = hexColor;
    container.style.backgroundColor = hexColor;
    main.style.backgroundColor = hexColor;
    color.textContent = hexColor;
})
function getRandomNumber(){
    return Math.floor(Math.random()*hex.length);
}


// copying the hex value to clipboard
color.addEventListener('click',function(){
    // color.innerText.select();
    navigator.clipboard.writeText(color.innerText);
    alert("Copied the text: " + color.innerText)
})