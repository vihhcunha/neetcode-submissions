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
    inorderTraversal(root: TreeNode | null): number[] {
        if (root == null) {
            return [];
        }

        const res: number[] = [];
        res.push(...this.inorderTraversal(root.left));
        res.push(root.val);
        res.push(...this.inorderTraversal(root.right));
        return res;
    }
}
