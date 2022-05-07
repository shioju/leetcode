function majorityElement(nums: number[]): number {
  const map = new Map();
  let maxCount = 0;
  let answer = 0;
  for (let n of nums) {
    map.set(n, (map.get(n) || 0) + 1);
    if (map.get(n) > maxCount) {
      maxCount = map.get(n);
      answer = n;
    }
  }
  return answer;
}
