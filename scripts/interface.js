document.addEventListener("DOMContentLoaded", () => {
  let squares = document.querySelectorAll(".square");
  //When the DOM is loaded, we get all the squares of the game

  squares.forEach((square) => {
    square.addEventListener("click", handleClick);
    //handleClick is on every square waiting to add the symbol
  });
});

function handleClick(event) {
  let square = event.target; //Gets the square we clicked

  let position = square.id;

  if (handlePlayerMove(position)) {
    setTimeout(() => {
      alert("Acabou o game - O Vencedor foi o jogador " + playerTime);
    }, 30);
  }
  // we are going to pass the id to the handlePlayerMove function

  updateSquare(position);
}

function updateSquare(position) {
  let square = document.getElementById(position.toString());
  let symbol = battlefield[position];
  square.innerHTML = `<div class='${symbol}'></div>`; //symbol is either an o or a x
  // the class from the symbol is already on css so by adding here we make it appear
}

function restartSquares() {
  let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.innerHTML = "";
  });
}

function playerScore() {
  let player0 = document.getElementById("player0");
  let player1 = document.getElementById("player1");

  player0.innerText = `Player 0 : ${pointsPlayer0}`;
  player1.innerText = `Player 1 : ${pointsPlayer1}`;
}
