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
     * @param {number} target
     * @return {number}
     */
    closestValue(root: TreeNode | null, target: number): number {
        if (root == null) {
            return null;
        }
        if (target == root.val) {
            return root.val;
        }

        let values: number[] = [root.val];
        let result: number | null = null;

        if (target > root.val) {
            result = this.closestValue(root.right, target);
        }
        else if (target < root.val) {
            result = this.closestValue(root.left, target);
        }
        if (result != null) {
            values.push(result);
        }

        const closest = values.reduce((prev, curr) => {
            return Math.abs(curr - target) < Math.abs(prev - target) ? curr : prev;
        });
        return closest;
    }
}
