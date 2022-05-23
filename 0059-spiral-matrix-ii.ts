function generateMatrix(n: number): number[][] {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push([]);
  }
  const layers = Math.ceil(n / 2);
  let next = 1;
  for (let i = 0; i < layers; i++) {
    let row = i;
    let col = i;
    while (col < n - i) {
      result[row][col] = next++;
      col++;
    }
    col--;
    row++;
    while (row < n - i) {
      result[row][col] = next++;
      row++;
    }
    row--;
    col--;
    while (col >= i) {
      result[row][col] = next++;
      col--;
    }
    col++;
    row--;
    while (row >= i + 1) {
      result[row][col] = next++;
      row--;
    }
  }
  return result;
}
