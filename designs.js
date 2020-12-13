// Select color input
// Select size input
var height, width, color;

// When size is submitted by the user, call makeGrid()
$('sizePicker').submit((event) => {
    event.preventDefault();
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

    for (var i = 1; i <= c; i++) {
        $("#pixelCanvas").append('<tr id=table' + i + '></tr>');
        for (var x = 1; x <= r; x++) {
            $('#table' + i).append('<td></td>');
        }
    }

    //selection of color call
}