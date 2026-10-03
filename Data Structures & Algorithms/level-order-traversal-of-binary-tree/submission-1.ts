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
        const res = [];
        const queue = [];
        let level = 0;

        if (root != null) {
            queue.push(root);
        }

        while (queue.length > 0) {
            res[level] = [];
            const queueSize = queue.length;
            for (let i = 0; i <= queueSize - 1; i++) {
                let cur = queue.shift();
                res[level].push(cur.val);
                if (cur.left != null) {
                    queue.push(cur.left);
                }
                if (cur.right != null) {
                    queue.push(cur.right);
                }
            }
            level++;
        }
        return res;
    }
}
