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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode {
        let cur = new ListNode(0);
        let dummy = cur;

        let rest = 0;
        while (l1 != null || l2 != null || rest != 0) {
            let sum: number = (l1?.val ?? 0) + (l2?.val ?? 0) + rest;
            rest = 0;

            let val = sum;
            if (sum > 9) {
                rest = Math.floor(sum / 10);
                val = sum % 10;
            }
            cur.next = new ListNode(val);
            cur = cur.next;
            l1 = l1?.next;
            l2 = l2?.next;
        }

        return dummy.next;
    }
}
