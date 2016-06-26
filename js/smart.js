
function SearchMove() {
  balls = CheckTurn_Count(1);
  if (balls == 3) {
    CellFind = false;

    while (CellFind == false) {
      x = Math.round(Math.random()*2);
      y = Math.round(Math.random()*2);
      if (board[x][y] == 1) CellFind = true;
    }
    Ball_Sellected_x = x;
    Ball_Sellected_y = y;
    ClearCell(x, y);
  }
  RandomMove();
}

function RandomMove(){
  CellAvaible = false;

  while (CellAvaible == false) {
    x = Math.round(Math.random()*2);
    y = Math.round(Math.random()*2);
    if (board[x][y] == 0 && DifMov(x, y)) {
      CellAvaible = true;
    }
  }
  PaintCell(x, y);
}
