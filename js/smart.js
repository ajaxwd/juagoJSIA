
function SearchMove() {
  balls = CheckTurn_Count(1);
  if (balls > 1){
    Completed = false;

    if (Completed == false) Completed = CompleteRow(0,1);
    if (Completed == false) Completed = CompleteRow(1,1);
    if (Completed == false) Completed = CompleteRow(2,1);
    if (Completed == false) Completed = CompleteColumn(0,1);
    if (Completed == false) Completed = CompleteColumn(1,1);
    if (Completed == false) Completed = CompleteColumn(2,1);
    if (Completed == false) Completed = CompleteDiag(1,1);
    if (Completed == false) Completed = CompleteDiag(-1,1);

    if (Completed == false) Completed = CompleteRow(0,2);
    if (Completed == false) Completed = CompleteRow(1,2);
    if (Completed == false) Completed = CompleteRow(2,2);
    if (Completed == false) Completed = CompleteColumn(0,2);
    if (Completed == false) Completed = CompleteColumn(1,2);
    if (Completed == false) Completed = CompleteColumn(2,2);
    if (Completed == false) Completed = CompleteDiag(1,2);
    if (Completed == false) Completed = CompleteDiag(-1,2);

    if(Completed == false){

    if (balls == 3) {
      CellFind = false;

      while (CellFind == false) {
        x = Math.round(Math.random()*2);
        y = Math.round(Math.random()*2);
        if (board[x][y] == 1 && CheckBlock(x, y) == false) CellFind = true;
      }
      Ball_Sellected_x = x;
      Ball_Sellected_y = y;
      ClearCell(x, y);
    }
    RandomMove();
  }
}
  else{
    RandomMove();
  }

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

function CompleteRow(x, turn_value) {
  if (CheckRow(x, turn_value) == 2) {
    Find_final = false;
    for (var i = 0; i < 3; i++) {
      if (board[i][x]) {
        Find_final = true;
        Find_final_x = i;
        Find_final_y = x;
      }
    }
    if (Find_final == true) {
      if (CheckTurn_Count(turn_value) == 3) {
        if (turn_value == 1) {
          Final_lost = false;
          for (var i = 0; i < 3 &&   Final_lost == false; i++) {
            if (i != x){
              for (var j = 0; j < 3 &&   Final_lost == false; j++) {
                if (board[j][i] == 1) {
                  Final_lost = true;
                  Final_lost_x = j;
                  Final_lost_y = i;
                }
              }
            }
          }
          Ball_Sellected_x = Final_lost_x;
          Ball_Sellected_y = Final_lost_y;
          ClearCell(Final_lost_x, Final_lost_y);
        }
        else{

        }
      }
      PaintCell(Find_final_x,Find_final_y);
      return true;
    }
    else return false
}
return false;
}
