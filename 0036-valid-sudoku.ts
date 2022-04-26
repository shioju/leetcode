function isValidSudoku(board: string[][]): boolean {
  const cols = [
    new Set(),
    new Set(),
    new Set(),
    new Set(),
    new Set(),
    new Set(),
    new Set(),
    new Set(),
    new Set(),
  ];
  const boxes = [
    [new Set(), new Set(), new Set()],
    [new Set(), new Set(), new Set()],
    [new Set(), new Set(), new Set()],
  ];
  for (let i = 0; i < 9; i++) {
    const row = new Set();
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== ".") {
        // row check
        if (row.has(board[i][j])) {
          return false;
        }
        row.add(board[i][j]);

        // col check
        if (cols[j].has(board[i][j])) {
          return false;
        }
        cols[j].add(board[i][j]);

        // box check
        if (boxes[Math.floor(i / 3)][Math.floor(j / 3)].has(board[i][j])) {
          return false;
        }
        boxes[Math.floor(i / 3)][Math.floor(j / 3)].add(board[i][j]);
      }
    }
  }
  return true;
}
