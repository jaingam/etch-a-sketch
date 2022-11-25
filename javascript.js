const DEFAULT_SIZE = 16

const container = document.getElementById('container');
const size_button = document.getElementById('size-button');

function setGrid(size) {
    container.replaceChildren();
    for (let i = 0; i < size * size; i++) {
        const child = document.createElement('div');
        child.style.backgroundColor = 'white';
        child.style.height = 100 / size + '%';
        //  child.style.width = 100/size+'%';    
        child.classList.add('square');
        child.style.flex = 100 / size + '%';
        child.addEventListener('mouseenter', e => {
            e.target.style.backgroundColor = 'black';
        });
        container.appendChild(child);
    }
}

function onClickSizeButton() {
    let size;
    let cond = false
    while (!cond) {
        size = Number(prompt('Enter the new grid size.', 16))
        if (size == null) {
            alert('Canceled')
        } else if (size > 100 || size < 1 || isNaN(size)) {
            alert('Invalid number. Please enter a value between 1-100')
        }
        else cond = true;
    }
    setGrid(size)

}

size_button.addEventListener('click', onClickSizeButton);
setGrid(DEFAULT_SIZE);