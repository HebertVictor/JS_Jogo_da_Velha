// start variables

let battlefield = ["", "", "", "", "", "", "", "", ""]; //represents it square of the game
let playerTime = 0; //which player
let symbols = ["o", "x"]; // Symbol is chosen based on the player
let gameOver = false;
let pointsPlayer0 = 0;
let pointsPlayer1 = 0;
let winStates = [
  //horizontal
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  //vertical
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  //diagonal
  [2, 4, 6],
  [0, 4, 8],
];

function handlePlayerMove(position) {
  //position is the ID of the squared clicked
  //now we put in that position on the battlefield list the symbol

  if (gameOver) {
    return; // stops the game
  }

  battlefield[position] = symbols[playerTime];
  //puts the symbol of the player in the position that was clicked

  gameOver = isWin(); //verifies if someone won

  if (gameOver == false) {
    playerTime = playerTime == 0 ? 1 : 0;
    // Changes to represent that now it's the next player's move
  }

  return gameOver;
}

function isWin() {
  for (let index = 0; index < winStates.length; index++) {
    let sequence = winStates[index];
    //each time we get a sequence that guarantees a win to make a comparison

    let pos1 = sequence[0];
    let pos2 = sequence[1];
    let pos3 = sequence[2];

    if (
      battlefield[pos1] == battlefield[pos2] &&
      battlefield[pos1] == battlefield[pos3] &&
      battlefield[pos1] != ""
    ) {
      if (playerTime == 0) {
        pointsPlayer0++;
      } else {
        pointsPlayer1++;
      }

      playerScore();

      return true;
    }
  }
  return false;
}

function restartGame() {
  battlefield = ["", "", "", "", "", "", "", "", ""]; //represents it square of the game
  playerTime = 0; //which player
  gameOver = false;

  restartSquares();
}

function restartScore() {
  pointsPlayer0 = 0;
  pointsPlayer1 = 0;

  playerScore();
}
