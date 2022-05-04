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

function isSymmetric(root: TreeNode | null): boolean {
  if (root === null) return true;
  const q1 = [];
  q1.push(root.left);
  const q2 = [];
  q2.push(root.right);
  while (q1.length && q2.length) {
    const node1 = q1.shift();
    const node2 = q2.shift();
    if (node1?.val !== node2?.val) return false;
    if (node1 && node2) {
      q1.push(node1.left);
      q1.push(node1.right);
      q2.push(node2.right);
      q2.push(node2.left);
    }
  }
  return !q1.length && !q2.length;
}
