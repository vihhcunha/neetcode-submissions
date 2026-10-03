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
        let response = [];
        let res = this.inorderTraversal(root.left);
        if (res.length > 0)
            response.push(res);
        response.push(root.val);
        res = this.inorderTraversal(root.right);
        if (res.length > 0)
            response.push(res);
        return response;
    }
}
