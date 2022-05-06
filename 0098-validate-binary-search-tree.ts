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

function isValidBST(root: TreeNode | null): boolean {
  return (
    (!root.left ||
      isValidBSTBetween(root.left, Number.MIN_SAFE_INTEGER, root.val)) &&
    (!root.right ||
      isValidBSTBetween(root.right, root.val, Number.MAX_SAFE_INTEGER))
  );
}

function isValidBSTBetween(root: TreeNode, min: number, max: number): boolean {
  return (
    min < root.val &&
    root.val < max &&
    (!root.left || isValidBSTBetween(root.left, min, root.val)) &&
    (!root.right || isValidBSTBetween(root.right, root.val, max))
  );
}
