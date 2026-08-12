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
        let fast = head;
        let slow = head;

        while (fast != null && fast.next != null) {
            fast = fast.next.next;
            slow = slow.next;
        }
        let current = slow.next;
        slow.next = null;

        let previous = null;
        while (current != null) {
            let next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }
        let first = head;
        let second = previous;
        while (first != null && second != null) {
            let firstNext = first.next;
            let secondNext = second.next;

            first.next = second;
            second.next = firstNext;

            first = firstNext;
            second = secondNext;
        }
    }
}
