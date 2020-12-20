// Select color input
let paint = document.getElementById('colorPicker');
let canvas = document.getElementById('pixelCanvas');
// Select size input
let tabColumn = document.getElementById('inputHeight');
let wide = document.getElementById('inputWidth');

const selecter = document.querySelector('#sizePicker');

// When size is submitted by the user, call makeGrid()
selecter.addEventListener('submit', evt => {
    evt.preventDefault();
    canvas.innerHTML = '';
    makeGrid(tabColumn.value, wide.value);

})


function makeGrid(tabColumn, wide) {

    for (var i = 0; i < tabColumn; i++) {
        var col = document.createElement('tr');
        canvas.appendChild(col);
        for (var r = 0; r <= wide; r++) {
            let dots = document.createElement("td");
            col.appendChild(dots);
            dots.addEventListener("click", () => {
                let paint = document.getElementById("colorPicker").value
                dots.style.backgroundColor = paint;
            })

        }
    }



}