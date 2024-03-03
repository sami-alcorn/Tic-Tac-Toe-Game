   /*declares winner alert variable*/
   let winneralert = document.getElementById("alert-winner")
   /*array of all the squares*/
    let squares = [document.getElementById("square-0"), document.getElementById("square-1"), 
        document.getElementById("square-2"), document.getElementById("square-3"),
        document.getElementById("square-4"), document.getElementById("square-5"),
        document.getElementById("square-6"), document.getElementById("square-7"),
        document.getElementById("square-8")]
    /*game always starts on player X, set winner variable to null, declare playerturn*/
    let currentPlayer = 'X'    
    let winner = null
    let playerTurn = document.getElementById('turn')
   /*function that is called when a square is clicked on, determines which square based on 
   its index in the array*/
    function squareClicked(index) {
        /*if there is no winner and the square is empty, the square that has been
        clicked on will display the letter of the current player*/
        if (winner || squares[index].textContent !== '') 
        return
        squares[index].textContent = currentPlayer
        /*every time a turn is taken it checks for a winner, if the turn that was just played
        won the game, there is an alert that the current player won*/
      if (checkWinner(currentPlayer)) {
        winner = currentPlayer
        winneralert.textContent = `Player ${currentPlayer} wins!`
      } 
     /*if there is no winner, it checks for a tie, if there is a tie it alerts that*/
      else if (checkTie()) {
        winneralert.textContent = `It's a tie!`
      } 
      /*if there is no winner and it is not a tie, the div displaying whose turn it is
      will change to the other player - used a ternary operator*/
      else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
        playerTurn.textContent = `Player ${currentPlayer}'s turn`
      }
    }
    /*function to check for a winner, takes the parameter of player to see if that
    player that just took their turn has squares matching the one of the possible 
    winning combinations*/
    function checkWinner(player) {
      /*array of the all the possible winning square combinations*/  
      const winningCombos = [
      /*row combinations*/
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
      /*column combinations*/  
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
       /*diagonal combinations*/ 
        [0, 4, 8], [2, 4, 6] 
      ]
      /* the some() method checks the array of winning combinations and when it finds one,
      the every() method is called to check to see if all te squares in that combo are filled
      in by the same player.
      it returns the winner based on the letter inside the squares of the winning array, 
      so if all the squares in the winning combo have x's, player x is the winner */
      return winningCombos.some(combo => {
        return combo.every(index => squares[index].textContent === player)
      })
    }
    /*check tie function loops through the squares array to see if the content is an 
    empty string. if none of squares' content is an empty string, meaning all the squares 
    have been played, then the game is tied*/
    function checkTie() {
        for (let i = 0; i < squares.length; i++) {
          if (squares[i].textContent === '') {
            return false;
          }
        }
        return true;
      }
   
    /*function that is called to clear the board and start a new game when the new game button
    is clicked*/
    function clearBoard() {
      /*loops through the squares array and resets the text content of every square to be blank*/  
      for (let i = 0; i < squares.length; i++) {
        squares[i].textContent = ''
      }
      /*resets winner/tie alert, resets the winner as null, resets current player back to X, resets player turn div*/
      winneralert.textContent = `Who will win this round?`
      winner = null
      currentPlayer = 'X'
      playerTurn.textContent = `Player ${currentPlayer}'s turn`
    }