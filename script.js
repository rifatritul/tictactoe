var gameArray = ["", "", "", "", "", "", "", "", ""];
var winComb = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
var counter = 0;
var curPlayer = "X";
var cells=document.querySelectorAll(".cell");

function game(index){
    let input = index;
     if (gameArray[input] == "") {
        if (counter % 2 == 0) {
        gameArray[input]=curPlayer;
        cells[input].innerHTML=curPlayer;
        counter++;
        winnerCheck();
        changePlayer();
        turnMsg();
        }
    else{
        gameArray[input]=curPlayer;
        cells[input].innerHTML=curPlayer;
        counter++;
        winnerCheck();
        changePlayer();
        turnMsg();
        }
    }
}
function changePlayer(){
    if (curPlayer == "X") {
        curPlayer = "O";
    }
    else{
        curPlayer = "X";
    }
}
function turnMsg(){
    document.getElementById('playerTurn').innerHTML=curPlayer + "\'s turn."
}
function winnerCheck(){
    for (var i = 0; i < winComb.length; i++) {
    var winChkArray = winComb[i];
    var a = gameArray[winChkArray[0]];
    var b = gameArray[winChkArray[1]];
    var c = gameArray[winChkArray[2]];
    if (a == "" || b == "" || c == "") {
        continue;
    } else if (a == b && b == c) {
        alert(curPlayer + " won.");
        window.location.reload();
        break;

    } else if(counter==9){
        alert("Match Draw.")
        window.location.reload();
        break;
    }
  }
}