// IIFF Function Pattern that mean নিজে নিজে ফাংশন কল করবে।

// Procedural Programming

(function () {
  const p1ScoreDisplay = document.getElementById("player1Score");
  const p2ScoreDisplay = document.getElementById("player2Score");
  const winScoreDisplay = document.querySelector("p span");
  let inputScore = document.getElementById("inputScore");
  const p1Btn = document.getElementById("p1Btn");
  const p2Btn = document.getElementById("p2Btn");
  const resetBtn = document.getElementById("resetBtn");

  let p1Score = 0;
  let p2Score = 0;
  let winScore = 5;
  let gameOver = false;

  function winner(oldScore, winScore) {
    if (oldScore === winScore) {
      if (p1Score === winScore) {
        p1ScoreDisplay.classList.add("winner");
      } else {
        p2ScoreDisplay.classList.add("winner");
      }

      gameOver = true;
      p1Btn.setAttribute("disabled", "disabled");
      p2Btn.setAttribute("disabled", "disabled");
    }
  }

  function reset() {
    p1Score = 0;
    p2Score = 0;
    //const winScore = 5;
    gameOver = false;
    p1ScoreDisplay.textContent = 0;
    p2ScoreDisplay.textContent = 0;

    p1ScoreDisplay.classList.remove("winner");
    p2ScoreDisplay.classList.remove("winner");

    p1Btn.removeAttribute("disabled");
    p2Btn.removeAttribute("disabled");
  }

  p1Btn.addEventListener("click", () => {
    if (!gameOver) {
      //Data Change
      p1Score++;
      if (p1Score == winScore) {
        winner(p1Score, winScore);
      }

      //Show changed data
      p1ScoreDisplay.textContent = p1Score;
    }
  });

  p2Btn.addEventListener("click", () => {
    if (!gameOver) {
      //Data change
      p2Score++;
      if (p2Score == winScore) {
        winner(p2Score, winScore);
      }
      //Show changed data
      p2ScoreDisplay.textContent = p2Score;
    }
  });

  inputScore.addEventListener("change", () => {
    // console.log(typeof inputScore.value);
    winScore = Number(inputScore.value);
    winScoreDisplay.textContent = inputScore.value;
    inputScore.value = "";
    reset();
  });

  resetBtn.addEventListener("click", reset);
})();
