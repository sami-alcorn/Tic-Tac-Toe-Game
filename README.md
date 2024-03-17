# Tic-Tac-Toe-Game
This project is a simple tic tac toe game with an alert for the winning player or tie game, and reset button to clear the board. Underneath the board there is also text display which player's turn it is.

Live URL: http://127.0.0.1:5500/

My tic tac toe game is written with HTML, JS, and CSS and utilizes Bootstrap.

My favorite features of this project are the winner alert and the turn display. I had to research ways to make the dispay change accordingly after each time and subsequently discovered ternary operators, and this is my first time using one. Finding a way to determine the winner was a bit of a challenge.

Code snippets:
ternary operator for player turn dispay -

currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
playerTurn.textContent = `Player ${currentPlayer}'s turn`

function to determine winner -

 function checkWinner(player) {
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6] 
 ]
 return winningCombos.some(combo => {
        return combo.every(index => squares[index].textContent === player)
      })
 }

To run this project it's necessary to install Bootstrap and jQuery.
 



