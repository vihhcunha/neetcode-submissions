// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head: Node | null): Node {
        let map = new Map<Node, Node>();
        let current = head;

        while (current != null) {
            map.set(current, new Node(current.val, null, null));
            current = current.next;
        }

        for (let [key, value] of map.entries()) {
            value.next = map.get(key?.next) ?? null;
            value.random = map.get(key?.random) ?? null;
        }
        return map.get(head) ?? null;
    }
}
