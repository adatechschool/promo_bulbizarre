int chng = 1;
int cellSize = 300 / chng;
int XnY = 3 * chng;
// 0 = no player, 1 
int playerTurn = 0;
int emptyCell = 255;

int[] playerColor = {255, 255, 255};
int[] player1 = {255, 0, 0};
  int[] player2 = {0, 0, 0};
int startplayer = 1;

void setup() {
  size(900,1000);
  for (int i = 0; i < XnY; i++) {
    // Begin loop for rows
    for (int j = 0; j < XnY; j++) {
      //draw each cell
      int x = i*cellSize;
      int y = j*cellSize;
      fill(emptyCell);
      stroke(0);
      rect(x, y, cellSize, cellSize);
    }
  }
}


void draw() {
  // Begin loop for columns
  updatingMouse();
  checkWinCond(1);
  //println(mouseX, mouseY);
}


void updatingMouse() {
  for (int i = 0; i < XnY; i++) {
    for (int j = 0; j < XnY; j++) {
      int cell_x = i*cellSize; 
      int cell_y = j*cellSize;
      overCell(cell_x, cell_y);
    }
  }
}


boolean overCell(int x, int y) {
  if (startplayer == 1) {
    playerColor = player1;
  }
  else if (startplayer == 2) {
   playerColor = player2;
  }
  if (mouseX >= x && mouseX <= (x + cellSize) &&
      mouseY >= y && mouseY <= (y + cellSize)) {
    //println(x, y, x + 300, y + 300);
    //println(get(mouseX, mouseY));
    if (mousePressed && get(mouseX, mouseY) == - 1) {
      fill(playerColor[0], playerColor[1], playerColor[2]);
      rect(x, y, cellSize, cellSize);
      mousePressed = false;
      startplayer = playerTurn(startplayer);
      //checkWIn(startplayer
    }
    return true;
  }
  else {
    return false;
  }
}

int playerTurn(int currentPlayerSwap) {
  if (currentPlayerSwap == 1) {
    currentPlayerSwap = 2;
  }
  else if (currentPlayerSwap == 2) {
    currentPlayerSwap = 1;
  }
  return currentPlayerSwap;
}
//red = -65536
boolean checkWinCond(int player) {
  int cell_parserX = 0;
  int cell_parserY = 0;
  for(int i = 0; i < XnY; i++) {
    if (get(cell_parserX + 1, 1) == -65536){
      print("Red is true",cell_parserX);  
    }
    cell_parserX += XnY;
    //print(cell_parser);
  }
  return true;
}
