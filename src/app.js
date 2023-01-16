const containerEl = document.querySelector('.container');

for (let index = 0; index < 30; index++) {
    const colorContainerEl = document.createElement('div');
    colorContainerEl.classList.add('color-container');
    containerEl.appendChild(colorContainerEl);  
}

randomColor();

function randomColor() {
    const chars = '012345679abcdef'
    const colorCodeLength =  6;
    let colorCode = ''
    for (let index = 0; index < colorCodeLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        colorCode += chars.substring(randomNum, randomNum + 1);
        console.log(colorCode);
    }
}