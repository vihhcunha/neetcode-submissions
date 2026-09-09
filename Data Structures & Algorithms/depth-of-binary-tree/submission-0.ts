/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root: TreeNode | null): number {
        if (root == null) {
            return 0;
        }

        let countRight = this.maxDepth(root.right);
        let countLeft = this.maxDepth(root.left);

        return 1 + Math.max(countRight, countLeft);
    }
}
