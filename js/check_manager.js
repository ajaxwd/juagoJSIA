function CheckRow(x, value) {
  count_value = 0;
  for (i = 0; i < 3; i++) {
    if (board[i][x] == value) count_value++;
  }
  return count_value;
}
function CheckColumn(y, value) {
  count_value = 0;
  for (i = 0; i < 3; i++) {
    if (board[y][i] == value) count_value++;
  }
  return count_value;
}

function CheckLine() {
  if (turn == "ball") value = 1;
  else value = 2;

  if(CheckRow(0, value) == 3) alert(turn + " ha ganado");
  if(CheckRow(1, value) == 3) alert(turn + " ha ganado");
  if(CheckRow(2, value) == 3) alert(turn + " ha ganado");
  if(CheckColumn(0, value) == 3) alert(turn + " ha ganado");
  if(CheckColumn(1, value) == 3) alert(turn + " ha ganado");
  if(CheckColumn(2, value) == 3) alert(turn + " ha ganado");

}

function CheckTurn_Count(turn_value) {
  Turn_count = 0;
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (board[i][j] == turn_value) Turn_count++;
    }
  }
  return Turn_count;
}

function DifMov(x, y){
  diferent = false;

  if (turn == "cross") {
    if ( x != Cross_Sellected_x) diferent = true;
    if ( y != Cross_Sellected_y) diferent = true;
  }
  else {
    if ( x != Ball_Sellected_x) diferent = true;
    if ( y != Ball_Sellected_y) diferent = true;
  }

  return diferent;
}
