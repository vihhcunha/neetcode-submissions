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
class BSTIterator {
    private stack: TreeNode[] = [];
    /**
     * @constructor
     * @param {TreeNode} root
     */
    constructor(root: TreeNode | null) {
        this.pushLeft(root);
    }

    /**
     * @return {number}
     */
    next(): number {
        let node = this.stack.pop();
        if (node.right != null) {
            this.pushLeft(node.right);
        }
        return node.val;
    }

    private pushLeft(node: TreeNode | null): void {
        while (node !== null) {
            this.stack.push(node);
            node = node.left;
        }
    }

    /**
     * @return {boolean}
     */
    hasNext(): boolean {
        return this.stack.length > 0;
    }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
