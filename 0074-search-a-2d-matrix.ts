function searchMatrix(matrix: number[][], target: number): boolean {
  const m = matrix.length;
  const n = matrix[0].length;
  let l = 0;
  let r = m * n - 1;

  // binary search
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    const num = matrix[Math.floor(mid / n)][Math.floor(mid % n)];
    if (target === num) {
      return true;
    }

    if (target < num) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return false;
}
