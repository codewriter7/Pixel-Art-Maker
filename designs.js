const sizePicker = document.getElementById('sizePicker');
const canvas = document.getElementById('pixelCanvas');

/**
* Remove canvas from the window
*/
function clearTable() {
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
}

/**
* Reset the form and call clearTable
*/
function resetForm() {
    sizePicker.reset();
    if (canvas.firstChild) { // Check if a canvas already exists
        clearTable();
    }
}

/**
* Set pixel color to currently selected color picker color
*/
function colorPixel(event) {
    if (event.target.nodeName === 'TD') {
        const square = event.target;
        const colorPicker = document.getElementById('colorPicker');
        square.style.backgroundColor = colorPicker.value;
    }
}

/**
* Draw the canvas
*/
function makeGrid(height, width) {
    for (let x = 1; x <= height; x++) {
        const newTr = document.createElement('tr');
        for (let y = 1; y <= width; y++) {
            const newTd = document.createElement('td');
            newTr.appendChild(newTd);
        }
        canvas.appendChild(newTr);
    }
}

/**
* Collect grid dimensions on click and call makeGrid
*/
function submitForm(event) {
    if (canvas.firstChild) { // Check if a canvas already exists
        clearTable();
    }
    const gridHeight = sizePicker.elements[0].value;
    const gridWidth = sizePicker.elements[1].value;
    event.preventDefault();
    makeGrid(gridHeight, gridWidth);
}

sizePicker.addEventListener('submit', submitForm);

canvas.addEventListener('click', colorPixel);

    }
}

// Collect grid dimensions on click and call makeGrid
function submitForm(event) {
    if (canvas.firstChild) { // Check if a canvas already exists
        clearTable();
    }
    const gridHeight = sizePicker.elements[0].value;
    const gridWidth = sizePicker.elements[1].value;
    event.preventDefault();
    makeGrid(gridHeight, gridWidth);
}

sizePicker.addEventListener('submit', submitForm);

canvas.addEventListener('click', colorPixel);
