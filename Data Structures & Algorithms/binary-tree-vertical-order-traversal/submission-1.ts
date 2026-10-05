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
    i: number = 0;
    res = [];
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    verticalOrder(root: TreeNode | null): number[][] {
        if (root == null) {
            return [];
        }
        const map = new Map<number, number[]>();
        const queue: { col: number, node: TreeNode }[] = [];

        queue.push({ col: 0, node: root});
        while (queue.length > 0) {
            const queueSize = queue.length;
            for (let i = 0; i <= queueSize - 1; i++) {
                let node = queue.shift();
                let array = map.get(node.col) ?? [];
                array.push(node.node.val);
                map.set(node.col, array);
                if (node.node.left != null) {
                    queue.push( { col: node.col - 1, node: node.node.left });
                }
                if (node.node.right != null) {
                    queue.push( { col: node.col + 1, node: node.node.right });
                }
            }
        }
        const sortedKeys = Array.from(map.keys()).sort((a, b) => a - b);
        return sortedKeys.map((k) => map.get(k));
    }
}
