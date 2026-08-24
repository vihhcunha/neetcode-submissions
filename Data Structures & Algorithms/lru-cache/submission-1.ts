class ListNode {
    value: number;
    key: number;
    next: ListNode = null;
    previous: ListNode = null;

    constructor (key: number, value: number, next: ListNode = null, previous: ListNode = null) {
        this.key = key;
        this.value = value;
        this.next = next;
        this.previous = previous;
    }
}

class LRUCache {
    hashMap: Map<number, ListNode> = new Map<number, ListNode>();
    currentSize: number = 0;
    head = new ListNode(0, 0);
    tail = new ListNode(0, 0);



    /**
     * @param {number} capacity
     */
    constructor(public capacity: number) {
        this.head.next = this.tail;
        this.tail.previous = this.head;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        let node = this.hashMap.get(key);
        if (!node) {
            return -1;
        }

        this.removeNode(node);
        this.addToEnd(node);
        return node.value;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        let node = this.hashMap.get(key);
        if (node){
            node.value = value;
            this.removeNode(node);
        }
        else {
            this.currentSize++;
            node = new ListNode(key, value);
        }
        this.addToEnd(node);
        this.hashMap.set(key, node);

        if (this.currentSize > this.capacity){
            this.hashMap.delete(this.head.next.key);
            this.removeNode(this.head.next);
            this.currentSize--;
        }
    }

    private removeNode(node: ListNode) {
        node.previous.next = node.next;
        node.next.previous = node.previous;
    }

    private addToEnd(node: ListNode) {
        node.previous = this.tail.previous;
        node.next = this.tail;

        this.tail.previous.next = node;
        this.tail.previous = node;
    }
}
