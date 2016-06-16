var board = new Array(3);
var turn;

function ClearCell(x, y) {
  board[x][y] = 0;
  cell = document.getElementById("c" + x + y);
  cell.innerHTML = "";
}

funcion ClearBoard(){
  for (var i = 0; i < 3; i++)
    for (var j= 0; j < 3;j++){
      ClearCell(i, j)
    }

}
function PaintCell(x, y) {
  cell = document.getElementById("c" + x + y);
  cell.innerHTML = "<img src=" + turn + ".png></img>";

  if (turn = "ball") {
    board[x][y] = 1;
  } else {
    board[x][y] = 2;
  }

  if (turn == "ball") turn = "cross";
  else turn = "ball";

}
function autoplay(){

  for (var i = 0; i < 3; i++) board[i] = new Array(3);
  turn = "ball";
  ClearBoard();
  PaintCell(0,1);

}

autoplay();
