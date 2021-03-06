function makeBlanks(n) {
    let boxArray = []
    const boxWidth = 380/n
    for (i = 1; i <= (n*n); i++) {
        boxArray.push(document.createElement('div'));
    }
    boxArray.forEach((box) => {
        box.className = 'boxes';
        box.style.cssText = `width: ${boxWidth}px; height: ${boxWidth}px`
        container.style.cssText = `grid-template-columns: repeat(${n}, ${boxWidth}px);`
        container.appendChild(box);
    });
    return;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color
}

function rainbowize(e) {
    this.className = 'boxes'
    this.style['background-color'] = getRandomColor()
}

function colorIn(color) {
    const domBoxes = document.getElementsByClassName('boxes')
    if (color === 'rainbow') {
        Array.from(domBoxes).forEach((box) => {
            box.addEventListener('mouseover', rainbowize)})
    }
    else if (color === 'erase') {
        Array.from(domBoxes).forEach((box) => {
            box.removeEventListener('mouseover', rainbowize)
            box.addEventListener('mouseover', function(e) {
                box.className = 'boxes'
                box.style['background-color'] = 'white'
        })})
    }
    else {
        Array.from(domBoxes).forEach((box) => {
            box.removeEventListener('mouseover', rainbowize)
            box.addEventListener('mouseover', function(e) {
                box.classList.add('black')
                box.style['background-color'] = 'black'
        })})
    }
}

const container = document.getElementById('container');

makeBlanks(16);
colorIn('black');

const rainbowButton = document.getElementById('rainbow');
rainbowButton.onclick = function() {colorIn('rainbow')};

const blackButton = document.getElementById('black');
blackButton.onclick = function() {colorIn('black')};

const eraseButton = document.getElementById('erase');
eraseButton.onclick = function() {colorIn('erase')};

const newGridButton = document.getElementById('newgrid');
newGridButton.onclick = function() {
    container.textContent = ''
    makeBlanks(prompt('Insert new grid width (default is 16)'));
    colorIn('black');
};