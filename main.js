console.log("Welcome To TIC TAC TOE");

let turn = "X";
let gameOver = false;

//function to change the turn
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

//function to check for win
const checkWin = () => {
  let boxtexts = document.getElementsByClassName("box_text");

  let wins = [
    [0, 1, 2, 0, 5, 0],
    [3, 4, 5, 0, 15, 0],
    [6, 7, 8, 0, 25, 0],
    [0, 3, 6, -10, 15, 90],
    [1, 4, 7, 0, 15, 90],
    [2, 5, 8, 10, 15, 90],
    [0, 4, 8, 0, 15, 45],
    [2, 4, 6, 0, 15, 135],
  ];

  wins.forEach((e) => {
    if (
      boxtexts[e[0]].innerText === boxtexts[e[1]].innerText &&
      boxtexts[e[2]].innerText === boxtexts[e[1]].innerText &&
      boxtexts[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxtexts[e[0]].innerText + "Won";
      gameOver = true;
      document.getElementById("img_box").style.width = "100px";
      document.querySelector(
        ".line"
      ).style.transform = `translate(${e[3]}vw, ${e[4]}vw)rotate(${e[5]}deg)`;
    }
  });
};

//Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".box_text");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn();
      checkWin();
      if (!gameOver) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn for" + turn;
      }
    }
  });
});

//Add onclick listner to reset button

reset.addEventListener("click", () => {
  let boxtexts = document.querySelectorAll(".box_text");
  Array.from(boxtexts).forEach((elements) => {
    elements.innerText = "";
    document.getElementById("img_box").style.width = "0";
    window.location.reload();
  });
});
