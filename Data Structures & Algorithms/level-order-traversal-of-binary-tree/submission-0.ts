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
        const queue: TreeNode[] = [];
        const result: number[][] = [];
        let level = 0;

        if (root != null) {
            queue.push(root);
        }

        while (queue.length > 0) {
            result[level] = [];
            const queueSize = queue.length;
            for (let i = 0; i <= queueSize - 1; i++) {
                let node = queue.shift();
                result[level].push(node.val);                
                if (node.left != null) {
                    queue.push(node.left);
                }
                if (node.right != null) {
                    queue.push(node.right);
                }
            }
            level++;
        }
        return result;
    }
}
