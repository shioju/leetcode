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

function postorderTraversal(root: TreeNode | null): number[] {
  if (root === null) return [];
  const stack = [];
  const result = [];
  stack.push(root);
  while (stack.length > 0) {
    const node = stack.pop();
    if (!node.left && !node.right) {
      result.push(node.val);
    } else {
      stack.push(new TreeNode(node.val));
      if (node.right) {
        stack.push(node.right);
      }
      if (node.left) {
        stack.push(node.left);
      }
    }
  }
  return result;
}
