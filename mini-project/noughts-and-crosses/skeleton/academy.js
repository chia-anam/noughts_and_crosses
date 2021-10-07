// Make your changes to store and update game state in this file
let board = [
    [null, null, null], 
    [null, null, null], 
    [null, null, null]
]

let player1 = 'crosses'
let player2 = 'noughts'

move = 'cross'

function playerName(p1Name, p2Name){
    player1 = p1Name
    player2 = p2Name
}

// Take the row and column number between 0 and 2 
// (inclusive) and update the game state.
function takeTurn(row, column) {
    console.log("takeTurn was called with row: "+row+", column:"+column);
    board[row][column] = move
    move = move === 'cross'? 'nought' : 'cross'
}

// Return either "noughts", "crosses" or "nobody" if the game is over.
// Otherwise return null to continue playing.
function checkWinner() {
    console.log("checkWinner was called");
    //check rows
    for (let i = 0; i < 3; i++){
        if (board[i][0] != null && board[i][0] === board[i][1] && board[i][1] === board[i][2]){
            if (board[i][0] === 'nought'){
                return player2
            } else {
                return player1
            }
        }
    }
    //check column
    for (let i = 0; i < 3; i++){
        if (board[0][i] != null && board[0][i] === board[1][i] && board[1][i] === board[2][i]){
            if (board[0][i] === 'nought'){
                return player2
            } else {
                return player1
            }
        }
    }

    //check diagonal
    if (board[0][0] != null && board[0][0] === board[1][1] && board[1][1] === board[2][2]){
        if (board[0][0] === 'nought'){
            return player2
        } else {
            return player1
        }
    }

    if (board[0][2] != null && board[0][2] === board[1][1] && board[1][1] === board[2][0]){
        if (board[0][2] === 'nought'){
            return player2
        } else {
            return player1
        }
    }
    let fullBoard = true
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            if (board[i][j] === null){
                fullBoard = false
            }
        }
    }
    
    if (fullBoard){
        return "nobody"
    }
    return null;
}

// Set the game state back to its original state to play another game.
function resetGame() {
    console.log("resetGame was called");
    board = [
        [null, null, null], 
        [null, null, null], 
        [null, null, null]
    ]
    
    move = 'cross'
}

// Return the current board state with either a "nought" or a "cross" in
// each position. Put a null in a position that hasn't been played yet.
function getBoard() {
    return board;
}

if (typeof exports === 'object') {
    console.log("Running in Node")
    // Node. Does not work with strict CommonJS, but only CommonJS-like 
    // environments that support module.exports, like Node.
    module.exports = {
        takeTurn,
        checkWinner,
        resetGame,
        getBoard,
    }
} else {
    console.log("Running in Browser")
}
