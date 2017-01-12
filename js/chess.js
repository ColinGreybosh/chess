// Declare arrays for chess board locations
var horizontal  = [0, 1, 2, 3, 4, 5, 6, 7];
var file        = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
var vertical    = [0, 1, 2, 3, 4, 5, 6, 7];
var rank        = ['1', '2', '3', '4', '5', '6', '7', '8'];

var board       = document.getElementById('board');

function returnBoard() {
    // Declare empty object
    var boardInfo = {};
    for (i = 0; i < 8; i++) {
        for (j = 0; j < 8; j++) {
            // Loop through all combinations of (0-7, 0-7)
            boardInfo[returnSquare(horizontal[j], vertical[i]).id] = returnSquare(j, i);
            // Append data from returnSquare to the boardInfo object
        }
    }
    return boardInfo;
}

function returnSquare(x, y) {
    // Creates an object of info on each square of the board
    var squareInfo =
    {
        file:     file[x],
        fileNum:  horizontal[x],
        id:       file[x] + rank[y],
        occupied: isOccupied(x, y),
        piece:    pieceType(x, y),
        rank:     rank[y],
        rankNum:  vertical[y],
    };
    return squareInfo;
}

function isOccupied(x, y) {
    var square = document.getElementById(file[x] + rank[y]);
    if (square.children[0].className == 'occupied') {
        return true;
    } else {
        return false;
    };
}

function pieceType(x, y) {
    var square = document.getElementById(file[x] + rank[y]);
    if (isOccupied(x, y) == false) {
        return 'none';
    } else {
        return square.children[0].id;
    }
}
