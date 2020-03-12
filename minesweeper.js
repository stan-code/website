document.addEventListener('DOMContentLoaded', startGame)
document.addEventListener('click', checkForWin)
document.addEventListener('contextmenu', checkForWin)

// Define your `board` object here!
var board = {
  cells: [
    {row: 0, col: 0, isMine: true, isMarked: false, hidden: true, surroundingMines: 0}, {row: 0, col: 1, isMine: false, isMarked: false, hidden: true, surroundingMines: 0}, {row: 0, col: 2, isMine: true, isMarked: false, hidden: true, surroundingMines: 0}, {row: 0, col: 3, isMine: true, isMarked: false, hidden: true, surroundingMines: 0}, 
    {row: 1, col: 0, isMine: false, isMarked: false, hidden: true, surroundingMines: 0}, {row: 1, col: 1, isMine: true, isMarked: false, hidden: true, surroundingMines: 0}, {row: 1, col: 2, isMine: true, isMarked: false, hidden: true, surroundingMines: 0}, {row: 1, col: 3, isMine: true, isMarked: false, hidden: true, surroundingMines: 0},
    {row: 2, col: 0, isMine: true, isMarked: false, hidden: true, surroundingMines: 0}, {row: 2, col: 1, isMine: false, isMarked: false, hidden: true, surroundingMines: 0}, {row: 2, col: 2, isMine: true, isMarked: false, hidden: true, surroundingMines: 0}, {row: 2, col: 3, isMine: true, isMarked: false, hidden: true, surroundingMines: 0},
    {row: 3, col: 0, isMine: false, isMarked: false, hidden: true, surroundingMines: 0}, {row: 3, col: 1, isMine: true, isMarked: false, hidden: true, surroundingMines: 0}, {row: 3, col: 2, isMine: true, isMarked: false, hidden: true, surroundingMines: 0}, {row: 3, col: 3, isMine: true, isMarked: false, hidden: true, surroundingMines: 0}]
    
}

function startGame () {
  // Don't remove this function call: it makes the game work!
  // write a loop that will check each cell for mines..

  for (var i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])
  }
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  var win = 0
    board.cells.forEach(function (checkCell) {
    if (checkCell.isMine && !checkCell.isMarked) {
      return 
    } else if (!checkCell.isMine && checkCell.hidden) {
      return
    } else { win++
    }
    if (win === board.cells.length) {

      lib.displayMessage('You Sweeped The Mines!')
    }
  } )




  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}
 checkForWin();
// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var count = 0
  var surrounding = lib.getSurroundingCells(cell.row, cell.col)
  for (var i = 0; i < surrounding.length; i++) {
    if (surrounding[i].isMine == true) {
      count ++
}
  }
return count;
}