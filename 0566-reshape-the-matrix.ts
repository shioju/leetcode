function matrixReshape(mat: number[][], r: number, c: number): number[][] {
  const m = mat.length;
  const n = mat[0].length;
  if (m * n !== r * c) return mat;

  let result = [];
  for (let i = 0; i < r; i++) {
    let row = [];
    for (let j = 0; j < c; j++) {
      const index = i * c + j;
      row.push(mat[Math.floor(index / n)][index % n]);
    }
    result.push(row);
  }
  return result;
}
