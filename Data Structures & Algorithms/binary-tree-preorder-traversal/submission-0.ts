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
     * @return {number[]}
     */
    preorderTraversal(root: TreeNode | null): number[] {
        if (root == null) {
            return [];
        }

        const result = [root.val];
        result.push(...this.preorderTraversal(root.left));
        result.push(...this.preorderTraversal(root.right));

        return result;
    }
}
