// Select color input
// Select size input
const colorPicker = document.getElementById('colorPicker');
const rowsNumber = document.getElementById('inputHeight');
const cellNumber = document.getElementById('inputWidth');
const pixelCanvas = document.getElementById('pixelCanvas');
const hole = document.getElementById('sizePicker');


//let height = document.getElementById('inputHeight')
//let width = document.getElementById('inputWidth');
//makeGrid(height, width);

// When size is submitted by the user, call makeGrid()
hole.addEventListener('submit', function(e) {
    pixelCanvas.innerHTML = '';
    e.preventDefault();
    makeGrid();

})

pixelCanvas.addEventListener('click', function(e) {
    if (e.target.nodeName === 'TD') {
        e.target.style.backgroundColor = colorPicker.value;
    }

})



function makeGrid() {

    for (let r = 0; r < rowsNumber.value; r++); {
        const row = pixelCanvas.insertRow(0);
        for (let c = 0; c < cellNumber.value; c++) {
            row.insertCell(0);
        }
    }





}