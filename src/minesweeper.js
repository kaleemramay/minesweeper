const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
    const board = [];

    for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
      const row = [];
      for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
        row.push(' ');
      }
      board.push(row);
    }
    return board;
}
const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
    //Generates playyer board
    const board = [];
    for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
      const row = [];
      for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
        row.push(null);
      }
      board.push(row);
    }
  
    let numberOfBombsPlaced = 0;
  
    while (numberOfBombsPlaced < numberOfBombs) {
      // This code has the potential to place bombs on top of bombs, this will be fixed with control flow.
      const randomRowIndex = Math.floor(Math.random() * numberOfRows);
      const randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
      if (board[randomRowIndex][randomColumnIndex] !== 'B'){
        board[randomRowIndex][randomColumnIndex] = 'B';
        numberOfBombsPlaced++;
      }
    }
  
    return board;
}
const getNumberOfNeighborBombs = (bombBoard, flipRow, flipColumn) => {
    const offsets= [[0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0 ], [-1, 0]]
    const numberOfRows = bombBoard.length;
    const numberOfColumns = bombBoard[0].length;

    let numberOfSurroundingBombs = 0;
    offsets.forEach(offset => {
        const neightborRow = flipRow + offset[0];
        const neighborColumn = flipColumn + offset[1];
    const numberOfColumns = bombBoard[0].length;
        if (neightborRow >= 0 && neightborRow < numberOfRows && neighborColumn >= 0 && neighborColumn < numberOfColumns) {
            if (bombBoard[neightborRow][neighborColumn] === 'B'){
                numberOfSurroundingBombs++;
            }
        }
    })
    return numberOfSurroundingBombs;
}
const flipTile = (playerBoard, bombBoard, flipRow, flipColumn) => {
    //Check if tile is already flipped, if so, return
    if (playerBoard[flipRow][flipColumn] !== ' ') {
        return;
    }
    //Check if tile is bomb, if so, place bomb on player board
    if (bombBoard[flipRow][flipColumn] === 'B') {
        playerBoard[flipRow][flipColumn] = 'B';
    } else {
        playerBoard[flipRow][flipColumn] = getNumberOfNeighborBombs(bombBoard, flipRow, flipColumn);
    }
}



const printBoard = board => {
    return board.map(row => row.join(' | ')).join('\n');

  };


let numberOfRows = 4;
let numberOfColumns = 4;
let numberOfBombs = 7;
playerBoard = generatePlayerBoard(numberOfRows, numberOfColumns);
bombBoard = generateBombBoard (numberOfRows, numberOfColumns, numberOfBombs);



console.log("Player Board:");
console.log(printBoard(playerBoard));
console.log("Bomb Board:");
console.log(printBoard(bombBoard));
flipTile(playerBoard, bombBoard, 0, 0)
console.log("Flip Tile: ")
console.log(printBoard(playerBoard));