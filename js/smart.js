
function SearchMove() {
  CellAvaible = false;

  while (CellAvaible == false) {
    x = Math.round(Math.random()*2);
    y = Math.round(Math.random()*2);
    if (board[x][y] == 0) {
      CellAvaible = true;
    }
  }
  PaintCell(x, y);
}
