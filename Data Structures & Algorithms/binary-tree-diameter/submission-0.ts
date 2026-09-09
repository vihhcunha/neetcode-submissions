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
    diameter: number = 0;
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root: TreeNode | null): number {
        if (root == null) {
            return 0;
        }

        this.heigth(root);
        return this.diameter;
    }

    heigth(root: TreeNode | null): number {
        if (root == null) {
            return 0;
        }

        let leftHeigth = this.heigth(root.left);
        let rightHeigth = this.heigth(root.right);
        this.diameter = Math.max(this.diameter, leftHeigth + rightHeigth);

        return 1 + Math.max(leftHeigth, rightHeigth);
    }
}
