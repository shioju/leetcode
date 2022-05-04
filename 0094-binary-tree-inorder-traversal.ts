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

function inorderTraversal(root: TreeNode | null): number[] {
  let stack = [];
  let result = [];
  if (root === null) return [];
  stack.push(root);
  while (stack.length > 0) {
    const node = stack.pop();
    if (node.left === null) {
      result.push(node.val);
      if (node.right) stack.push(node.right);
    } else {
      if (node.right) stack.push(node.right);
      stack.push(new TreeNode(node.val));
      stack.push(node.left);
    }
  }
  return result;
}
