var board = new Array(3);

funcion ClearBoard(){
  for (var i = 0; i < 3; i++)
    for (var j= 0; j < 3;j++){
      board[i][j] = 0;
    }

}
function autoplay(){

  for (var i = 0; i < 3; i++) board[i] = new Array(3);

  ClearBoard();

}

autoplay();
