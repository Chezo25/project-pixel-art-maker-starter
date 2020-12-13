// Select color input
// Select size input
let width, height, color;

// When size is submitted by the user, call makeGrid()
$('SizePicker').submit((evt) => {
    evt.preventDefault();
    height = $; { '#inputHeight'; }
    val();
    width = $; { '#inputWidth'; }
    val();
    makeGrid(width, height);
    //console.log(`Height:${height}and width:${width}`);
})





function makeGrid(r, c) {
    $('tr').remove();

    // Your code goes here!
    let grid = document.getElementById('pixelCanvas');

    for (let i = 1; i <= c; i++) {
        $('#grid').append('<tr id=table' + i + '></tr>');

        for (let x = 1; x <= r; x++) {
            $('#table' + i).append('<td></td>');
        }
    }
}