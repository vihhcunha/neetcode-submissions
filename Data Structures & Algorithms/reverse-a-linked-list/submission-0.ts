
  //Definition for singly-linked list.
//   class ListNode {
//       constructor(public val = 0, public next = null) {
//           this.val = val;
//           this.next = next;
//       }
//   }


class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        let previous = null;
        let cur = head;

        while (cur != null) {
            let next = cur.next;
            cur.next = previous;
            previous = cur;
            cur = next;
        }
        return previous;
    }
}
