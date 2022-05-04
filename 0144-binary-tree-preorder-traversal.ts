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

function preorderTraversal(root: TreeNode | null): number[] {
  let stack = [];
  let result = [];
  let ptr = root;
  while (ptr) {
    result.push(ptr.val);
    if (ptr.right) {
      stack.push(ptr.right);
    }
    if (ptr.left) {
      stack.push(ptr.left);
    }
    ptr = stack.pop();
  }
  return result;
}
