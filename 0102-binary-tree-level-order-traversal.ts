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

function levelOrder(root: TreeNode | null): number[][] {
  if (root === null) return [];
  const result = [];
  const stack = [];
  stack.push([root, 0]);
  while (stack.length > 0) {
    let [node, level] = stack.pop();
    result[level] = (result[level] || []).concat(node.val);
    if (node.right) stack.push([node.right, level + 1]);
    if (node.left) stack.push([node.left, level + 1]);
  }
  return result;
}
