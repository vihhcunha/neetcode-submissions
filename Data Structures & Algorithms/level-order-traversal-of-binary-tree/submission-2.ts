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
            let i = 0;
            let array = [];
            while (i <= queueLength - 1) {
                let node = queue.shift();
                array.push(node.val);
                if (node.left != null) {
                    queue.push(node.left)
                }
                if (node.right != null) {
                    queue.push(node.right)
                }
                i++;
            }
            result.push(array);
        }
        return result;
    }
}
