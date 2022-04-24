function twoSum(nums: number[], target: number): number[] {
  const positions = new Map();
  nums.forEach((e, i) => {
    positions.set(e, i);
  });

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    const complementPosition = positions.get(complement);
    if (complementPosition && complementPosition !== i) {
      return [i, complementPosition];
    }
  }
}
