var file = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
var rank = ['1', '2', '3', '4', '5', '6', '7', '8'];
var xVal = [0, 1, 2, 3, 4, 5, 6, 7];
var yVal = [0, 1, 2, 3, 4, 5, 6, 7];
var board = document.getElementByID('board');

function returnSquare(x, y) {
    var square =
    {
        file: file[x-1],
        rank: rank[y-1],
        x: xVal[x-1],
        y: yVal[y-1]
    };

    return square;
}

function returnBoard() {
    return 0;
}

function initSquares() {

    return 0
}

