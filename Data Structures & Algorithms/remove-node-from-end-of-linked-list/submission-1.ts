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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head: ListNode | null, n: number): ListNode {
        if (!head.next && n > 1) 
            return null
        
        head = this.invertListNode(head);
        
        let i = 1;
        let cur = head;
        while (i <= n && cur != null) {
            if (i == n - 1) {
                cur.next = cur.next?.next ?? null;
                break;
            }
            let next = cur.next;
            if (i == n) {
                cur.next = null;
                head = next;
                break;
            }
            cur = next;
            i++;
        }

        head = this.invertListNode(head);
        return head;
    }

    invertListNode (head: ListNode): ListNode {
        let previous = null;
        let current = head;

        while (current != null) {
            let next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }

        return previous;
    }
}
