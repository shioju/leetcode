function intersect(nums1: number[], nums2: number[]): number[] {
  const counts = new Map();
  let result = [];
  nums1.forEach((e) => {
    counts.set(e, (counts.get(e) || 0) + 1);
  });
  nums2.forEach((e) => {
    if (counts.get(e)) {
      counts.set(e, counts.get(e) - 1);
      result.push(e);
    }
  });
  return result;
}
