const gameOver = document.getElementById('game-over');
let scores = document.getElementById('score');
const playAgain = document.getElementById('play-again');

// Replace this with your actual score

scores.innerHTML= localStorage.getItem("score");

playAgain.addEventListener('click', () => {
  // Code to restart the game
  window.location='game.html';
});

gameOver.style.display = 'block';