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

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  let ptr = root;
  if (p.val > q.val) {
    // make sure p < q
    [p, q] = [q, p];
  }
  while (ptr) {
    if (p.val <= ptr.val && ptr.val <= q.val) {
      return ptr;
    }
    if (p.val < ptr.val && q.val < ptr.val) {
      ptr = ptr.left;
    } else if (ptr.val < p.val && ptr.val < q.val) {
      ptr = ptr.right;
    }
  }
}
