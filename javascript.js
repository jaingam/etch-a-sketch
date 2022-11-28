const DEFAULT_SIZE = 16
const DEFAULT_COLOR = '#C51162'

const container = document.getElementById('container');
const size_button = document.getElementById('size-button');
const clear_button = document.getElementById('clear-button');
const colorpicker = document.getElementById('colorpicker')
const colorpicker_label = document.getElementById('colorpicker-label')

let current_size = DEFAULT_SIZE;
let current_color = DEFAULT_COLOR
function setGrid(size) {
    container.replaceChildren();
    for (let i = 0; i < size * size; i++) {
        const child = document.createElement('div');
        child.style.backgroundColor = '#FCE4EC';
        child.style.height = 100 / size + '%';
        //  child.style.width = 100/size+'%';    
        child.classList.add('square');
        child.style.flex = 100 / size + '%';
        child.addEventListener('mouseenter', e => {
            e.target.style.backgroundColor = current_color;
        });
        container.appendChild(child);
    }
}

function onClickSizeButton() {
    let size;
    let cond = false
    while (!cond) {
        current_size = size = Number(prompt('Enter the new grid size.', 16))
        if (size == null) {
            alert('Canceled')
        } else if (size > 100 || size < 1 || isNaN(size)) {
            alert('Invalid number. Please enter a value between 1-100')
        }
        else cond = true;
    }
    setGrid(current_size);

}


function onClickClearButton() {
    setGrid(current_size);

}

function onSelectColor(event) {
    current_color = event.target.value;
 //   colorpicker_label.style.backgroundColor='#F06292';
}

function onClickColorPicker() {    
}

function onCloseColorPicker(event) {    
    current_color = event.target.value
}

size_button.addEventListener('click', onClickSizeButton);
clear_button.addEventListener('click', onClickClearButton)
colorpicker.value = DEFAULT_COLOR;
colorpicker.addEventListener('click', onClickColorPicker);
colorpicker.addEventListener('input', onSelectColor);
colorpicker.addEventListener('change', onCloseColorPicker);
colorpicker.select();
setGrid(DEFAULT_SIZE);