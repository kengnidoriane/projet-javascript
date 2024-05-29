//variables
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

const btn = document.getElementById('btn');
const spanBtn = document.getElementById('span-color');
const container = document.querySelector('.container');


btn.addEventListener('click', function(){
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
        
    }
    container.style.backgroundColor = hexColor;
    spanBtn.textContent = hexColor;
})


function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}
