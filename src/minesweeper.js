const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
    let row = [];
    let playerBoard= [];
    for (c = 0; c < numberOfColumns; c++){
        row.push(' ');
    }
    for (r = 0; r < numberOfRows; r++){
        playerBoard.push(row);
    }
    return playerBoard
}
const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
    let row = [];
    let bombBoard= [];
    for (c = 0; c < numberOfColumns; c++){
        row.push(null);
    }
    for (r = 0; r < numberOfRows; r++){
        bombBoard.push(row);
    }
    let numberOfBombsPlaced = 0; 
    while (numberOfBombsPlaced < numberOfBombs){
        let randomRowIndex = Math.floor(Math.random()* numberOfRows);
        let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
        bombBoard[randomRowIndex][randomColumnIndex] = 'B';
        numberOfBombsPlaced++;
        //An important note: The code in your while loop has the potential to place bombs on top of already existing bombs. This will be fixed when you learn about control flow.        
    }

    return bombBoard
}

const printBoard = board => {
    console.log(board.map(row => row.join(' | ')).join('\n'));
  };


playerBoard = generatePlayerBoard(3, 4);
bombBoard = generateBombBoard (5, 5, 2)
console.log("Player Board:")
console.log(printBoard(playerBoard));
console.log("Bomb Board:")
console.log(printBoard(bombBoard));

// console.log(playerBoard)



// const printBoard = board => {
//     // Current Board
//     //console.log(`Current Board: ${board}`);
//     console.log("Current Board: ");
//     console.log(board[0].join(' | '));
//     console.log(board[1].join(' | '));
//     console.log(board[2].join(' | '));
// }

// let board = [];
// board = [
//     [' ', ' ', ' '],
//     [' ', ' ', ' '],
//     [' ', ' ', ' ']
// ]

// printBoard(board);

// board[0][1] = '1'
// board[2][2] = 'B'

// printBoard(board);
