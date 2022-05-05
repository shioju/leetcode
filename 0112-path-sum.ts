/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (root === null) return false;
  return check(root, 0, targetSum);
}

function check(root: TreeNode, sum: number, target: number): boolean {
  if (!root.left && !root.right && sum + root.val === target) return true;
  if (root.left && check(root.left, sum + root.val, target)) return true;
  if (root.right && check(root.right, sum + root.val, target)) return true;
  return false;
}
