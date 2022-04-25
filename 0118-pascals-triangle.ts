function generate(numRows: number): number[][] {
  if (numRows === 1) return [[1]];
  let result = [[1]];
  let lastRow = [1];
  for (let i = 1; i < numRows; i++) {
    let nextRow = [];
    const entries = i + 1;
    nextRow.push(1);
    for (let j = 1; j < entries - 1; j++) {
      nextRow.push(lastRow[j - 1] + lastRow[j]);
    }
    nextRow.push(1);
    result.push(nextRow);
    lastRow = nextRow;
  }
  return result;
}
