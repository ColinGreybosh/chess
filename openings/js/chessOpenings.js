// Ruy Lopez (Spanish)
var cfg1 = {
    showNotation: false,
    position: 'r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R'
};

var board1 = ChessBoard('board1', cfg1);

// Sicilian
var cfg2 = {
    showNotation: false,
    position: 'rnbqkb1r/pp1ppp1p/5np1/2p5/3NP3/2N5/PPPP1PPP/R1BQKB1R'
};

var board2 = ChessBoard('board2', cfg2);

// King's Gambit
var cfg3 = {
    showNotation: false,
    position: 'rnbqkbnr/pppp1ppp/8/4p3/4PP2/8/PPPP2PP/RNBQKBNR'
};

var board3 = ChessBoard('board3', cfg3);

// Queen's Gambit
var cfg4 = {
    showNotation: false,
    position: 'rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR'
};

var board4 = ChessBoard('board4', cfg4);

// King's Indian Defense
var cfg5 = {
    showNotation: false,
    position: 'rnbqk2r/ppppppbp/5np1/8/2PP4/2N5/PP2PPPP/R1BQKBNR'
};

var board5 = ChessBoard('board5', cfg5);

$(window).resize(board.resize);
