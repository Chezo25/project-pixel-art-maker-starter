// Select color input
// Select size input
let width, height;
let color = document.getElementById('colorpicker');
// When size is submitted by the user, call makeGrid()

function makeGrid() {
    // Your code goes here!

    const gridhth = document.getElementById('inputHeight').value;
    const gridhth = document.getElementById('inputWidth').value;
    const gridhth = document.getElementById('colorPicker').value;

    for (var i = 0; i < gridhth; i++) {
        let mytab = document.createElement("tr");
        mytab.id = "row" + i;

    }


}