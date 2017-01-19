// This function is executed as soon as the DOM is loaded;
// it checks if the screen is currently landscape or portrait.
// Depending on orientation, it then gives the chessboard
// div a certain inline style to be read by chessboard.js.
$(function() {
    if (window.screen.availWidth >= window.screen.availHeight) {
        // If the screen is wider than it is high, do this
        document.getElementById('board').style = 'width: 80vh';
    } else if (window.screen.availWidth < window.screen.availHeight) {
        // If the screen is higher than it is wide, do this instead
        document.getElementById('board').style = 'width: 80vw';
    } else {
        alert('ERROR: Could not set chessboard width!');
    };
});

// This function is executed after the board styling
// is set by the function above
function init() {

    var board,
    game = new Chess(),
    statusEl = $('#player');

    var removeGreySquares = function() {
        $('#board .square-55d63').css('background', '');
    };

    var greySquare = function(square) {
        var squareEl = $('#board .square-' + square);
        var background = '#a9a9a9';
        if (squareEl.hasClass('black-3c85d') === true) {
             background = '#696969';
        }
        squareEl.css('background', background);
    };

    var onDragStart = function(source, piece) {
        // do not pick up pieces if the game is over
        // or if it's not that side's turn
        if (game.game_over() === true ||
        (game.turn() === 'w' && piece.search(/^b/) !== -1) ||
        (game.turn() === 'b' && piece.search(/^w/) !== -1)) {
        return false;
        }
    };

    var onDrop = function(source, target) {
        removeGreySquares();
        // see if the move is legal
        var move = game.move({
            from: source,
            to: target,
            promotion: 'q' // NOTE: always promote to a queen for example simplicity
        });
        // illegal move
        if (move === null) return 'snapback';
    };

    var onMouseoverSquare = function(square, piece) {
        // get list of possible moves for this square
        var moves = game.moves({
        square: square,
        verbose: true
    });

    // exit if there are no moves available for this square
    if (moves.length === 0) return;

    // highlight the square they moused over
    greySquare(square);

    // highlight the possible squares for this piece
    for (var i = 0; i < moves.length; i++) {
        greySquare(moves[i].to);
        }
    };

    var onMouseoutSquare = function(square, piece) {
        removeGreySquares();
    };

    var onSnapEnd = function() {
        board.position(game.fen());
    };

    var cfg = {
        pieceTheme: 'img/chesspieces/wikipedia/{piece}.png',
        draggable: true,
        position: 'start',
        onDragStart: onDragStart,
        onDrop: onDrop,
        onMouseoutSquare: onMouseoutSquare,
        onMouseoverSquare: onMouseoverSquare,
        onSnapEnd: onSnapEnd
    };

    board = ChessBoard('board', cfg);
}

$(function() {
    init();
})

var restart = function() {
    init();
}

$('#restartBtn').on('click', restart);
