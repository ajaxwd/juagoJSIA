var board = new Array(3);

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
  cell.innerHTML = "<img src=ball.png></img>";
}
function autoplay(){

  for (var i = 0; i < 3; i++) board[i] = new Array(3);

  ClearBoard();

}

autoplay();
