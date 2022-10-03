const boxs = document.querySelectorAll('.box');
const btn = document.querySelector('.play');
const winColor = document.querySelector('.win-color');
let colors = [];
let mainColor = GenerateColor();

function GenerateColor () {
    clearColor();
    boxs.forEach(item => {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let colorRandom = `rgb(${r}, ${g}, ${b})`;
        
        item.style.opacity = 1;
        colors.push(item.style.backgroundColor = colorRandom);
    });

    let id = Math.floor(Math.random() * 6);
    let color = colors[id];
    
    winColor.innerHTML = `win color ${color}`;
    return color;
}

function AnalysisColor (e) {
    let colorObg = e.target.style.backgroundColor;
    let target = e.target;

    if (mainColor === colorObg) {
        allColor();
        winColor.innerHTML = 'you win!';
    } else {
        target.style.opacity = 0;
    }
}

function clearColor () {
    colors.splice(0, 6);
}
function allColor () {
    boxs.forEach(item => {
        item.style.backgroundColor = mainColor;
        item.style.opacity = 1;
    });
}

boxs.forEach(item => {
    item.addEventListener('click', AnalysisColor);
});
btn.addEventListener('click', ()=> {mainColor = GenerateColor();}, GenerateColor );

