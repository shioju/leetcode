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

function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
  if (root === null) return new TreeNode(val);
  let ptr = root;
  while (ptr) {
    if (val < ptr.val) {
      if (ptr.left) {
        ptr = ptr.left;
      } else {
        ptr.left = new TreeNode(val);
        return root;
      }
    }
    if (val > ptr.val) {
      if (ptr.right) {
        ptr = ptr.right;
      } else {
        ptr.right = new TreeNode(val);
        return root;
      }
    }
  }
}
