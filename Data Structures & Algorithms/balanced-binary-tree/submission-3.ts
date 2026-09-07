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
     * @return {boolean}
     */
    isBalanced(root: TreeNode | null): boolean {
        if (root == null) {
            return true;
        }
        let leftHeight = this.getHeight(root.left);
        let rightHeight = this.getHeight(root.right);
        
        if (Math.abs(leftHeight - rightHeight) > 1){
            return false;
        }
        let rightRes = this.isBalanced(root.right);
        let leftRes = this.isBalanced(root.left);
        return rightRes == true && leftRes == true;
    }

    getHeight(root: TreeNode): number {
        if (root == null) {
            return 0;
        }
        let hRight = 0;
        let hLeft = 0;

        if (root.right != null) {
            hRight = this.getHeight(root.right);
        }
        if (root.left != null) {
            hLeft = this.getHeight(root.left);
        }
        return 1 + Math.max(hRight, hLeft);
    }
}
