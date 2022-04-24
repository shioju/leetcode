function maxSubArray(nums: number[]): number {
  let maxSum = Number.MIN_SAFE_INTEGER;
  let currSum = 0;
  for (const num of nums) {
    if (currSum < 0) {
      currSum = num;
    } else {
      currSum += num;
    }

    if (currSum > maxSum) {
      maxSum = currSum;
    }
  }

  return maxSum;
}
