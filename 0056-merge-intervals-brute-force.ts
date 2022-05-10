function merge(intervals: number[][]): number[][] {
  const map = new Map();
  for (const [start, end] of intervals) {
    for (let i = start; i < end; i++) {
      map.set(i, 1);
    }
    if (!map.get(end)) map.set(end, 2);
  }

  const results = [];
  let start = -1;
  let end = 0;
  let ptr = 0;
  while (ptr <= 10000) {
    if (map.get(ptr) === 1) {
      if (start === -1) start = ptr;
      end = ptr;
    } else if (map.get(ptr) === 2) {
      if (start >= 0) {
        results.push([start, ptr]);
        start = -1;
      } else {
        results.push([ptr, ptr]);
      }
    } else {
      if (start >= 0) {
        results.push([start, ptr]);
        start = -1;
      }
    }
    ptr++;
  }
  return results;
}
