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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
        if (root == null) {
            return false;
        }
        if ((root != null && subRoot == null) || (root == null && subRoot != null)) {
            return false;
        }
        if (this.isSameTree(root, subRoot)){
            return true;
        }
        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
    }

    isSameTree(a: TreeNode, b: TreeNode): boolean {
        if (a == null && b == null) {
            return true;
        }
        if ((a != null && b == null) || (a == null && b != null)) {
            return false;
        }

        if (a.val != b.val) {
            return false;
        }

        let lResult = this.isSameTree(a.left, b.left);
        let rResult = this.isSameTree(a.right, b.right);

        return lResult && rResult;
    }
}
