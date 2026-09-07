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
     * @param {number} low
     * @param {number} high
     * @return {number}
     */
    rangeSumBST(root: TreeNode | null, low: number, high: number): number {
        let sum = 0;
        if (root == null) {
            return sum;
        }

        if (high > root.val) {
            sum += this.rangeSumBST(root.right, low, high);
        }
        if (low < root.val) {
            sum += this.rangeSumBST(root.left, low, high);
        }
        if (root.val < low || root.val > high){
            return sum;
        }
        return sum + root.val;
    }
}
