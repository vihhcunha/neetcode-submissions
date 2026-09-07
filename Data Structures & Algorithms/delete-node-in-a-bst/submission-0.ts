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
     * @param {number} key
     * @return {TreeNode}
     */
    deleteNode(root: TreeNode | null, key: number): TreeNode {
        if (root == null) {
            return null;
        }
        if (key > root.val) {
            root.right = this.deleteNode(root.right, key);
        }
        else if (key < root.val) {
            root.left = this.deleteNode(root.left, key);
        }
        else {
            if (root.left == null) {
                return root.right;
            }
            else if (root.right == null) {
                return root.left;
            }
            else {
                root.val = this.getMinimum(root.right);
                root.right = this.deleteNode(root.right, root.val);
                return root;
            }
        }
        return root;
    }

    getMinimum(root: TreeNode): number {
        while (root.left != null) {
            root = root.left;
        }
        return root.val;
    }
}
