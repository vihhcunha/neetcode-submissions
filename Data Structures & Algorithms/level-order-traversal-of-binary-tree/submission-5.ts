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
        if (root == null) {
            return [];
        }

        const queue = [];
        const res = [];
        queue.push(root);

        while (queue.length > 0) {
            const queueSize = queue.length;
            const arr = [];
            for (let i = 0; i <= queueSize - 1; i++) {
                let node = queue.shift();
                arr.push(node.val);
                if (node.left != null) {
                    queue.push(node.left);
                }
                if (node.right != null) {
                    queue.push(node.right);
                }
            }
            res.push(arr);
        }
        return res;
    }
}
