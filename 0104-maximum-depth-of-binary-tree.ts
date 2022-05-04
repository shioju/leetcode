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

function maxDepth(root: TreeNode | null): number {
  if (root === null) return 0;
  let max = 0;
  const stack = [];
  stack.push([root, 1]);
  while (stack.length) {
    const [node, level] = stack.pop();
    if (level > max) max = level;
    if (node.right) stack.push([node.right, level + 1]);
    if (node.left) stack.push([node.left, level + 1]);
  }
  return max;
}
