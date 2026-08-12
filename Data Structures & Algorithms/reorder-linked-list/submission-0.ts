/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head: ListNode | null): void {
        const stack = [];
        let tail = head;

        while (tail != null) {
            stack.push(tail);
            tail = tail.next;
        }
        tail = head;
        for (let i = 1; i <= stack.length - 1; i++) {
            tail.next = stack.pop();
            if (tail.next == null)
                break;
            tail = tail.next;
            tail.next = stack[i];
            if (tail.next == null)
                break;
            tail = tail.next;
        }
        tail.next = null;
    }
}
