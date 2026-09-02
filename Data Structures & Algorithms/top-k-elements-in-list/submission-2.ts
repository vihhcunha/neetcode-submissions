class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        let map = new Map<number, number>();
        let bucket: number[][] = Array(nums.length);

        for (let num of nums) {
            map.set(num, (map.get(num) ?? 0) + 1);
        }

        for (let [num, count] of map.entries()) {
            let existing = bucket[count] ?? [];
            existing.push(num);
            bucket[count] = existing;
        }
        let result: number[] = [];
        for (let i = bucket.length - 1; i >= 0; i--) {
            let j = 0;
            while (bucket[i] != null && bucket[i]?.length > 0 && result.length < k && j < bucket[i].length) {
                result.push(bucket[i][j]);
                j++;
            }
        }
        return result;
    }
}
