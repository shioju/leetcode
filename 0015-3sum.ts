function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const results = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) continue;
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      if (nums[i] + nums[j] + nums[k] > 0) {
        while (nums[--k] === nums[k + 1]);
      } else if (nums[i] + nums[j] + nums[k] < 0) {
        while (nums[++j] === nums[j - 1]);
      } else {
        results.push([nums[i], nums[j], nums[k]]);
        while (nums[++j] === nums[j - 1]);
      }
    }
  }
  return results;
}
