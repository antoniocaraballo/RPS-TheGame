let options = ["Rock", "Paper", "Scissors"];
let rock = document.querySelector("#rock-btn");
let paper = document.querySelector("#paper-btn");
let scissors = document.querySelector("#scissors-btn");
let message = document.querySelector("#message");

// Random Computer Choice
let randomChoice = Math.floor(Math.random() * 3);
let computerChoice = options[randomChoice];

console.log(options[randomChoice]);

// Play Button
let playBtn = document.querySelector("#play-btn");
playBtn.addEventListener("click", play);

// Play Function
function play() {
  if (
    rock.checked != true &&
    paper.checked != true &&
    scissors.checked != true
  ) {
    alert("Select your answer");
    return;
  } else if (
    (rock.checked == true && computerChoice == "Scissors") ||
    (paper.checked == true && computerChoice == "Rock") ||
    (scissors.checked == true && computerChoice == "Paper")
  ) {
    message.style.display = "flex";
    message.innerHTML = `<img src="./imgs/stars.gif" alt="" />
    <h1>You Won!</h1>
    <img src="./imgs/stars.gif" alt="" />`;
  } else if (
    (rock.checked == true && computerChoice == "Rock") ||
    (paper.checked == true && computerChoice == "Paper") ||
    (scissors.checked == true && computerChoice == "Scissors")
  ) {
    message.style.display = "flex";
    message.innerHTML = `<img src="./imgs/thunder.gif" alt="" />
    <h1>It's a tie!</h1>
    <img src="./imgs/thunder.gif" alt="" />`;
  } else {
    message.style.display = "flex";
    message.innerHTML = `<img src="./imgs/warning.gif" alt="" />
    <h1>You Lost!</h1>
    <img src="./imgs/warning.gif" alt="" />`;
  }

  document.querySelector("form").style.display = "none";
  document.querySelector("h2").style.display = "none";
  playBtn.style.display = "none";
  playAgainBtn.style.display = "flex";
}

// Play Again Button
let playAgainBtn = document.querySelector("#play-again");
playAgainBtn.addEventListener("click", playAgain);

// Play Again Function
function playAgain() {
  window.location.reload();
}
