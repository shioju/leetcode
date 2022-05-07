function singleNumber(nums: number[]): number {
  const set = new Set();
  for (let n of nums) {
    if (set.has(n)) {
      set.delete(n);
    } else {
      set.add(n);
    }
  }
  return set.values().next().value;
}
