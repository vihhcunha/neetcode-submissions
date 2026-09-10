class KthLargest {
    arr: number[] = [];
    k: number;
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k: number, nums: number[]) {
        this.arr = nums;
        this.k = k;
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val: number): number {
        this.arr.push(val);
        this.arr.sort((a,b) => a - b);
        return this.arr[this.arr.length - this.k]
    }
}
