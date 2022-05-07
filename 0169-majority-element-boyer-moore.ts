function majorityElement(nums: number[]): number {
  // Boyer-Moore Voting Algorithm
  let candidate = 0;
  let count = 0;
  for (let n of nums) {
    if (count === 0) {
      candidate = n;
      count = 1;
    } else if (n === candidate) {
      count++;
    } else {
      count--;
    }
  }
  return candidate;
}
