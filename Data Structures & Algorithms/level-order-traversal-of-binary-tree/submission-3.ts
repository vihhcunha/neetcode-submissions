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
     * @return {number[][]}
     */
    levelOrder(root: TreeNode | null): number[][] {
        const queue = [];
        const result = [];
        if (root == null) {
            return [];
        }
        queue.push(root);
        while (queue.length > 0) {
            const queueLength = queue.length;
            let array = [];
            for (let i = 0; i <= queueLength - 1; i++) {
                let node = queue.shift();
                array.push(node.val);
                if (node.left != null) {
                    queue.push(node.left)
                }
                if (node.right != null) {
                    queue.push(node.right)
                }
            }
            result.push(array);
        }
        return result;
    }
}
