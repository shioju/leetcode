/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  let count0 = 0;
  let count1 = 0;
  let count2 = 0;
  let ptr = 0;
  while (ptr < nums.length) {
    if (nums[ptr] === 0) {
      nums[count0] = 0;
      count1 && (nums[count0 + count1] = 1);
      count2 && (nums[count0 + count1 + count2] = 2);
      count0++;
    } else if (nums[ptr] === 1) {
      nums[count0 + count1] = 1;
      count2 && (nums[count0 + count1 + count2] = 2);
      count1++;
    } else {
      count2++;
    }
    ptr++;
  }
}
