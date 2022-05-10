function merge(intervals: number[][]): number[][] {
  const results = [];
  intervals.sort(
    ([start1, end1], [start2, end2]) => start1 - start2 || end1 - end2
  );
  let [a, b] = intervals[0];
  for (const [c, d] of intervals) {
    if (c <= b) {
      [a, b] = [a, Math.max(b, d)];
    } else {
      results.push([a, b]);
      [a, b] = [c, d];
    }
  }
  results.push([a, b]);
  return results;
}
