/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let slot = m + n - 1;
  m -= 1;
  n -= 1;
  while (m > -1 || n > -1) {
    // makes use of typescript behaviour that arr[-1] returns undefined
    if (nums2[n] > nums1[m] || nums1[m] === undefined) {
      nums1[slot--] = nums2[n--];
    } else {
      nums1[slot--] = nums1[m--];
    }
  }
}
